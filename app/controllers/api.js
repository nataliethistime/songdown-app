'use strict';

var Controller = require('locomotive').Controller;
var APIController = new Controller();

var Song = require('../models/song');

var jsonResponse = function(data, self) {
  data = data || {};

  var res = function() {
    return self.res.json(data);
  };

  self.respond({
    json: res,
    default: res
  });
};

APIController.getCollection = function() {
  return jsonResponse(Song.loadSongs(this.app.get('songDir')), this);
};

APIController.getSong = function() {
  var fname = this.param('artist') + ' - ' + this.param('name') + '.songdown';
  var song = new Song(fname, this.app.get('songDir'));

  return jsonResponse({
    source: song.load()
  }, this);
};

module.exports = APIController;
