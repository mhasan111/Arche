$(function () {
  'use strict';

  $('.banner_big_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.small_slider',
  });

  $('.small_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.banner_big_slider',
    dots: false,
    centerMode: true,
    centerPadding: 0,
    focusOnSelect: true,
    arrows: false,
  });

  // Counter js start
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  // Service slider js start

  $('.service_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
      }
    }, ]
  });

  // Service slider mobile js
  $('.service_slider_mobile').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    infinite: true,
    dots: true,
    speed: 1000,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
  });
})

// project veno box
$('.venobox').venobox();

// testimonial slider js start

$('.test_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: true,
  responsive: [
    {
        breakpoint: 992,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 576,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    },
]
});


// menu fix js start
var navOff = $('.main_menu').offset().top;
$(window).scroll(function () {
var scrolling = $(this).scrollTop();

if (scrolling > navOff) {
  $('.main_menu').addClass('menu_fix');
} else {
  $('.main_menu').removeClass('menu_fix');
}


});