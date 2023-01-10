console.clear();
AOS.init();

// 홈 (리턴)
// window.onload = function () {
//   $(".top-bar .inner .logo-box > .logo").addClass("active");
//   }


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

// 클론코딩
function SliderBox3__init() {
  const swiper = new Swiper(".slider-box-3 .swiper", {
    // Optional parameters
    loop: true,
    

    
    // 활성화된 슬라이드 가운데 정렬 여부
    centeredSlides: true,

    spaceBetween:20,
    slidesPerView: 1.4, // 한 화면에 보일 슬라이드 개수, 소수 가능, effect 설정 시 적용 안 됨(coverflow는 가능)
    // If we need pagination
    pagination: {
      el: ".slider-box-3 .swiper-pagination"
    },
  
    // effect: 'fade', // 지울 시 일반 슬라이드, `fade`, `flip`, `coverflow`, `cube`, `cards`, `creative`
    autoplay: {
      delay: 7000, // 7초마다 슬라이드 넘김
      disableOnInteraction : false, // 자동 재생 중 건드려도 비활성화되지 않음
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

    // 선생님 인덱스 함수 (슬라이드 자동 루프로 할 경우 콘텐츠 박스가 불어와 지질 않는다.)
    // $(".slider-box-3 .content-box").eq(swiper.activeIndex).addClass("active");
    
    // 좀 다른 형태의 인덱스(?) 함수 (겉보기에는 잘 불러와 진다)
    $('.slider-box-3 .content-box').eq(this.realIndex).addClass('active');
  });

  
}

SliderBox1__init();
SliderBox2__init();
SliderBox3__init();

