var counter = 0;
$(document).ready(function() {
  $(function() {
    $("div:not(.grid-container)").draggable({
      revert: "invalid"
    }); /*You can drag images out of frame and when dropped, they go back at their respectable places.*/
  });

  $("img").on("click", function(event) {
    counter++;

    if (counter == 1) {
      $(this).removeClass("hov");
    }
    if (counter == 2) {
      $(this).addClass("hov");
      counter = 0;
    }
  });

  $("img").on("mouseenter", function(event) {
    $(this).addClass("hov");
  });

  $("img").on("mouseleave", function(event) {
    $(this).removeClass("hov");

    counter = 0;
  });
});
