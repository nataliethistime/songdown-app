'use strict';

var Reflux = require('reflux');
var $ = require('jquery');
var _ = require('lodash');

var getData = require('js/data');

var CollectionActions = require('js/actions/collection');

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
