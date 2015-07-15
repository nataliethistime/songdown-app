'use strict';

module.exports = function() {
  this.root('pages#application');
  this.match('api/getCollection', 'api#getCollection');
  this.match('api/getSong/:artist/:name', 'api#getSong');
  this.match('*', 'pages#application');
};
