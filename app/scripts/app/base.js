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


  App.on('initialize:after', function() {

    App.addRegions({
      introRegion: '#intro-region',
      aboutRegion: '#about-region',
      skillsRegion: '#skills-region',
      workRegion: '#work-region',
      contactRegion: '#contact-region'
    });
    
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


    // Nav Waypoints
    $('.section').not('#intro-region').waypoint(function() {
      var position = $(this).data('position');

      $('.nav').attr('id', 'nav-' + position);
    }, {
      offset: 0
    });

    $('#intro-region').waypoint(function() {
      var position = $(this).data('position');

      $('.nav').attr('id', 'nav-' + position);
    }, {
      offset: -540
    });


    // ScrollTop on menu click
    $('.nav a').on('click', function(evt) {
      var $target = $($(this).attr('href')),
          coords = $target.offset().top;

      evt.preventDefault();

      $('html, body').animate({
        'scrollTop': coords
      });

    });




  });
  
  return App;

})(Backbone, Marionette);

