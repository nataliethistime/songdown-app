'use strict';

var path = require('path');
var fs = require('fs');

var express = require('express');
var app = express();

var router = require('express-spa-router');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(router(app, {
  extraRoutes: [
    'song',
    'edit'
  ]
}));

app.use('/static', express.static('public'));

app.get('/', function(req, res) {

  var protocol = req.protocol;
  var base = protocol + '://' + req.get('host') + '/';
  var jsonFile = path.join(__dirname, 'public/songs.json');

  var partials = {
    scriptUrl: base + 'static/app.js',
    songsJsonUrl: process.env.NODE_ENV !== 'production' && fs.existsSync(jsonFile) ?
      base + 'static/songs.json'
      : 'https://raw.githubusercontent.com/1vasari/songdown-songs/master/songs.json'
  };

  res.render('index', partials);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('Listening on port %d for requests.', port);
});
