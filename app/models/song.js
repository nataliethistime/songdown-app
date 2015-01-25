'use strict';

var _ = require('lodash');
var glob = require('glob');
var normalizeNewline = require('normalize-newline');
var fs = require('fs');
var path = require('path');

function Song(fname, songDir) {

  this.songDir = songDir;

  var track = fname.replace(/\.songdown$/, '').split('-');
  var artist = track.shift().trim();
  var location = path.join(this.songDir, fname);

  this.artist = artist.trim();
  this.fname = fname.trim();
  this.location = location;
  this.track = track.join('').trim();

  this.attributes = function() {
    return {
      fname: this.fname,
      location: this.location,
      artist: this.artist,
      track: this.track
    }
  }

  this.exists = function() {
    return fs.existsSync(this.location);
  };

  this.load = function() {
    if (this.exists()) {
      return normalizeNewline(fs.readFileSync(this.location).toString());
    } else {
      return '';
    }
  };

  this.escapeNewlines = function() {
    var source = this.load();
    return source.replace(/\n/g, '\\n');
  };
}

function loadSongs(songDir) {
  var songs = {};
  var files = glob.sync('*.songdown', {
    cwd: songDir
  });

  _.each(files, function(fname) {
    var song = new Song(fname, songDir);
    if (!songs[song.artist]) {
      songs[song.artist] = [];
    }
    songs[song.artist].push(song.attributes());
  });

  return songs;
}

module.exports = Song;
module.exports.loadSongs = loadSongs;
