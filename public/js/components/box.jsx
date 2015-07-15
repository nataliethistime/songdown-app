'use strict';

var React = require('react');

var Box = React.createClass({

  propTypes: {
    transparent: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      transparent: true
    };
  },

  render: function() {
    var style = {
      display: 'block',
      background: this.props.transparent ? 'rgba(255, 255, 255, 0.6)' : '#ffffff',
      padding: '20px',
      borderRadius: '3px',
      boxShadow: '1px 1px 4px rgba(0, 0, 0, 0.4)',

      width: '75%',
      margin: '40px auto'
    };

    return (
      <div style={style}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Box;
