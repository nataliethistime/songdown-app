'use strict';

var Reflux = require('reflux');

var TransposeActions = require('./../actions/transpose');

var TransposeStore = Reflux.createStore({
  listenables: TransposeActions,

  getInitialState: function() {
    return 0;
  },

  init: function() {
    this.data = this.getInitialState();
  },

  onTransposeUp: function() {
    this.data += 1;
    this.trigger(this.data);
  },

  onTransposeDown: function() {
    this.data -= 1;
    this.trigger(this.data);
  },

  onReset: function() {
    this.data = 0;
    this.trigger(this.data);
  }

});

module.exports = TransposeStore;
