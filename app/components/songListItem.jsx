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

  getInitialProps: function() {
    return {
      song: {}
    };
  },

  handleClick: function(e) {
    e.preventDefault();
    this.transitionTo('/song/' + this.props.song.artist + '/' + this.props.song.name);
  },

  render: function() {
    return (
      <a
        style={styles.songListItem}
        onClick={this.handleClick}
      >
        {this.props.song.name}
      </a>
    );
  }
});

module.exports = Radium(SongListItem);
