App.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {

  Entities.Skill = Backbone.Model.extend({
    defaults: {
      "name": "skill name",
      "rating": 5
    }
  });

  Entities.Skills = Backbone.Collection.extend({
    model: Entities.Skill,
    url: '/data/skills.json'
  });

  var API = {
    getSkills: function() {
      return new Entities.Skills();
    }
  };


  App.addInitializer(function() {

    App.reqres.setHandler('entities:skills', function() {
      return API.getSkills();
    });

  });

});