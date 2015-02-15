'use strict';

module.exports = function() {
  this.root('pages#index');
  this.match('edit', 'pages#edit');
  this.match('edit/:artist/:track', 'pages#edit');
  this.match('song/:artist/:track', 'pages#song');
  this.match('*', 'pages#notFound');
};
