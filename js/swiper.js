var swiper = new Swiper(".mark-swiper", {
    slidesPerView: 4,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    allowTouchMove: false,
    breakpoints: {
      640: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 6,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 8,
        spaceBetween: 0,
      },
      1440: {
        slidesPerView: 12,
        spaceBetween: 0,
      },
    },
  });