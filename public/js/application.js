'use strict';

////////////////////////////////////////////////////////////////////////////////////////
// TODO: all this stuff is in no particular order and needs to be organised properly. //
////////////////////////////////////////////////////////////////////////////////////////

var SongModel = Backbone.Model.extend({
  mutators: {
    fullName: function() {
      return this.get('artist') + ' - ' + this.get('track');
    }
  }
});

var SongCollection = Backbone.Collection.extend({
  model: SongModel,
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

var SearchView = Backbone.View.extend({
  events: {},
  template: Handlebars.templates.search,
  initialize: function() {
    this.$el.html(this.template());

    this.$input = this.$('#searchInput');
    this.$results = this.$('#results');

    this.$input.onTypeEnd(_.bind(this.search, this));

    this.collection = new SongCollection();
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
    _.each(songs.models, this.addOne, this);
  },
  addOne: function(song) {
    var view = new SearchItemView({model: song});
    this.$results.append(view.render().el);
  }
});

var SearchItemView = Backbone.View.extend({
  template: Handlebars.templates.searchItem,
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

var SongView = Backbone.View.extend({
  template: Handlebars.templates.song,
  events: {},
  initialize: function() {
    // Do  stuff
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

var EditView = Backbone.View.extend({
  template: Handlebars.templates.edit,
  events: {},
  initialize: function() {
    // Do  stuff
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

var ApplicationRouter = Backbone.Router.extend({
  routes: {
    '' : 'search',
    'song': 'song',
    'edit': 'edit',
    'song/:artist/:track': 'song',
    'edit/:artist/:track': 'edit'
  },

  search: function() {
    var search = new SearchView();
    $('#main').html(search.render().el);
  },

  song: function(artist, track) {
    var song = new SongView();
    $('#main').html(song.render().el);
  },

  edit: function(artist, track) {
    var edit = new EditView();
    $('#main').html(edit.render().el);
  }
});

$(document).ready(function() {
  var router = new ApplicationRouter();
  Backbone.history.start();
});
