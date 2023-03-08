const swiper = new Swiper('.swiper', {
    // Optional parameters
    effect: 'cards',
  cardsEffect: {
    perSlideOffset: 25,
  },
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
  });