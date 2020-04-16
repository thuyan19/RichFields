/*Coming soon alert*/
function Comingsoon() {
    alert("Coming soon...")
}
/*First slider */
$(".slider-one")
    .slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        prevArrow: ".site-slider .slider-btn .prev",
        nextArrow: ".site-slider .slider-btn .next"
    })

/*Second slider */
$(".slider-two")
    .slick({
        prevArrow: ".site-slider-two .prev",
        nextArrow: ".site-slider-two .next",
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 3
            }
        }]
    })

/*Third slider*/
$(".slider-three")
    .slick({
        prevArrow: ".site-slider-three .prev",
        nextArrow: ".site-slider-three .next",
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 3
            }
        }]
    })