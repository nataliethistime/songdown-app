'use strict';

var React = require('react');
var Radium = require('radium');

var Router = require('react-router');
var Navigation = Router.Navigation;

var styles = require('./../styles');

var HeaderLink = React.createClass({

  mixins: [
    Navigation
  ],

  propTypes: {
    href: React.PropTypes.string.isRequired
  },

  getDefaultProps: function() {
    return {
      href: '/'
    };
  },

  handleClick: function(e) {
    e.preventDefault();
    this.transitionTo(this.props.href);
  },

  render: function() {
    return (
      <a
        style={styles.headerLink}
        onClick={this.handleClick}
      >
        {this.props.children}
      </a>
    );
  }
});

module.exports = Radium(HeaderLink);
