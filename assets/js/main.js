$(document).ready(function() {

  $("div.project-post").hover(
    function() {
      $(this).find("div.content-hide").slideToggle("fast");
    },
    function() {
      $(this).find("div.content-hide").slideToggle("fast");
    }
  );

});
