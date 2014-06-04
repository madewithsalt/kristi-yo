App.module('Home.Contact', function(Contact, App, Backbone, Marionette, $, _) {


  Contact.View = App.Views.ItemView.extend({
      template: 'home/contact',
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