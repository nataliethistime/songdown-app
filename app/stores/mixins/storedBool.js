'use strict';

var _ = require('lodash');

var getInitialState = function(propName, defaultValue) {
  var val = window.localStorage[propName];

  if (val === true || val === false) {
    return val;
  // Work around localStorage only storing strings.
  } else if (val === 'true') {
    return true;
  } else if (val === 'false') {
    return false;
  } else {
    return defaultValue;
  }
};

var init = function() {
  this.data = this.getInitialState();
};

var onToggle = function(propName) {
  this.data = window.localStorage[propName] = (this.data ? false : true);
  this.trigger(this.data);
};

module.exports = function(propName, toggleActionName, defaultValue) {
  var mixin = {};

  mixin.getInitialState = _.partial(getInitialState, propName, defaultValue);
  mixin.init = init;
  mixin[toggleActionName] = _.partial(onToggle, propName);

  return mixin;
};
