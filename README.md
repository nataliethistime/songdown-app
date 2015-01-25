# songdown-app

This is the web application component of the Songdown project.

[![Code Climate](https://codeclimate.com/github/1vasari/songdown-app/badges/gpa.svg)](https://codeclimate.com/github/1vasari/songdown-app)
[![Dependency Status](https://david-dm.org/1vasari/songdown-app.svg?style=flat-square)](https://david-dm.org/1vasari/songdown-app)

# TO-DO (Just some random thoughts)
- Split intermingled pieces of code into separate modules.
- Add support for PDF files (sheet music, I guess?)

# Changes

### 0.0.3
- Use Browserify to bundle dependencies in the front-end.
- Added a `.gitignore` file to not track the Browserified files.
- Remove anchors in the song view.
- Compile the song into HTML on the client side.
- Implemented the *Songdown Editor* which is a side by side editor and preview page, making it really easy to mess with the Songdown syntax.
- Added a "Fork me on Github" badge to the index page.
- Moved the transpose code to a separate module. Shortened the song view's Coffee code by about 40 lines. Smooth.
- Removed all CoffeeScript code from the entire project!!

### 0.0.1 (2015-1-18)
- Initial moving of the application from an Express application to a Locomotive app. Note: most things are not really tested in the new environment, most likely there are a lot of bugs lurking.

# License

This project is made with :heart: under the MIT license by Nathan McCallum.
