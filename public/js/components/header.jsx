'use strict';

var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <h1 style={{
        border: '6px solid black',
        borderRadius: '40px',
        width: '40%',
        margin: '40px auto',
        padding: '10px',
        textAlign: 'center'
      }}>
        ~ Songdown ~
      </h1>
    );
  }
});

module.exports = Header;
