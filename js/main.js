$(function () {
    $(window).on('scroll', function () {

        if ($(window).scrollTop() > 0) {
            $('#header').addClass('on');
        } else {
            $('#header').removeClass('on');
        }
    })

    $('.main_slide').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
    })
    $('.menu_list_wrap').slick({
        slidesToShow: 5,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
    })
    $('.goobster_box').slick({
        slidesToShow: 6,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
    })

    $('.goobne_line').slick({
        autoplay: true,
        autoplaySpeed: 0,
        variableWidth: true,
        cssEase: 'linear',
        speed: 10000,
        centerMode: true,
        //useCSS: false,
        easing: 'linear',
        arrows: false,
    })

})
