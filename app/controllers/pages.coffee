'use strict'

_ = require 'lodash'
{Controller} = require 'locomotive'
module.exports = new Controller()

Song = require '../models/song'

module.exports.index = ->
  console.log @
  @title = 'Songdown Collection'
  @songs = Song::loadSongs @app.get 'songDir'
  @render()


module.exports.song = ->
  @fname = @param 'fname'
  song = new Song @fname, @app.get 'songDir'
  {@artist, @track} = song
  @html = song.toHtml()
  this.render()
