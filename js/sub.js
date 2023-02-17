
const ROLL_SLIDE = new Swiper(".rollSwiper", {
    direction: "vertical",
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

const MAIN_SLIDE = new Swiper(".bannerSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});