App.module('Home', function(Home, App, Backbone, Marionette, $, _) {

  Home.View = App.Views.Layout.extend({

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
      this.showIntro();
      this.showAbout();
      this.showSkills();
      this.showWork();
      this.showContact();
    },

    showIntro: function() {
      this.activeComponents.intro = new App.Views.IntroView();
      this.introRegion.show(this.activeComponents.intro);
    },

    showAbout: function() {
      this.activeComponents.about = new App.Views.AboutView();
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
      this.activeComponents.work = new App.Views.WorkView();
      this.workRegion.show(this.activeComponents.work);
    },

    showContact: function() {
      this.activeComponents.contact = new App.Views.ContactView();
      this.contactRegion.show(this.activeComponents.contact);
    }
  });

});