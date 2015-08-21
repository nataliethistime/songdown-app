'use strict';

var Reflux = require('reflux');

var FontSizeActions = require('./../actions/fontSize');

var FontSizeStore = Reflux.createStore({
  listenables: FontSizeActions,

  getInitialState: function() {
    return 16;
  },

  init: function() {
    this.fontSize = this.getInitialState();
  },

  onIncrease: function() {
    this.fontSize += 1;
    this.trigger(this.fontSize);
  },

  onDecrease: function() {
    this.fontSize -= 1;
    this.trigger(this.fontSize);
  },

  onReset: function() {
    this.fontSize = this.getInitialState();
    this.trigger(this.fontSize);
  }
});

module.exports = FontSizeStore;
