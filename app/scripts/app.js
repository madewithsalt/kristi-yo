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

;App.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {

  Entities.Skill = Backbone.Model.extend({
    defaults: {
      "name": "",
      "categories": [],
      "rating": 0
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

});;App.module("Views", function(Views, App, Backbone, Marionette, $, _) {

  /** VIEWS **
  * Each section of the site is it's own view.
  * In a larger-scale app, this would be broken down into
  * individual files, one for each view/controller,
  * and a module would be defined as it's component, such as "About".
  * The module "About", would then contain it's respective View & Controller,
  * properly encapsulating all of it's unique requirements from the rest of the app.
  * Yay modularity! :)
  */

  $.fn.waypoint = function() {};

  Views.IntroView = Marionette.ItemView.extend({
    template: 'intro',
    className: 'intro-block',

    onRender: function() {
      this.$el.attr({
        'data-0': 'top: 30%;',
        'data-500': 'top: 40%;'
      });

      App.refreshSkrollr();
    }
  });

  Views.AboutView = Marionette.ItemView.extend({
    template: 'about',
    className: 'about-block',

    onRender: function() {
      var self = this;
      this.$el.css('opacity', 0);

      $('#about-region').waypoint(function() {
        self.transitionIn();
      }, {
        offset: 70,
        triggerOnce: true
      });

      this.$('.descrip').attr({
        'data-anchor-target': '.about-block',
        'data-0-top': 'opacity: 1;',
        'data--300-top': 'opacity: 0;'
      });
  
      App.refreshSkrollr();

    },

    transitionIn: function() {
      this.$el.animate({
        'opacity': 1
      }, function() {
        var subLen = $('[class^="subline-"]').length;

        setTimeout(function() {

          $('[class^="subline-"]').each(function(idx) {
            var $el = $(this);

            setTimeout(function() {
              $el.addClass('expanded');
            }, 500 * idx);

          });

        }, 300);

        setTimeout(function() {
          $('.headline-2').css({'opacity': 1 });
        }, (500 * subLen) + 800)

      });
    }
  });

  Views.Skill = Marionette.ItemView.extend({
    template: 'skill-item',
    className: 'skill',

    serializeData: function() {
      var attrs = this.model.toJSON();

      return _.extend(attrs, {
        percent: attrs.rating * 10
      });
    },

    onRender: function() {
      var $el = this.$el,
          cats = this.model.get('categories');

      _.each(cats, function(item, idx) {
        $el.addClass(item);
      });
    }
  });

  Views.SkillsView = Marionette.CompositeView.extend({
    template: 'skills',
    className: 'skills-block',
    itemView: Views.Skill,
    itemViewContainer: '.skills-list',

    onShow: function() {
      var self = this;

      this.$('.skills-list-block').waypoint(function() {
        self.showPercents();
      }, {
        offset: 150,
        triggerOnce: true
      });
    },

    showPercents: function(view) {
      var $skills = this.$('.skill');

      $skills.each(function() {
        var $bar = $(this).find('.progress-bar');
        $bar.css('width', $bar.data('percent') + '%');
      });
    }
  });

  Views.WorkView = Marionette.ItemView.extend({
    template: 'work',
    className: 'work-block',

    onShow: function() {
      var self = this;

      this.$('.current-project, .past-projects').css('opacity', 0);

      $('.work-block').waypoint(function() {
        self.transitionIn();
      }, {
        offset: 80,
        triggerOnce: true
      });
    },

    transitionIn: function() {
      $('.current-project').animate({
        'opacity': 1
      });

      setTimeout(function() {
        $('.past-projects').animate({
          'opacity': 1
        });
      }, 400);
    }
  });

  Views.ContactView = Marionette.ItemView.extend({
    template: 'contact',
    className: 'contact-block',

    events: {
      'mouseenter .link-icons a': 'showLabel',
      'mouseleave .link-icons a': 'hideLabels'
    },

    showLabel: function(evt) {
      var label = $(evt.currentTarget).data('label');
      this.$('.l-label').removeClass('active');
      this.$('.l-label.' + label).addClass('active');
    },

    hideLabels: function() {
      this.$('.l-label').removeClass('active');
    }

  });

});






;App.module("Controllers", function(Controllers, App, Backbone, Marionette, $, _) {
  
  /** CONTROLLERS **
  * Controllers are a great way to pre-fetch dependencies
  * before rendering a view. It's also a great place to set up
  * events and request handlers specific for that section.
  * Because this is a single-page tiny site, we're clumping
  * our controllers together.
  *
  * In a large-scale app, modules would be defined by their component (ie, "About")
  * and all respective Views and Controllers would be included there.
  *
  * Controllers are awesome because they allow us more fine-grained control
  * with how we deliver views + data to our users. Here we can handle what we
  * might do if there is no data, for example, we might serve an entirely different view.
  */

  Controllers.SkillsController = Marionette.Controller.extend({

    initialize: function(options) {
      var self = this;

      if(!options.region) {
        $.error("Region is required.");
      }

      this.region = options.region;

      if(options.entity) {
        this.entity = options.entity;
      }

      this.entity.fetch({
        success: function() {
          self.showBaseView();
        }
      })
    },

    getBaseView: function() {
      this.baseView = new App.Views.SkillsView({
        collection: this.entity
      });

      return this.baseView;
    },

    showBaseView: function() {
      this.region.show(this.getBaseView());
    }

  });

});