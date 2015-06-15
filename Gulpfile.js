'use strict';

var gulp = require('gulp');

var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

var path = require('path');

gulp.task('browserify', function() {
    var b = browserify([path.join(__dirname, 'public/js/application.jsx')], {
      extensions: [
        // Include React files in the bundle.
        '.jsx'
      ],
      paths: [
        path.join(__dirname, 'public')
      ]
    });

    b.transform(reactify);

    var stream = b
      .bundle()
      .pipe(source('build.js'))
      .pipe(gulp.dest(path.join(__dirname, 'public/build/js')));

    return stream;
});



gulp.task('default', ['browserify']);
