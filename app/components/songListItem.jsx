'use strict';

var React = require('react');
var Radium = require('radium');

var Router = require('react-router');
var Navigation = Router.Navigation;

var styles = require('./../styles');

var SongListItem = React.createClass({

  mixins: [
    Navigation
  ],

  propTypes: {
    song: React.PropTypes.object.isRequired
  },

  getDefaultProps: function() {
    return {
      song: {}
    };
  },

  getInitialState: function() {
    return {
      href: ''
    };
  },

  componentDidMount: function() {
    this.setState({
      href: '/song/' + this.props.song.artist + '/' + this.props.song.name
    });
  },

  handleClick: function(e) {
    // Don't break middle-click or (meta|ctrl)+click (new tab)
    if (!(e.button === 1 || e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      this.transitionTo(this.state.href);
    }
  },

  render: function() {
    return (
      <a
        style={styles.songListItem}
        onClick={this.handleClick}
        href={this.state.href}
      >
        {this.props.song.name}
      </a>
    );
  }
});

module.exports = Radium(SongListItem);
