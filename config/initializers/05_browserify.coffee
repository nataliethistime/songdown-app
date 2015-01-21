'use strict'

browserify = require 'browserify'
coffee = require 'coffee-script'
mkdirp = require 'mkdirp'
Promise = require 'bluebird'
through = require 'through'

fs = require 'fs'
path = require 'path'

# Compile CoffeeScript code.
coffeeify = (file) ->
  data = ''

  write = (buf) -> data += buf

  # Only compile coffee code
  if  file.match /\.coffee$/
    through write, ->
      this.queue coffee.compile data
      this.queue null
  else
    through write, ->
      this.queue data
      this.queue null


basedir = null
bundle = (file) ->
  new Promise (resolve, reject) ->
    b = browserify file, {basedir, extensions: ['.coffee']}
    b.transform coffeeify
    b.bundle (err, buf) ->
      reject err if err?

      newPath = path.join basedir, file.replace /coffee/g, 'js'
      mkdirp.sync path.join newPath, '..' # newPath has the file on the end, so '..' to remove it.

      # TODO: this should have a try/catch thingo!
      fs.writeFileSync newPath, buf.toString()

      resolve()


module.exports = (next) ->

  console.log 'Bundling client code.'
  basedir = @get 'publicDir'

  bundle './coffee/index.coffee'
    .then ->
      bundle './coffee/song.coffee'
    .then next
