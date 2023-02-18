$(document).ready(function () {
  // hero slider
  $('#hero-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    smartSpeed: 1000,
    dots: false,
    navText: ['PREV', 'NEXT'],
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        nav: false,
      },
      768: {
        nav: true,
      },
    },
  });

  // project slider
  $('#projects-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    smartSpeed: 1000,
    dots: true,
    margin: 24,
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      768: {
        items: 2,
      },
      1140: {
        items: 2,
        center: true,
      },
    },
  });

  // project slider
  $('#reviews-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    items: 1,
    smartSpeed: 800,
  });
});
