$('.owl-carousel').owlCarousel({
    loop:false,
    margin:20,
    responsiveClass:true,
    dots: true,
    nav: false,
    responsive:{
        0:{
            items:1,
            loop: true
        },
        600:{
            items:2
        },
        1000:{
            items:3,
            loop:false,
            dots: false
        }
    }
})