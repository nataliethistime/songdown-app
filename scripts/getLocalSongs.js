'use strict';

// This script assumes that `songdown-songs` and `songdown-app` are cloned into the same directory.
// This is all done so that the app can function offline.

var path = require('path');
var fs = require('fs');

var packager = require('songdown-packager');

var source = path.join(__dirname, '../../songdown-songs/songs');
var destination = path.join(__dirname, '../public');

if (fs.existsSync(source)) {
  console.log('Generating and using a local songs.json instead of downloading from Github.');

  packager.run(source, destination);
} else {
  console.log("No local songs.json found - we'll need to download it from Github!");
}
