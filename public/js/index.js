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
  getTopSongs: function() {
    Songdown.apiRequest('getTopSongs', undefined, this.reset, this);
  },
  search: function(search) {
    if (search) {
      Songdown.apiRequest('search', {search: search}, this.reset, this);
    } else {
      this.getTopSongs();
    }
  }
});

var Search = Backbone.View.extend({
  events: {},
  template: Handlebars.templates.search,
  initialize: function() {
    this.$el.html(this.template());

    this.$input = this.$('#searchInput');
    this.$results = this.$('#results');

    this.$input.onTypeEnd(_.bind(this.search, this));

    this.collection = new Songs();
    this.listenTo(this.collection, 'reset', this.reset);

    // Load up the "top songs" on the site.
    this.collection.getTopSongs();
  },
  render: function() {
    return this;
  },
  search: function() {
    this.collection.search(this.$input.val());
  },
  reset: function(songs) {
    this.$results.html('');
    console.log(songs)
    _.each(songs.models, this.addOne, this);
  },
  addOne: function(song) {
    var view = new SearchItem({model: song});
    this.$results.append(view.render().el);
  }
});

var SearchItem = Backbone.View.extend({
  template: Handlebars.templates.searchItem,
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

$(document).ready(function() {
  initBackground();

  var search = new Search();
  $('#content').html(search.render().el);
});
