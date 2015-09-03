'use strict';

var path = require('path');
var fs = require('fs');

var express = require('express');
var app = express();

var React = require('react');

var Compiler = require('songdown-compiler');

/*
 * =====
 * UTILS
 * =====
 */

var strToBool = function(str) {
  if (str === 'true') {
    return true;
  } else {
    return false;
  }
};

var strToInt = function(str) {
  return parseInt(str, 10);
}

/*
 * =============
 * CONFIGURATION
 * =============
 */

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

/*
 * ==========
 * MIDDLEWARE
 * ==========
 */

// Do this to make sure we're always using https. This is so that we avoid issues with protocols.
if (process.env.NODE_ENV === 'production') {
  app.use(function(req, res, next) {
    if (req.headers['X-Forwarded-Proto'] === 'https') {
      res.redirect('https://' + req.headers.host + req.url);
    } else {
      next();
    }
  });
}

app.use('/static', express.static('public'));



/*
 * ======
 * ROUTES
 * ======
 */

var toApp = function(req, res, next) {
  req.url = '/';
  next();
}

app.get('/edit', toApp);
app.get('/edit/:artist/:name', toApp);
app.get('/song', toApp);
app.get('/song/:artist/:name', toApp);

app.get('/', function(req, res) {

  var protocol = process.env.NODE_ENV === 'production' ? 'https://' : 'http://';
  var base = protocol + req.get('host') + '/';
  var jsonFile = path.join(__dirname, 'public/songs.json');

  var partials = {
    scriptUrl: base + 'static/app.js',
    songsJsonUrl: process.env.NODE_ENV !== 'production' && fs.existsSync(jsonFile) ?
      base + 'static/songs.json'
      : 'https://raw.githubusercontent.com/1vasari/songdown-songs/master/songs.json'
  };

  res.render('index', partials);
});

app.get('/print', function(req, res) {

  // Sort out types and stuff.
  var compilerOptions = {
    fontSize: strToInt(req.query.fontSize),
    showChords: strToBool(req.query.showChords),
    showComments: strToBool(req.query.showComments),
    showGOTOs: strToBool(req.query.showGOTOs),
    source: req.query.source,
    theme: req.query.theme,
    transpose: strToInt(req.query.transpose)
  }

  var partials = {
    artist: req.query.artist,
    html: React.renderToStaticMarkup(React.createElement(Compiler, compilerOptions)),
    key: req.query.key,
    name: req.query.name
  };

  res.render('print', partials);
});



/*
 * =========
 * LISTENING
 * =========
 */

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('Listening on port %d for requests.', port);
});
