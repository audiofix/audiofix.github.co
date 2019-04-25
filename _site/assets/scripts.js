jQuery( document ).ready(function($){
  // Smoooooth scrolling
  $('.smooth-scroll').on("click", function(){
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 60
    }, 500);
    return false;
  });

  $(window).scroll(function () {
    if ($(document).scrollTop() > 300) {
      $(".site-header").addClass("scrolled");
      $("#header_logo").attr('src', '/assets/img/logotype.svg');
    } else {
      $(".site-header").removeClass("scrolled");
      $("#header_logo").attr('src', '/assets/img/logotype_white.svg');
    }
  });

  var $hamburger = $('.hamburger');
  $hamburger.on("click", function(){
    $hamburger.toggleClass("is-active");
    $('.navbar').toggleClass("menu-open");
  });

});
