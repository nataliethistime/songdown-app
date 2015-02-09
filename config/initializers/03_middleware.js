'use strict';

var express = require('express');
var poweredBy = require('connect-powered-by');
var assets = require('connect-assets');
var path = require('path');

module.exports = function() {
  if (this.env === 'development') {
    this.use(express.logger());
  }
  this.use(poweredBy('Locomotive'));
  this.use(express.favicon());
  this.use(assets({
    paths: [this.get('publicDir')]
  }));
  this.use(express.bodyParser());
  this.use(express.methodOverride());
  this.use(this.router);
};
