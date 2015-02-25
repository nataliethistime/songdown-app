'use strict';

var GeoPattern = require('geopattern');
var randomString = require('randomstring').generate;

function generateBackground() {
  var pattern = GeoPattern.generate(randomString(Math.random() * Math.random() * 100));
  $('body').css('background-image', pattern.toDataUrl());
}

var interval = null;
function resetInterval() {
  clearInterval(interval);
  interval = setInterval(generateBackground, 60 * 1000);
}

function initBackground() {
  // TODO: make this shit MVC friendly.
  // Do the background thang.
  generateBackground();
  resetInterval();
  $(document).scroll(resetInterval);
}

var Song = Backbone.Model.extend({
  mutators: {
    fullName: function() {
      return this.get('artist') + ' - ' + this.get('track');
    }
  }
});

var Songs = Backbone.Collection.extend({
  model: Song,
  fetch: function() {
    Songdown.apiRequest('getTopSongs', undefined, function(data) {
      _.each(data, this.add, this);
    }, this);
  }
})

var SongView = Backbone.View.extend({
  template: Handlebars.templates.songListItem,
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

var SongList = Backbone.View.extend({
  events: {},
  template: Handlebars.templates.songList,
  initialize: function() {
    this.collection = new Songs();
    this.listenTo(this.collection, 'add', this.addOne);
  },
  render: function() {
    this.$el.html(this.template());
    this.collection.fetch();
    this.$list = this.$('#song-list');
    return this;
  },
  addOne: function(song) {
    var view = new SongView({model: song});
    this.$list.append(view.render().el);
  }
});

$(document).ready(function() {
  initBackground();
  var songView = new SongList();
  $('#content').html(songView.render().el);
});
