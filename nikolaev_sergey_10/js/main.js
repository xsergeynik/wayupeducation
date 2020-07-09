//Scroll #
$(document).ready(function () {
	$('a[href^="#"]').click(function() {
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 600)
	});
});

//Magnific Popup LightBox Gallery
$(document).ready(function() {
	$('.gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Sergey Nikolaev</small>';
			}
		}
	});
});

//Burger menu = Breakpoint (992px)
$(document).ready(function(){
	$('.burger').click(function(event){
		$('.burger,.menu').toggleClass('active');$('.burger');
		$('body').toggleClass('lock');
	});
	$('.menu__item a').click(function(event) {
		$('.burger,.menu').removeClass('active');
		$('body').removeClass('lock');
			});
	});

//Back To Top Btn
(function() {
  'use strict';
  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

  var goTopBtn = document.querySelector('.back_to_top');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();

