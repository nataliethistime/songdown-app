'use strict';

var React = require('react');

var transpose = require('songdown-transpose');

var Key = React.createClass({

  propTypes: {
    songKey: React.PropTypes.string,
    transpose: React.PropTypes.number.isRequired
  },

  getDefaultProps: function() {
    return {
      songKey: '',
      transpose: 0
    };
  },

  render: function() {
    var key = transpose.transpose(this.props.songKey, this.props.transpose);

    if (key) {
      // Make it easier for non-musicians to understand the difference between, say, E and Em.
      if (key.match(/m$/)) {
        key = key.replace(/m$/, '');
        key += ' minor';
      } else {
        key += ' major';
      }
    } else {
      key = 'not specified';
    }

    return (
      <div>
        <strong>Key:</strong> {key}
      </div>
    );
  }
});

module.exports = Key;
