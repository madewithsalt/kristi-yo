App.module('Views', function(Views, App, Backbone, Marionette, $, _) {


  Views.Spinner = App.Views.ItemView.extend({
    template: 'common/spinner',
    className: 'spinner'
  });

});