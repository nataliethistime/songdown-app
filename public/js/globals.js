'use strict';

// The auto-generated templates.js file needs Handlebars to be a global so it can append it's
// template functions to the Handlebars.templates object.
window.Handlebars = require('handlebars');

window.$ = window.jQuery = require('jquery');
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
