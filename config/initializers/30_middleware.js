var express = require('express');
var poweredBy = require('connect-powered-by');
var csCompiler = require('connect-coffee-script');

var path = require('path');

module.exports = function() {
  // Use middleware.  Standard [Connect](http://www.senchalabs.org/connect/)
  // middleware is built-in, with additional [third-party](https://github.com/senchalabs/connect/wiki)
  // middleware available as separate modules.
  if ('development' === this.env) {
    this.use(express.logger());
  }

  var staticDir = __dirname + '/../../public';

  this.use(poweredBy('Locomotive'));
  this.use(express.favicon());
  this.use(csCompiler({
    src: staticDir
  }));
  this.use(express.static(staticDir));
  this.use(express.bodyParser());
  this.use(express.methodOverride());
  this.use(this.router);
  this.use(express.errorHandler());
}
