'use strict';

var React = require('react');
var Reflux = require('reflux');
var _ = require('lodash');

var TextareaAutoSize = require('react-textarea-autosize');

var SongActions = require('./../actions/song');

var SongStore = require('./../stores/song');

var Compiler = require('songdown-compiler');

var Song = React.createClass({

  mixins: [
    Reflux.connect(SongStore, 'song')
  ],

  componentDidMount: function() {
    if (this.props.params.artist && this.props.params.name) {
      SongActions.load(this.props.params.artist, this.props.params.name);
    }
  },

  handleChange: function(event) {
    var obj = _.clone(this.state.song);
    obj.source = event.target.value;
    this.setState({
      song: obj
    });
    SongActions.setSource(event.target.value);
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    return this.state.song.source !== nextState.song.source;
  },

  render: function() {
    return (
      <div>
        <div style={{
          width: '45%',
          float: 'left'
        }}>
          <em>Enter Songdown</em>
          <TextareaAutoSize
            value={this.state.song.source}
            rows={4}
            useCacheForDOMMeasurements={true}
            onChange={this.handleChange}
            style={{
              width: '100%',
              fontSize: 16
            }}
          >
        </TextareaAutoSize>
        </div>

        <div style={{
          width: '45%',
          float: 'right'
        }}>
          <em>Preview</em>
          <Compiler source={this.state.song.source} theme="default" />
        </div>
      </div>
    );
  }
});

module.exports = Song;
