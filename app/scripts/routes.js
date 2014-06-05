(function(App, Marionette) {

    var API = {
        home: function() {
            var region = App.request('app:region:default');

            region.show(new App.Home.View());
        }

    };

    App.Router = Marionette.AppRouter.extend({
        appRoutes: {
            '(/)': 'home'
        }
    });

    App.on('initialize:after', function() {
        Backbone.history.start({
            pushState: true
        });
    });

    App.addInitializer(function() {
        new App.Router({
            controller: API
        });

        // pass data between routes without storing in the URL
        App.commands.setHandler('signin:base:show', function(options) {
            API.form(options);
        });
    });


})(App, Marionette);