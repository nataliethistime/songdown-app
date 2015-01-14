'use strict'

express = require 'express'
poweredBy = require 'connect-powered-by'
assets = require 'connect-assets'

path = require 'path'

module.exports = ->

  @use(express.logger()) if @env is 'development'

  @use poweredBy 'Locomotive'
  @use express.favicon()

  @use assets
    paths: [
      @get 'staticDir'
    ]

  @use express.bodyParser()
  @use express.methodOverride()
  @use @router
  @use express.errorHandler()
