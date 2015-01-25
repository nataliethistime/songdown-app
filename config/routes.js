'use strict';

module.exports = function() {
  this.root('pages#index');
  this.match('edit'       , 'pages#edit');
  this.match('edit/:fname', 'pages#edit');
  this.match('song/:fname', 'pages#song');
};
