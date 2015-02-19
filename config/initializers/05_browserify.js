'use strict';

var browserify = require('browserify');
var mkdirp = require('mkdirp');
var Promise = require('bluebird');
var through = require('through');

var fs = require('fs');
var path = require('path');

var basedir = null;
function bundle(file) {
  return new Promise(function(resolve, reject) {
    var b = browserify(file, {
      basedir: basedir,
      noParse: ['jquery']
    });

    b.bundle(function(err, buf) {
      if (err) {
        reject(err);
      }

      var newPath = path.join(basedir, 'build', file);
      mkdirp.sync(path.join(newPath, '..')); // Use '..' to cut the filename from the path.

      try {
        fs.writeFileSync(newPath, buf.toString());
      } catch (e) {
        console.log("\n\n");
        console.log('fatal: Failed at ' + file);
        throw e;
      }

      resolve();
    });
  });
}

module.exports = function(next) {
  console.log('Bundling client code.');
  basedir = this.get('publicDir');
  bundle('./js/index.js').then(function() {
    bundle('./js/song.js');
  }).then(function() {
    bundle('./js/edit.js');
  }).then(function() {
    bundle('./js/globals.js');
  }).then(next);
};
