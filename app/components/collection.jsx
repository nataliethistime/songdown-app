'use strict';

var React = require('react');
var Reflux = require('reflux');
var _ = require('lodash');

var CollectionActions = require('./../actions/collection');

var CollectionStore = require('./../stores/collection');

var Artist = require('./artist');

var Collection = React.createClass({
  mixins: [
    Reflux.connect(CollectionStore, 'collection')
  ],

  componentDidMount: function() {
    document.title = 'Songdown Collection';
    CollectionActions.load();
  },

  render: function() {
    var arr = [];

    _.each(this.state.collection, function(songs, name) {
      arr.push(
        <Artist key={name} name={name} songs={songs} />
      );
    });

    return <div>{arr}</div>;
  }
});

module.exports = Collection;
