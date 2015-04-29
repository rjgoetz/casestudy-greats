/* jshint devel:true */

$('.main-logo').imagefill();
$('.product-image').imagefill();
$('.carousel-image').imagefill();

$(document).ready(function(){
	$('.owl-carousel').owlCarousel();
});

$('.owl-carousel').owlCarousel({
    autoplay:true,
    autoplayHoverPause:true,
    loop:true,
    items: 5,
    autoWidth: true
})
