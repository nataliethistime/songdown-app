'use strict';

var React = require('react');
var Reflux = require('reflux');
var Radium = require('radium');

var VideoStore = require('./../stores/video');

var YoutubeVideo = require('react-youtube');

var styles = require('./../styles');

var Youtube = React.createClass({

  mixins: [
    Reflux.connect(VideoStore, 'showVideo')
  ],

  propTypes: {
    url: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      url: ''
    };
  },

  render: function() {
    if (this.props.url && this.state.showVideo) {
      return (
        <div style={styles.youtube}>
          <YoutubeVideo
            url={this.props.url}
          />
        </div>
      );
    } else {
      return <div></div>;
    }
  }
});

module.exports = Radium(Youtube);
