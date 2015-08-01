'use strict';

var path = require('path');

var bootable = require('bootable');
var browserify = require('browserify');
var environment = require('bootable-environment');
var locomotive = require('locomotive');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var vfs = require('vinyl-fs');

var startServer = function() {

  // Create a new application and initialize it with *required* support for
  // controllers and views.  Move (or remove) these lines at your own peril.
  var app = new locomotive.Application();
  app.phase(locomotive.boot.controllers(__dirname + '/app/controllers'));
  app.phase(locomotive.boot.views());

  // Add phases to configure environments, run initializers, draw routes, and
  // start an HTTP server.  Additional phases can be inserted as needed, which
  // is particularly useful if your application handles upgrades from HTTP to
  // other protocols such as WebSocket.
  app.phase(environment(__dirname + '/config/environments'));
  app.phase(bootable.initializers(__dirname + '/config/initializers'));
  app.phase(locomotive.boot.routes(__dirname + '/config/routes'));
  app.phase(locomotive.boot.httpServer(process.env.PORT || 5000, '0.0.0.0'));

  // Boot the application.  The phases registered above will be executed
  // sequentially, resulting in a fully initialized server that is listening
  // for requests.
  app.boot(function(err) {
    if (err) {
      console.error(err.message);
      console.error(err.stack);
      return process.exit(-1);
    }
  });

};

var b = browserify([path.join(__dirname, 'public/js/application.jsx')], {
  extensions: [
    // Include React files in the bundle.
    '.jsx'
  ],
  paths: [
    path.join(__dirname, 'public')
  ]
});

b.transform(reactify);
b.on('bundle', startServer);

b
  .bundle()
  .pipe(source('build.js'))
  .pipe(vfs.dest(path.join(__dirname, 'public/build/js')));
