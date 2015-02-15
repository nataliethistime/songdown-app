'use strict';

var Controller = require('locomotive').Controller;
module.exports = new Controller();

module.exports.index = function() {
  this.title = 'Songdown Collection';
  this.versionString = this.app.get('versionString');
  this.render();
};

module.exports.song = function() {
  this.artist = this.param('artist');
  this.track = this.param('track');
  this.versionString = this.app.get('versionString');
  this.render();
};

module.exports.edit = function() {
  this.artist = this.param('artist');
  this.track = this.param('track');
  this.versionString = this.app.get('versionString');
  this.render();
};

module.exports.notFound = function() {
  this.render();
};
