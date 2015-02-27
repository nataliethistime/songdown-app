'use strict';

// The auto-generated templates.js file needs Handlebars to be a global so it can append it's
// template functions to the Handlebars.templates object.
window.Handlebars = require('handlebars');

window.$ = window.jQuery = require('jquery');

// Just a plugin that fires a callback when the user finishes typing.
$.fn.onTypeEnd = function(callback) {
  var timeoutFunc = undefined;
  var start = 0;
  var time = 1000;
  var extraTime = 1000;

  $(this).bind('keyup', onKeyPress);

  function onKeyPress() {
    clearTimeout(timeoutFunc);

    if (start == 0) {
      start = new Date().getTime();
      timeoutFunc = setTimeout(onTimeOut, time + extraTime);
      return;
    }

    var now = new Date().getTime();
    time = (time + (now - start)) / 2;
    start = now;
    timeoutFunc = setTimeout(onTimeOut, (time * 2) + extraTime);
  }

  function onTimeOut() {
    callback.apply();

    // Reset to default.
    start = 0;
    time = 1000;
  }

   return this;
};

window._ = require('lodash');
window.Backbone = require('backbone');
require('Backbone.Mutators'); // Note: Doesn't export anything.
window.Backbone.$ = window.$;

// TODO: this should only be kept here and a wrapper made round various request calls.
window.request = require('request');

window.Songdown = {
  apiRequest: function(method, data, callback, self) {
    var url = window.location.origin + '/api/' + method;
    request.post(url, {json: true, form: data}, function(err, req, body) {

      // TODO: handle errors better!
      if (err) {
        throw err;
      }

      callback.call(self, body);
    });
  }
};
