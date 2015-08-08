'use strict';

var box = {
  base: {
    display: 'block',
    background: '#ffffff',
    padding: '20px',
    borderRadius: '3px',
    boxShadow: '1px 1px 4px rgba(0, 0, 0, 0.4)',

    width: '75%',
    margin: '40px auto',

    '@media print': {
      border: 'none',
      boxShadow: 'none',
      width: '100%',
      margin: '0 0',
      padding: 0,
      background: '#ffffff',
    }
  },

  transparent: {
    background: 'rgba(255, 255, 255, 0.6)',

    '@media print': {
      background: '#ffffff'
    }
  }
};

module.exports = box;
