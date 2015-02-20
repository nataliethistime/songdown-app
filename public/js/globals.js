'use strict';

// Export the global so that the templates.js file has somewhere to put it's stuff.
window.Handlebars = require('handlebars');

window.$ = window.jQuery = require('jquery');
window._ = require('lodash');
window.Backbone = require('backbone');
window.Backbone.$ = window.$;

window.request = require('request');
