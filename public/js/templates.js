(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};

  Handlebars.partials = Handlebars.templates;
templates['songList'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "  <fieldset class=\"artist-container\">\n    <legend class=\"center-text\"><h2>~ "
    + this.escapeExpression(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + " ~</h2></legend>\n    <ul class=\"songs\">\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n  </fieldset>\n";
},"2":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "      <li><a class=\"song-link\" href=\"/song/"
    + alias3(((helper = (helper = helpers.fname || (depth0 != null ? depth0.fname : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fname","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">"
    + alias3(((helper = (helper = helpers.track || (depth0 != null ? depth0.track : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"track","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<h1>"
    + this.escapeExpression(((helper = (helper = helpers.artist || (depth0 != null ? depth0.artist : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"artist","hash":{},"data":data}) : helper)))
    + "</h1>\n\n\n<!--\n\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.songs : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n-->\n";
},"useData":true});
})();