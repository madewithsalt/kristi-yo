window.App = (function(Backbone, Marionette) {

  var App;

  _.extend(Marionette.Renderer, {

    path: 'app/templates/',

    render: function(template, data) {
      var path = this.getTemplate(template);

      if(!path) {
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

    // Nav Waypoints
    $('.section').not('#intro-region').waypoint(function() {
      var position = $(this).data('position');

      $('.nav').attr('id', 'nav-' + position);
    }, {
      offset: 0
    });

    $('#intro-region').waypoint(function() {
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



  });
  
  return App;

})(Backbone, Marionette);