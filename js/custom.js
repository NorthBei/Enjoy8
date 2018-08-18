(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });


    //Navigation Section
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });


    // Owl Carousel
    $('#header-slide.owl-carousel').owlCarousel({
      animateOut: 'fadeOut',
      items:1,
      loop:true,
      autoplay:true,
    });

    $('#examples.owl-carousel').owlCarousel({
      animateOut: 'fadeOut',
      loop:false,
      margin:15,
      dots:false,
      nav:true,
      navText:['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
          },
          576:{
              items:2,
          },
          768:{
              items:3,
          },
          992:{
              items:4,
          }
      }
    });
    


    // PARALLAX EFFECT
    // $.stellar();


    // SMOOTHSCROLL
    $(function() {
      $('.navbar-default a, #home a, footer a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 70
          }, 1000);
            event.preventDefault();
      });
    });  


    // WOW ANIMATION
    // new WOW({ mobile: false }).init();

})(jQuery);
