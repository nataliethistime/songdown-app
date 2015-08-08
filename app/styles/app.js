'use strict';

var app = {
  fontFamily: '"Segoe UI", "Arial"',
  fontSize: 16,
  backgroundColor: 'rgb(129, 131, 133)',
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  overflow: 'auto',
  margin: '0 0',

  '@media print': {
    backgroundColor: '#ffffff',
    padding: 0,
    overflow: 'visible'
  }
};

module.exports = app;
