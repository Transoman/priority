jQuery(document).ready(function($) {

  // Fixed Header
  var fixedHeader = function() {
    if($(this).scrollTop() > 10) {
      $('.header').addClass('fixed');
    }
    else {
      $('.header').removeClass('fixed');
    }
  }

  fixedHeader();

  $(window).scroll(function() {
    fixedHeader();
  });

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
    },
    breakpoints: {
      767: {
        slidesPerView: 1
      }
    }
  });

  var servicesSlider = new Swiper ('.services-slider', {
    spaceBetween: 50,
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

  new Swiper ('.blog-hero__slider', {
    spaceBetween: 50,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
  });

  // Parallax
  function simpleParallax(intensity, element) {
    $(window).scroll(function() {
      var scrollTop = $(window).scrollTop();
      var imgPos = scrollTop / intensity + 'px';
      element.css('transform', 'translateY(' + imgPos + ')');
    });
  }

  simpleParallax(-5, $('.parallax-1'));

  // Select2
  $('.s-offices__select').select2({
    placeholder: 'PW offices'
  });

  // Widget Slide
  var mediaFooterToggle = window.matchMedia('(max-width: 576px)');

  var mediaChecker = function() {
    if (mediaFooterToggle.matches) {
      footerToggle();
    }
    else {
      $('.widget-title').off('click').removeClass('active').next().removeAttr('style');
    }
  }

  var footerToggle = function() {
    $('.widget-title').click(function() {
      $(this).toggleClass('active').next().slideToggle();
    });
  }

  mediaFooterToggle.addListener(mediaChecker);
  mediaChecker();
});