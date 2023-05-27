var swiper = new Swiper(".mark-swiper", {
    slidesPerView: 4,
    spaceBetween: 5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 4,
        spaceBetween: 5,
      },
      768: {
        slidesPerView: 6,
        spaceBetween: 5,
      },
      1024: {
        slidesPerView: 8,
        spaceBetween: 5,
      },
      1440: {
        slidesPerView: 12,
        spaceBetween: 5,
      },
    },
  });