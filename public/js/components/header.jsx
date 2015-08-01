'use strict';

var React = require('react');
var Reflux = require('reflux');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var _ = require('lodash');

var SongStore = require('js/stores/song');

var HeaderLink = React.createClass({

  propTypes: {
    to: React.PropTypes.string.isRequired,
    params: React.PropTypes.object
  },

  getDefaultProps: function() {
    return {
      to: '',
      params: {}
    };
  },

  getInitialState: function() {
    return {
      hover: false
    };
  },

  handleOn: function() {
    this.setState({
      hover: true
    });
  },

  handleOff: function() {
    this.setState({
      hover: false
    });
  },

  render: function() {

    var style = {
      fontSize: '1.5em',
      padding: 10,
      WebkitTransition: 'background-color 200ms ease',
      MozTransition: 'background-color 200ms ease',
      OTransition: 'background-color 200ms ease',
      transition: 'background-color 200ms ease',
      backgroundColor: this.state.hover ? 'rgb(190, 119, 10)' : 'rgb(228, 144, 17)',
      textDecoration: 'none',
      color: 'rgb(256, 256, 256)'
    };

    return (
      <Link
        to={this.props.to}
        params={this.props.params}
        style={style}
        onMouseEnter={this.handleOn}
        onMouseLeave={this.handleOff}
      >
        {this.props.children}
      </Link>
    );
  }
})

var Header = React.createClass({
  mixins: [
    Reflux.connect(SongStore, 'song')
  ],

  render: function() {

    // This requires some special logic because there are some fancy things going on here.
    var editParams = _.pick(this.state.song, ['artist', 'name']);
    var editButton;

    if (editParams && editParams.artist && editParams.name) {
      editButton = <HeaderLink to="editSong" params={editParams}>Edit</HeaderLink>;
    } else {
      editButton = <HeaderLink to="editor">Edit</HeaderLink>;
    }

    return (
      <div style={{
        width: '100%',
        top: 0,
        left: 0,
        color: '#ffffff',
        backgroundColor: 'rgb(29, 26, 171)',
        textAlign: 'center'
      }}>
        <HeaderLink to="index">Home</HeaderLink>
        <span>
          {editButton}
        </span>
      </div>
    );
  }
});

module.exports = Header;
