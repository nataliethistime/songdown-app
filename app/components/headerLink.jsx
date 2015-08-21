'use strict';

var React = require('react');
var Radium = require('radium');

var styles = require('./../styles');

var HeaderLink = React.createClass({

  propTypes: {
    href: React.PropTypes.string.isRequired
  },

  getDefaultProps: function() {
    return {
      href: '/'
    };
  },

  render: function() {
    return (
      <a
        style={styles.headerLink}
        href={this.props.href}
      >
        {this.props.children}
      </a>
    );
  }
});

module.exports = Radium(HeaderLink);
