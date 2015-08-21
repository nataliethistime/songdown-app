'use strict';

var React = require('react');
var Radium = require('radium');

var styles = require('./../styles');

var SongListItem = React.createClass({
  propTypes: {
    song: React.PropTypes.object.isRequired
  },

  getInitialProps: function() {
    return {
      song: {}
    };
  },

  render: function() {
    var href = '/song/' + this.props.song.artist + '/' + this.props.song.name;

    return (
      <a
        style={styles.songListItem}
        href={href}
      >
        {this.props.song.name}
      </a>
    );
  }
});

module.exports = Radium(SongListItem);
