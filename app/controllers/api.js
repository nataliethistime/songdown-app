'use strict';

var Controller = require('locomotive').Controller;
module.exports = new Controller();

var Song = require('../models/song');


// This is just a quick wrapper to simplify the controller functions.
function jsonResponse(data, self) {
  self.respond({
    default: function() {
      self.res.json(data);
    }
  });
}



module.exports.getSong = function() {
  var self = this;
  var obj = this.param('song');
  var conditions = {
    artist: obj.artist,
    track: obj.track
  };
  var options = {
    new: true
  };

  Song.findOneAndUpdate(conditions, {$inc: {views: 1}}, options, function(err, song) {

    // TODO: handle errors better!
    if (err) {
      throw err;
    }

    jsonResponse(song, self);
  });

};

module.exports.setSong = function() {
  var self = this;

  // TODO: should we validate the contents of this obj? Probably.
  var obj = this.param('song');
  var conditions = {
    artist: obj.artist,
    track: obj.track
  };
  var options = {
    upsert: true,
    new: true
  };

  Song.findOneAndUpdate(conditions, obj, options, function(err, song) {

    // TODO: handle errors better!
    if (err) {
      throw err;
    }

    jsonResponse({success: true}, self);
  });
};

module.exports.getTopSongs = function() {
  var self = this;

  Song.find()
    .limit(10)
    .sort('-views')
    .exec(function(err, data) {

      // TODO: handle errors better!
      if (err) {
        throw err;
      }

      jsonResponse(data, self);
    });
};
