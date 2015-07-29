'use strict';

var React = require('react');
var Reflux = require('reflux');
var _ = require('lodash');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var CollectionActions = require('js/actions/collection');

var CollectionStore = require('js/stores/collection');

var Song = React.createClass({
  propTypes: {
    song: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      hover: false
    };
  },

  handleOn: function() {
    this.setState({hover: true});
  },

  handleOff: function() {
    this.setState({hover: false});
  },

  getInitialProps: function() {
    return {
      song: {}
    };
  },

  render: function() {
    var style = {
        textDecoration: this.state.hover ? 'underline' : 'none',
        color: 'black',
        fontSize: 18
    };

    return (
      <Link
        to="song"
        params={this.props.song}
        style={style}
        onMouseEnter={this.handleOn}
        onMouseLeave={this.handleOff}
      >
        {this.props.song.name}
      </Link>
    );
  }
});

var SongList = React.createClass({
  propTypes: {
    songs: React.PropTypes.object.isRequired
  },

  getInitialProps: function() {
    return {
      songs: {}
    };
  },

  render: function() {
    var arr = [];

    _.each(this.props.songs, function(song, name) {
      arr.push(
        <li key={name}>
          <Song song={song} />
        </li>
      );
    });

    return (
      <ul style={{
        MozColumnCount: 2,
        WebkitColumnCount: 2,
        columnCount: 2
      }}>
        {arr}
      </ul>
    )
  }
});

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
      <fieldset style={{
          margin: '0 auto',
          width: '80%',
          border: '3px solid black',
          borderRadius: 20,
          marginBottom: 40
      }}>
        <legend style={{textAlign: 'center'}}>
          <h2>~ {this.props.name} ~</h2>
        </legend>

        <SongList songs={this.props.songs} />
      </fieldset>
    );
  }
});

var Collection = React.createClass({
  mixins: [
    Reflux.connect(CollectionStore, 'data')
  ],

  componentDidMount: function() {
    CollectionActions.load();
  },

  render: function() {
    var arr = [];

    _.each(this.state.data, function(songs, name) {
      arr.push(
        <Artist key={name} name={name} songs={songs} />
      );
    });

    return <div>{arr}</div>;
  }
});

module.exports = Collection;
