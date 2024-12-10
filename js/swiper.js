let swiperProduct = document.querySelector(".content-wrapper");
let swf = new Swiper(swiperProduct, {
  loop: true,
  slidesPerView: 3,
  speed: 1000,
  loopAdditionalSlides: 1,
  slidesPerGroup: 1,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // autoplay: {
  //     delay: 3000,
  //     disableOnInteraction: false,
  //   },
  // breakpoints: {
  //     100: {
  //         slidesPerView: 1,
  //         spaceBetween: 15,
  //     },
  //     460: {
  //         slidesPerView: 2,
  //         spaceBetween: 15,
  //     },
  //     960: {
  //         slidesPerView: 3,
  //     }
  // }
});
