'use strict'

browserify = require 'browserify'
coffee = require 'coffee-script'
mkdirp = require 'mkdirp'
Promise = require 'bluebird'
through = require 'through'

fs = require 'fs'
path = require 'path'


basedir = null
bundle = (file) ->
  new Promise (resolve, reject) ->
    b = browserify file, {basedir}
    b.bundle (err, buf) ->
      reject(err) if err?

      newPath = path.join basedir, 'build', file
      mkdirp.sync path.join newPath, '..' # newPath has the file on the end, so '..' to remove it.

      # TODO: this should have a try/catch thingo!
      fs.writeFileSync newPath, buf.toString()

      resolve()


module.exports = (next) ->

  console.log 'Bundling client code.'
  basedir = @get 'publicDir'

  bundle './js/index.js'
    .then ->
      bundle './js/song.js'
    .then ->
      bundle './js/edit.js'
    .then next
