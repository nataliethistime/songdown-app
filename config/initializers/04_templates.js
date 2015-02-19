'use strict';

var hbr = require('handlebar-rider');
var path = require('path');

module.exports = function() {
  hbr.configure({
    in: path.join(__dirname, '../../public/templates'),
    out: path.join(__dirname, '../../public/js/templates.js'),
    minify: false,
    ext: ['.hbs']
  });
  hbr.compile();
};
