'use strict';

var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var Reflux = require('reflux');

var TextareaAutoSize = require('react-textarea-autosize');

var SongActions = require('js/actions/song');

var SongStore = require('js/stores/song');

var Compiler = require('songdown-compiler');

var Box = require('js/components/box');

var Song = React.createClass({

  mixins: [
    Reflux.connect(SongStore, 'source'),
    PureRenderMixin
  ],

  componentDidMount: function() {
    if (this.props.params.artist && this.props.params.name) {
      SongActions.load(this.props.params.artist, this.props.params.name);
    }
  },

  handleChange: function(event) {
    this.setState({
      source: event.target.value
    });
    SongActions.setSource(event.target.value);
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
            value={this.state.source}
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
          <Compiler source={this.state.source} theme='default' />
        </div>
      </div>
    );
  }
});

module.exports = Song;
