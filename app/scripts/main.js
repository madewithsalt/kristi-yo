
$(function() {

  App.start();


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