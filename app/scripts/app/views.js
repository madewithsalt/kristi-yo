App.module("Views", function(Views, App, Backbone, Marionette, $, _) {

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






