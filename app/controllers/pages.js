'use strict';

var Controller = require('locomotive').Controller;

var PagesController = new Controller();

PagesController.application = function() {
  this.render();
};

module.exports = PagesController;
