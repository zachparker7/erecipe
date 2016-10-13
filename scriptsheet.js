jQuery(document).ready(function () {
  $('.login').on('click',
    function () {
      $('.login-dropdown').addClass("active")
    });
  });

  $('#login-button').on('click',
    function () {
      $('.login-dropdown').removeClass("active")
   });

  $('.exit').on('click',
    function () {
      $('.login-dropdown').removeClass("active")
    });
