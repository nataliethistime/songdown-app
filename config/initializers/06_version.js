'use strict';

var sprintf = require('sprintf-js').sprintf;

// Get the version from the package.json file in the root of the project.
module.exports = function() {
  var packageJsonPath = __dirname + '/../../package.json';
  var json = require(packageJsonPath);

  var obj = new Date();
  var date = sprintf('%d/%d/%d', obj.getFullYear(), obj.getMonth() + 1, obj.getDate());
  var versionString = sprintf('%s - Songdown version %s.',
    date, json.version);

  this.set('version', json.version);
  this.set('versionString', versionString);
};
