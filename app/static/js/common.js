jQuery(document).ready(function($) {

  // Toggle nav menu
  $('.nav-toggle').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.nav').toggleClass('open');
  });

  $('.nav__close').click(function(e) {
    e.preventDefault();
    $('.nav').removeClass('open');
  });

  // SVG
  svg4everybody({});

  // Slider
  new Swiper ('.hero__slider ', {
    speed: 1000,
    effect: 'fade',
    autoplay: {
      delay: 3000,
    },
    fadeEffect: {
      crossFade: true
    },
  });

  var servicesSliderThumb = new Swiper ('.services-slider-thumb ', {
    slidesPerView: 2,
    navigation: {
      nextEl: '.services-slider-thumb__next',
      prevEl: '.services-slider-thumb__prev',
    }
  });

  var servicesSlider = new Swiper ('.services-slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $('.services-slider-thumb__item').click(function(e) {
    var activeIndex = servicesSliderThumb.clickedIndex;
    servicesSliderThumb.slideTo(activeIndex);
    servicesSlider.slideTo(activeIndex);
    $('.services-slider-thumb__item').removeClass('active');
    $(this).addClass('active');
  });

  servicesSlider.on('slideChange', function() {
    var currentItem = servicesSlider.activeIndex;
    $('.services-slider-thumb__item').removeClass('active');
    servicesSliderThumb.slideTo(currentItem);
    $(servicesSliderThumb.$wrapperEl).children().eq(currentItem).addClass('active');
  });

  servicesSliderThumb.on('slideChange', function() {
    var currentItem = servicesSliderThumb.activeIndex;
    $('.services-slider-thumb__item').removeClass('active');
    servicesSlider.slideTo(currentItem);
    $(servicesSliderThumb.$wrapperEl).children().eq(currentItem).addClass('active');
  });

});