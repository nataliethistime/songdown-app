'use strict';

module.exports = function() {
  this.root('pages#index');
  this.match('edit', 'pages#edit');
  this.match('edit/:artist/:track', 'pages#edit');
  this.match('song/:artist/:track', 'pages#song');
  this.match('*', 'pages#notFound');

  this.match('api/getSong', 'api#getSong', {via: 'post'});
  this.match('api/setSong', 'api#setSong', {via: 'post'});
  this.match('api/getTopSongs', 'api#getTopSongs', {via: 'post'});
  this.match('api/search', 'api#search', {via: 'post'});
};
