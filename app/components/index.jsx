'use strict';

var React = require('react');

var SongActions = require('./../actions/song');

var Box = require('./box');
var Collection = require('./collection');

var Index = React.createClass({

  componentDidMount: function() {
    // Ensure we clear out any song data now that we're on the index page.
    SongActions.clear();
  },

  render: function() {
    return (
      <div>

        <Box>
          <Collection />
        </Box>

      </div>
    );
  }
});

module.exports = Index;
