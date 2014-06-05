window.App = (function(Backbone, Marionette) {

    var App;

    _.extend(Marionette.Renderer, {

        path: 'templates/',

        render: function(template, data) {
            var path = this.getTemplate(template);

            if (!path) {
                $.error('Template ' + template + ' not found!');
                return;
            }

            return path(data);
        },

        getTemplate: function(template) {
            return JST[this.path + template + '.hbs'];
        }
    });

    App = new Marionette.Application();

    App.reqres = new Backbone.Wreqr.RequestResponse();

    App.on('initialize:after', function() {

        App.addRegions({
            mainRegion: '#main-region'
        });

        App.reqres.setHandler('app:region:default', function() {
            return App.mainRegion;
        });

    });

    return App;

})(Backbone, Marionette);