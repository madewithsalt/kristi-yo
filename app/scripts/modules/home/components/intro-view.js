App.module('Home.Intro', function(Intro, App, Backbone, Marionette, $, _) {


  Intro.View = App.Views.ItemView.extend({
    template: 'home/intro',
    className: 'intro-block',

    onRender: function() {
      this.$el.attr({
        'data-0': 'top: 30%;',
        'data-500': 'top: 40%;'
      });

      App.refreshSkrollr();
    }
  });

});