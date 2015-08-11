'use strict';

var Reflux = require('reflux');

var VideoActions = require('./../actions/video');

var VideoStore = Reflux.createStore({
  listenables: VideoActions,

  getInitialState: function() {
    var val = localStorage.showVideo;

    if (val === true || val === false) {
      return val;
    // Work around localStorage only storing strings.
    } else if (val === 'true') {
      return true;
    } else if (val === 'false') {
      return false;
    } else {
      // Don't show the video by default to stave load times.
      return false;
    }
  },

  init: function() {
    this.data = this.getInitialState();
  },

  onToggle: function() {
    this.data = localStorage.showVideo = this.data ? false : true;
    this.trigger(this.data);
  }

});

module.exports = VideoStore;
