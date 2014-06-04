/*global App, Backbone, Marionette, $, _ */
(function(App, Backbone, Marionette, $, _) {  
  /** CONTROLLERS **
  * Controllers are a great way to pre-fetch dependencies
  * before rendering a view. It's also a great place to set up
  * events and request handlers specific for that section.
  * Because this is a single-page tiny site, we're clumping
  * our controllers together.
  *
  * Controllers are awesome because they allow us more fine-grained control
  * with how we deliver views + data to our users. Here we can handle what we
  * might do if there is no data, for example, we might serve an entirely different view.
  */
  App.Controller = Marionette.Controller.extend({
    region: App.reqres('app:defaultregion'),
    showLoader: function() {
      this.region.show(new App.Views.LoadingView());
    }
  });

})(App, Backbone, Marionette, $, _);