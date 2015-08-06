'use strict';

var Reflux = require('reflux');
var _ = require('lodash');

var getData = require('./../data');

var CollectionActions = require('./../actions/collection');

var CollectionStore = Reflux.createStore({
  listenables: CollectionActions,

  getInitialState: function() {
    return {};
  },

  onLoad: function() {
    getData(this.trigger, this);
  },

  onClear: function() {
    this.trigger({});
  }
});

module.exports = CollectionStore;
