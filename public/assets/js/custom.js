(function ($) {
	"use strict";
  
	// Initialize Owl Carousel for different sections
	function initOwlCarousel() {
	  $('.owl-men-item').owlCarousel({
		items: 5,
		loop: true,
		dots: true,
		nav: true,
		margin: 30,
		responsive: {
		  0: { items: 1 },
		  600: { items: 2 },
		  1000: { items: 3 }
		}
	  });
  
	  $('.owl-women-item').owlCarousel({
		items: 5,
		loop: true,
		dots: true,
		nav: true,
		margin: 30,
		responsive: {
		  0: { items: 1 },
		  600: { items: 2 },
		  1000: { items: 3 }
		}
	  });
  
	  $('.owl-kid-item').owlCarousel({
		items: 5,
		loop: true,
		dots: true,
		nav: true,
		margin: 30,
		responsive: {
		  0: { items: 1 },
		  600: { items: 2 },
		  1000: { items: 3 }
		}
	  });
	}
  
	// Sticky Header on Scroll
	$(window).on('scroll', function () {
	  const scroll = $(window).scrollTop();
	  const box = $('#top').height() || 0; // Safeguard against undefined height
	  const header = $('header').height() || 0; // Safeguard against undefined height
  
	  if (scroll >= box - header) {
		$("header").addClass("background-header");
	  } else {
		$("header").removeClass("background-header");
	  }
	});
  
	// Mobile Navigation Fix
	function mobileNav() {
	  const width = $(window).width();
	  $('.submenu').off('click').on('click', function () {
		if (width < 767) {
		  $('.submenu ul').removeClass('active');
		  $(this).find('ul').toggleClass('active');
		}
	  });
	}
  
	// Menu Trigger for Mobile
	if ($('.menu-trigger').length) {
	  $(".menu-trigger").on('click', function () {
		$(this).toggleClass('active');
		$('.header-area .nav').slideToggle(200);
	  });
	}
  
	// Smooth Scroll for Menu Links
	$('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function (e) {
	  e.preventDefault();
	  const target = $(this.hash);
	  if (target.length) {
		const width = $(window).width();
		if (width < 991) {
		  $('.menu-trigger').removeClass('active');
		  $('.header-area .nav').slideUp(200);
		}
		$('html,body').animate({
		  scrollTop: (target.offset().top) - 80 // Adjust for fixed header
		}, 700);
	  }
	});
  
	// Scroll Spy for Active Menu Links
	$(document).on("scroll", function () {
	  const scrollPos = $(document).scrollTop();
	  $('.nav a').each(function () {
		const currLink = $(this);
		const refElement = $(currLink.attr("#"));
  
		if (refElement.length) { // Check if target element exists
		  const refTop = refElement.position().top || 0;
		  const refHeight = refElement.height() || 0;
  
		  if (refTop <= scrollPos && refTop + refHeight > scrollPos) {
			$('.nav ul li a').removeClass("active");
			currLink.addClass("active");
		  } else {
			currLink.removeClass("active");
		  }
		}
	  });
	});
  
	// Page Loading Animation
	$(window).on('load', function () {
	  if ($('.cover').length) {
		$('.cover').parallax({
		  imageSrc: $('.cover').data('image'),
		  zIndex: '1'
		});
	  }
  
	  $("#preloader").animate({ 'opacity': '0' }, 600, function () {
		setTimeout(function () {
		  $("#preloader").css("visibility", "hidden").fadeOut();
		}, 300);
	  });
	});
  
	// Responsive Event Handlers
	$(window).on('resize', function () {
	  mobileNav();
	});
  
	// Initialize Plugins and Handlers
	$(document).ready(function () {
	  mobileNav();
	  initOwlCarousel();
	});
  
  })(window.jQuery);
  