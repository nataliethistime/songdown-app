'use strict';

module.exports = function() {
  this.root('pages#index');
  this.match('/application', 'pages#application');
  this.match('/application/*', 'pages#application');

  this.match('api/getSong', 'api#getSong', {via: 'post'});
  this.match('api/setSong', 'api#setSong', {via: 'post'});
  this.match('api/getTopSongs', 'api#getTopSongs', {via: 'post'});
  this.match('api/search', 'api#search', {via: 'post'});

  // Finally, the good ol' 404 page.
  this.match('*', 'pages#notFound');
};
