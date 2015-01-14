'use strict'

module.exports = ->
  @root 'pages#index'
  @match 'song/:fname', 'pages#song'
