'use strict'

hbs = require 'hbs'
require 'connect-assets'

path = require 'path'

module.exports = ->

  # Define all the Handlebars helpers.
  hbs.registerHelper 'js', (name) ->
    js name

  hbs.registerHelper 'css', (name) ->
    css name

  hbs.registerHelper 'assetPath', (name) ->
    assetPath name


  # Setup Handlebars as the engine to be used.
  this.set 'views', path.join __dirname, '/../../app/views'
  this.set 'view engine', 'hbs'
  this.engine 'hbs', hbs.__express
