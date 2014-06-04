App.module('Home.About', function(About, App, Backbone, Marionette, $, _) {

   About.View = App.Views.ItemView.extend({
    template: 'home/about',
    className: 'about-block',

    onRender: function() {
      var self = this;
      this.$el.css('opacity', 0);

      this.$el.parent().waypoint(function() {
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
        }, (500 * subLen) + 800);

      });
    }
  });

});