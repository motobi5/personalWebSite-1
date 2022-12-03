console.clear();

// 어바웃미
$("#fullpage").fullpage({
  menu: ".line"
});

// 웹리뉴얼
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

// 앱리디자인
function SliderBox2__init() {

  const swiper = new Swiper(".slider-box-2 .swiper", {
    // Optional parameters
    loop: false,

    // If we need pagination
    pagination: {
      el: ".slider-box-2 .swiper-pagination"
    },

    // Navigation arrows
    navigation: {
      nextEl: ".slider-box-2 .swiper-button-next",
      prevEl: ".slider-box-2 .swiper-button-prev"
    }
  });
  
  swiper.on("slideChange", function () {
    
    // console.log(swiper.activeIndex);
    $(".slider-box-2 .content-box").removeClass("active");
    $(".slider-box-2 .content-box").eq(swiper.activeIndex).addClass("active");
    
  });
  
  
  
}
SliderBox2__init();

// 클론코딩
function SliderBox3__init() {
  const swiper = new Swiper(".slider-box-3 .swiper", {
    // Optional parameters
    // loop: true,
    
    // 한 화면에 보일 슬라이드 개수
    slidesPerView: 3,
    
    // 활성화된 슬라이드 가운데 정렬 여부
    centeredSlides: true,
    spaceBetween:-200,

    // If we need pagination
    pagination: {
      el: ".slider-box-3 .swiper-pagination"
    },

    // Navigation arrows
    navigation: {
      nextEl: ".slider-box-3 .swiper-button-next",
      prevEl: ".slider-box-3 .swiper-button-prev"
    }
  });

  swiper.on("slideChange", function () {
    
    console.log(swiper.activeIndex);
    $(".slider-box-3 .content-box").removeClass("active");
    $(".slider-box-3 .content-box").eq(swiper.activeIndex).addClass("active");
    
  });
}

SliderBox3__init();



// 선생님 소스
// function SliderBox3__init() {
//   const swiper = new Swiper(".slider-box-3 .swiper", {
//     // Optional parameters
//     // loop: true,
    
//     // 한 화면에 보일 슬라이드 개수
//     slidesPerView: 3,
    
//     // 활성화된 슬라이드 가운데 정렬 여부
//     centeredSlides: true,
//     spaceBetween:-200,

//     // If we need pagination
//     pagination: {
//       el: ".slider-box-3 .swiper-pagination"
//     },

//     // Navigation arrows
//     navigation: {
//       nextEl: ".slider-box-3 .swiper-button-next",
//       prevEl: ".slider-box-3 .swiper-button-prev"
//     }
//   });

//   swiper.on("slideChange", function () {
    
//     console.log(swiper.activeIndex);
//     $(".slider-box-3 .content-box").removeClass("active");
//     $(".slider-box-3 .content-box").eq(swiper.activeIndex).addClass("active");
    
//   });
// }

// SliderBox3__init();
