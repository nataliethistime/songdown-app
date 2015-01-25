'use strict';

var hbs = require('hbs');
require('connect-assets');

var path = require('path');

module.exports = function() {

  hbs.registerHelper('js', function(name) {
    return js(name);
  });

  hbs.registerHelper('css', function(name) {
    return css(name);
  });

  hbs.registerHelper('assetPath', function(name) {
    return assetPath(name);
  });

  this.set('views', path.join(__dirname, '/../../app/views'));
  this.set('view engine', 'hbs');
  this.engine('hbs', hbs.__express);
};
