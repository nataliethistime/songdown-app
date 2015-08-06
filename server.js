'use strict';

var path = require('path');
var express = require('express');
var app = express();

var router = require('express-spa-router');

app.use(router(app, {
  extraRoutes: [
    'song',
    'edit'
  ]
}));

app.use('/static', express.static('public'));

app.get('/', function(req, res) {
  res.sendfile(path.join(__dirname, 'public/index.html'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('Listening on port %d for requests.', port);
});
