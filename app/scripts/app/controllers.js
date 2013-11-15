App.module("Controllers", function(Controllers, App, Backbone, Marionette, $, _) {
  
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