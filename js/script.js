$( document ).ready(function() {
  $('.burger').click(function () {
    $(this).toggleClass('open');
  });
});

$(function() {
  console.log( "Short ready!" );
});

