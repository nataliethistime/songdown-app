'use strict';

var React = require('react');
var Radium = require('radium');

var styles = require('./../styles');

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
    return (
      <div style={[styles.box.base, this.props.transparent && styles.box.transparent]}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Radium(Box);
