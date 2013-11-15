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

  Views.IntroView = Marionette.ItemView.extend({
    template: 'intro',
    className: 'intro-block',

    onRender: function() {
      this.$el.attr({
        'data-0': 'top: 30%;',
        'data-500': 'top: 40%;'
      });
    }
  });

  Views.AboutView = Marionette.ItemView.extend({
    template: 'about',
    className: 'about-block',

    onRender: function() {
      var self = this;
      this.$el.css('opacity', 0);

      $('.intro-block').waypoint(function() {
        self.transitionIn();
      }, {
        offset: 10
      });

      this.$('.descrip').attr({
        'data-500': 'opacity: 1;',
        'data-1000': 'opacity: 0;'
      });

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
    className: 'skill'
  });

  Views.SkillsView = Marionette.CompositeView.extend({
    template: 'skills',
    className: 'skills-block',
    itemView: Views.Skill,
    itemViewContainer: '.skills-list',

    onRender: function() {}
  });

});