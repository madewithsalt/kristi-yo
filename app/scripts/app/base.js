this.App = (function(Backbone, Marionette) {
  var App, Router, API;


  _.extend(Marionette.Renderer, {

    path: 'app/templates/',

    render: function(template, data) {
      var path = this.getTemplate(template);

      if(!path) {
        $.error("Template " + template + " not found!");
        return;
      }

      return path(data);
    },
    
    getTemplate: function(template) {
      return JST[this.path + template + '.hbs'];
    }
  });

  App = new Marionette.Application

  App.reqres = new Backbone.Wreqr.RequestResponse();

  App.addRegions({
    introRegion: '#intro-region',
    aboutRegion: '#about-region',
    skillsRegion: '#skills-region',
    workRegion: '#work-region',
    contactRegion: '#contact-region'
  });

  App.on('initialize:after', function() {
    /*
    * Skrollr is a bit borkified on mobile, so disabling it for now.
    */
    // Skrollr
    // App.skrollr = skrollr.init();

    App.refreshSkrollr = function() {
      if(App.skrollr) {
        App.skrollr.refresh();
      }
    };

    App.introRegion.show(new App.Views.IntroView());
    App.aboutRegion.show(new App.Views.AboutView());

    // Because we're handling data in the skills region,
    // we use a controller instead of calling the view directly.
    new App.Controllers.SkillsController({
      entity: App.request('entities:skills'),
      region: this.skillsRegion
    });

    App.workRegion.show(new App.Views.WorkView());
    App.contactRegion.show(new App.Views.ContactView());
  });
  
  return App;

})(Backbone, Marionette);

