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

});
