App.module('Home.Work', function(Work, App, Backbone, Marionette, $, _) {
  Work.View = App.Views.ItemView.extend({
    template: 'home/work',
    className: 'work-block',

    onShow: function() {
      var self = this;

      this.$('.current-project, .past-projects').css('opacity', 0);

      this.$el.parent().waypoint(function() {
        self.transitionIn();
      }, {
        offset: 80,
        triggerOnce: true
      });
    },

    transitionIn: function() {
      this.$('.current-project').animate({
        'opacity': 1
      });

      var $pastProjects = this.$('.past-projects');

      setTimeout(function() {
        $pastProjects.animate({
          'opacity': 1
        });
      }, 400);
    }
  });

});