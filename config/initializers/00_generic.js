'use strict';

var path = require('path');

module.exports = function() {
  var publicDir = path.join(__dirname, '../../public');
  this.set('publicDir', publicDir);
};
