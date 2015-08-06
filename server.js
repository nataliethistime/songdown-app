'use strict';

var path = require('path');
var express = require('express');
var app = express();

var port = process.env.PORT || 5000;

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));

app.listen(port, function() {
  console.log('Listening on port %d for requests.', port);
});
