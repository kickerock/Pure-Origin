// main.js file
// Author: Andrew Narolskii
// Email: kickerwrk@gmail.com
// 2018

$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    nav: true,
    navText: ["<img src='img/prevarrow.png'>", "<img src='img/nextarrow.png'>"],
    mouseDrag: false,
    merge: false
  });
  $('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.selector == '#razmer') return;
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  // Thumbs Changer
  $('.thumbs>div').click(function() {
    var th = this;
    if (!$(this).hasClass('activ')) {
      $(this).closest('.thumbs').find('div').removeClass('activ');
      var thisSrc = $(th).find('img').attr('src');
      $(th).closest('.buy__leftone').find('.main__img').fadeOut(500);
      $(th).addClass('activ');
      setTimeout(function() {
        $(th).closest('.buy__leftone').find('.main__img').fadeIn(500).attr('src', thisSrc);

      }, 500);
    }
  });

});
