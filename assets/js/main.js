$(document).ready(function() {

  $("div.blog-post").hover(
    function() {
      $(this).find("div.content-hide").slideToggle("fast");
    },
    function() {
      $(this).find("div.content-hide").slideToggle("fast");
    }
  );

});
