'use strict';

var Controller = require('locomotive').Controller;
module.exports = new Controller();

var Song = require('../models/song');

module.exports.index = function() {
  this.title = 'Songdown Collection';
  this.songs = Song.loadSongs(this.app.get('songDir'));
  this.versionString = this.app.get('versionString');
  this.render();
};

module.exports.song = function() {
  var song = new Song(this.param('fname'), this.app.get('songDir'));
  if (song.exists()) {
    this.fname = song.fname;
    this.artist = song.artist;
    this.track = song.track;
    this.source = song.escape();
    this.versionString = this.app.get('versionString');
    this.render();
  } else {
    // TODO: make a 404 page!
  }
};

module.exports.edit = function() {
  var fname = this.param('fname');
  if (fname) {
    var song = new Song(this.param('fname'), this.app.get('songDir'));
    this.source = song.load();
  } else {
    this.source = '';
  }
  this.versionString = this.app.get('versionString');
  this.render();
};
