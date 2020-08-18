$(function(){
	/*new WOW({
        animateClass: 'animate__animated'
    }).init();*/
    /*$('.header-arrows').on('click', function() {
        $('html,body').animate({scrollTop:$('.surf').offset().top+"px"},{duration:1E3});
    });*/
    $('.fairy-tail-slider,.our-trip-slider').slick({
        prevArrow: '<button type="button" class="slick-prev slick-btn"><img src="images/arrow-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next slick-btn"><img src="images/arrow-next.svg" alt=""></button>',
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true
    });
});