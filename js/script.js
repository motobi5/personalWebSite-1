console.clear();

$("#fullpage").fullpage({
  menu: ".line"
});


function SliderBox1__init() {

  const swiper = new Swiper(".slider-box-1 .swiper", {
    // Optional parameters
    loop: false,

    // If we need pagination
    pagination: {
      el: ".slider-box-1 .swiper-pagination"
    },

    // Navigation arrows
    navigation: {
      nextEl: ".slider-box-1 .swiper-button-next",
      prevEl: ".slider-box-1 .swiper-button-prev"
    }
  });
  
  swiper.on("slideChange", function () {
    
    console.log(swiper.activeIndex);
    $(".content-box").removeClass("active");
    $(".content-box").eq(swiper.activeIndex).addClass("active");
    
  });
  
  
  
}

SliderBox1__init();

