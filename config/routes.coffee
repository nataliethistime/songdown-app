'use strict'

module.exports = ->
  @root 'pages#index'
  @match 'edit'       , 'pages#edit'
  @match 'edit/:fname', 'pages#edit'
  @match 'song/:fname', 'pages#song'
