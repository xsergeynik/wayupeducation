// - All
//Burger menu = Breakpoint (992px)
$(document).ready(function () {
	$('.burger').click(function (event) {
		$('.burger,.menu').toggleClass('active'); $('.burger');
		$('body').toggleClass('lock');
	});
	$('.menu__item a').click(function (event) {
		$('.burger,.menu').removeClass('active');
		$('body').removeClass('lock');
	});

	// - About
	// Magnific Popup Gallery
	$('.capacities__gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function (item) {
				return item.el.attr('title') + '<small>by Sergix58 - t.me/serhii812 </small>';
			}
		}
	});

	// - Services
	// Slicer - Slick
	$('.slider').slick({
		dots: true,
		infinite: false,
		easing: 'ease',
		prevArrow: ('<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>'),
		nextArrow: ('<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>'),
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false
				}
			}
		]
	});

	// - All
	// - Magific Popup - Form

	$('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		callbacks: {
			beforeOpen: function () {
				if ($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
	$('.popup-modal').magnificPopup({
		removalDelay: 350,
		mainClass: 'mfp-fade'
	});



	// - All
	//Scroll #
	$('.go-scroll').click(function (e) {
		e.preventDefault();
		elementClick = $(this).attr('href');
		destination = $(elementClick).offset().top;
		$('body,html').animate({ scrollTop: destination }, 600);
	});

	// - All
	//Preloader
	var $preloader = $('#page-preloader'),
		$spinner = $preloader.find('.cssload-loader');
	$spinner.fadeOut();
	$preloader.delay(350).fadeOut('slow');

});