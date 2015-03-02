'use strict';

var Controller = require('locomotive').Controller;
module.exports = new Controller();

module.exports.index = function() {
  this.title = 'Songdown';
  this.versionString = this.app.get('versionString');
  this.render();
};

module.exports.application = function() {
  this.render();
};

module.exports.notFound = function() {
  this.render();
};
