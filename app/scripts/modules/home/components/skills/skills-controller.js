App.module('Home.Skills', function(Skills, App, Backbone, Marionette, $, _) {

    Skills.Controller = App.Controller.extend({

        initialize: function(options) {
            var self = this;

            if (!options.region) {
                throw "Region is required.";
            }

            this.region = options.region;

            if (options.entity) {
                this.entity = options.entity;
            }

            this.entity.fetch({
                success: function() {
                    self.showBaseView();
                }
            });
        },

        getBaseView: function() {
            this.baseView = new Skills.View({
                collection: this.entity
            });

            return this.baseView;
        },

        showBaseView: function() {
            this.region.show(this.getBaseView());
        }

    });

});