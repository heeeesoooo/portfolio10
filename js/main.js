$(function () {
    $(window).on('scroll', function () {

        if ($(window).scrollTop() > 0) {
            $('#header').addClass('drop');
        } else {
            $('#header').removeClass('drop');
        }
    })

    $('.main_slide').slick({
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
    })

})