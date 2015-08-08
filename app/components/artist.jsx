'use strict';

var React = require('react');
var Radium = require('radium');

var SongList = require('./songList');

var styles = require('./../styles');

var Artist = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    songs: React.PropTypes.object.isRequired
  },

  getInitialProps: function() {
    return {
      name: '',
      songs: {}
    };
  },

  render: function() {
    return (
      <fieldset style={styles.artist.fieldset}>
        <legend style={styles.artist.legend}>
          <h2>~ {this.props.name} ~</h2>
        </legend>

        <SongList songs={this.props.songs} />
      </fieldset>
    );
  }
});

module.exports = Radium(Artist);
