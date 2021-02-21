$(document).ready(function () {
   $('.burger').click(function (event) {
      $('.burger, .link').toggleClass('active');
      $('body').toggleClass('lock');
   });
});