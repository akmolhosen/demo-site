(function ($) {
"use strict";



$('.price-active').click(function(){
	var value = $(this).attr('data-filter');
	if (value == 'all'){
		$('.price-box').show('1000')
	} else {
		$('.price-box').not('.' + value).hide('1000')
		$('.price-box').filter('.' + value).show('1000')
	}
})






// smoorth scrolling
var scrollLink = $('.scroll');
  
// Smooth scrolling
scrollLink.click(function(e) {
  e.preventDefault();
  $('body,html').animate({
	scrollTop: $(this.hash).offset().top
  });
});


// preloader
setTimeout(function(){
    $('.preloader').fadeToggle();
  });



$('.client-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
	dots: false,
	prevArrow: '<span class="priv_arrow"><i class="fas fa-long-arrow-alt-left"></i></span>',
	nextArrow: '<span class="next_arrow"><i class="fas fa-long-arrow-alt-right"></i></span>',
	
  });

// question box
$('.plus-1').click(function() {
	$('.question-content-1').addClass('question-content-show');
})
$('.plus-2').click(function() {
	$('.question-content-2').addClass('question-content-show');
})
$('.plus-3').click(function() {
	$('.question-content-3').addClass('question-content-show');
})
$('.plus-4').click(function() {
	$('.question-content-4').addClass('question-content-show');
})
$('.plus-5').click(function() {
	$('.question-content-5').addClass('question-content-show');
})

$('.plus-1').click(function() {
	$('.plus-1').addClass('fa-plus-hide');
})
$('.plus-2').click(function() {
	$('.plus-2').addClass('fa-plus-hide');
})
$('.plus-3').click(function() {
	$('.plus-3').addClass('fa-plus-hide');
})
$('.plus-4').click(function() {
	$('.plus-4').addClass('fa-plus-hide');
})
$('.plus-5').click(function() {
	$('.plus-5').addClass('fa-plus-hide');
})

// toggle
$(".plus1").click(function(){
	$(".line-1,.text1").toggle(300);
  });
  


/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


// isotop
$('.grid').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.grid-item',
	  }
	});
});

// filter items on button click
$('.fillter-menu').on( 'click', 'p', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});




// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// WOW active
new WOW().init();


})(jQuery);