'use strict';

module.exports = function() {
  this.root('pages#application');
  this.match('*', 'pages#application');
};
