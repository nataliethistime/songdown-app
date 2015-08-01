'use strict';

var Reflux = require('reflux');
var _ = require('lodash');

var getData = require('js/data');

var SongActions = require('js/actions/song');

var SongStore = Reflux.createStore({
  listenables: SongActions,

  getInitialState: function() {
    return {
      artist: '',
      name: '',
      source: ''
    };
  },

  init: function() {
    this.data = this.getInitialState();
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    return this.props.song.source !== nextProps.song.source;
  },

  onLoad: function(artist, name) {
    getData(function(data) {
      if (data && data[artist] && data[artist][name]) {
        this.data = data[artist][name];
        this.trigger(data[artist][name]);
      }
    }, this);
  },

  onSetSource: function(value) {
    this.data.source = value;
    this.trigger(this.data);
  }

});

module.exports = SongStore;
