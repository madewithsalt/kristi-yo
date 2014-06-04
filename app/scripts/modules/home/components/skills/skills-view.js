App.module('Home.Skills', function(Skills, App, Backbone, Marionette, $, _) {

  Skills.ItemView = App.Views.ItemView.extend({
    template: 'home/skill-item',
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

      _.each(cats, function(item) {
        $el.addClass(item);
      });
    }
  });

  Skills.View = App.Views.CompositeView.extend({
    template: 'home/skills',
    className: 'skills-block',
    itemView: Skills.ItemView,
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

    showPercents: function() {
      var $skills = this.$('.skill');

      $skills.each(function() {
        var $bar = $(this).find('.progress-bar');
        $bar.css('width', $bar.data('percent') + '%');
      });
    }
  });

});