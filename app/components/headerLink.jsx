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
    // Don't break middle-click or (meta|ctrl)+click (new tab)
    if (!(e.button == 1 || e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      this.transitionTo(this.props.href);
    }
  },

  render: function() {
    return (
      <a
        style={styles.headerLink}
        onClick={this.handleClick}
        href={this.props.href}
      >
        {this.props.children}
      </a>
    );
  }
});

module.exports = Radium(HeaderLink);
