// This JavaScript code is used to make the website interactive.

// When the user clicks on a link in the navigation bar,
// the corresponding section is displayed.
$(document).ready(function() {
  $('nav a').click(function() {
    var section = $(this).attr('href');
    $('main > section').hide();
    $(section).show();
  });
});
