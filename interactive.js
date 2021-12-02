$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 200) {
      $('nav').addClass('scrolled')
    } else {
      $('nav').removeClass('scrolled')
    }
  })
})
