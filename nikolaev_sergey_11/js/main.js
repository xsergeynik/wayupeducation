
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

$(document).ready(function () {
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
});