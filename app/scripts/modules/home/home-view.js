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
      this.showIntro();
      this.showAbout();
      this.showSkills();
      this.showWork();
      this.showContact();
    },

    showIntro: function() {
      this.activeComponents.intro = new Home.Intro.View();
      this.introRegion.show(this.activeComponents.intro);
    },

    showAbout: function() {
      this.activeComponents.about = new Home.About.View();
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
      this.activeComponents.work = new Home.Work.View();
      this.workRegion.show(this.activeComponents.work);
    },

    showContact: function() {
      this.activeComponents.contact = new Home.Contact.View();
      this.contactRegion.show(this.activeComponents.contact);
    }
  });

});