'use strict';

var _ = require('lodash');

var getInitialState = function(propName, defaultValue) {
  var val = window.localStorage[propName];

  if (val) {
    return val;
  } else {
    return defaultValue;
  }
};

var init = function() {
  this.data = this.getInitialState();
};

var onSetValue = function(propName) {
  this.data = window.localStorage[propName] = this.data;
  this.trigger(this.data);
};

module.exports = function(propName, setActionName, defaultValue) {
  var mixin = {};

  mixin.getInitialState = _.partial(getInitialState, propName, defaultValue);
  mixin.init = init;
  mixin[setActionName] = _.partial(onSetValue, propName);

  return mixin;
};
