App.module('Home', function(Home, App, Backbone, Marionette, $, _) {

    Home.View = App.Views.Layout.extend({
        template: 'home',
        className: 'home sections',

        regions: {
            introRegion: '#intro-region',
            aboutRegion: '#about-region',
            skillsRegion: '#skills-region',
            workRegion: '#work-region',
            contactRegion: '#contact-region'
        },

        // a registry of active child views & controllers
        activeComponents: {},

        initialize: function() {
            this.addComponents();
        },

        onShow: function() {
            this.showIntro();
            this.showAbout();
            this.showSkills();
            this.showWork();
            this.showContact();


            // Nav Waypoints
            $('.section').not('#intro-region').waypoint(function() {
                var position = $(this).data('position');

                $('.nav').attr('id', 'nav-' + position);
            }, {
                offset: 0
            });

            this.$('#intro-region').waypoint(function() {
                var position = $(this).data('position');

                $('.nav').attr('id', 'nav-' + position);
            }, {
                offset: -540
            });


            // ScrollTop on menu click
            $('.nav a').on('click', function(evt) {
                var $target = $($(this).attr('href')),
                    coords = $target.offset().top;

                evt.preventDefault();

                $('html, body').animate({
                    'scrollTop': coords
                });

            });

        },

        addComponents: function() {

            this.activeComponents.intro = new Home.Intro.View();
            this.activeComponents.about = new Home.About.View();
            this.activeComponents.work = new Home.Work.View();
            this.activeComponents.contact = new Home.Contact.View();

        },

        showIntro: function() {
            this.introRegion.show(this.activeComponents.intro);
        },

        showAbout: function() {
            this.aboutRegion.show(this.activeComponents.about);
        },

        showSkills: function() {
            // Because we're handling data in the skills region,
            // we use a controller instead of calling the view directly.
            this.activeComponents.skills = new Home.Skills.Controller({
                entity: App.request('entities:skills'),
                region: this.skillsRegion
            });
        },

        showWork: function() {
            this.workRegion.show(this.activeComponents.work);
        },

        showContact: function() {
            this.contactRegion.show(this.activeComponents.contact);
        }
    });

});