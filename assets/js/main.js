$(document).ready(function() {

  $("div.project-post").hover(
    function() {
      $(this).find("div.content-hide").slideToggle("fast");
    },
    function() {
      $(this).find("div.content-hide").slideToggle("fast");
    }
  );

  // So Anchor will not be covered by navbar if clicked
  var shiftWindow = function() { scrollBy(0, -50) };
  window.addEventListener("hashchange", shiftWindow);
  function load() { if (window.location.hash) shiftWindow(); }

  // Carousel style for Projects
  // http://bootsnipp.com/snippets/featured/tabbed-slider-carousel
  $('#myCarousel').carousel({
    interval: 5000
  });

  var clickEvent = false;
  $('#myCarousel').on('click', '.nav a', function() {
      clickEvent = true;
      $('.nav li').removeClass('active');
      $(this).parent().addClass('active');
  }).on('slid.bs.carousel', function(e) {
    if(!clickEvent) {
      var count = $('.nav').children().length -1;
      var current = $('.nav li.active');
      current.removeClass('active').next().addClass('active');
      var id = parseInt(current.data('slide-to'));
      if(count == id) {
        $('.nav li').first().addClass('active');
      }
    }
    clickEvent = false;
  });


});
