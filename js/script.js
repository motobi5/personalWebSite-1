console.clear();


// 홈 (리턴)
window.onload = function () {
  $('.home_top div').addClass('active');
  }


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

SliderBox3__init();


// 눈 내리는 효과
// (function () {

//   var COUNT = 300;
//   var masthead = document.querySelector('.sky');
//   var canvas = document.createElement('canvas');
//   var ctx = canvas.getContext('2d');
//   var width = masthead.clientWidth;
//   var height = masthead.clientHeight;
//   var i = 0;
//   var active = false;

//   function onResize() {
//     width = masthead.clientWidth;
//     height = masthead.clientHeight;
//     canvas.width = width;
//     canvas.height = height;
//     ctx.fillStyle = '#FFF';

//     var wasActive = active;
//     active = width > 600;

//     if (!wasActive && active)
//       requestAnimFrame(update);
//   }

//   var Snowflake = function () {
//     this.x = 0;
//     this.y = 0;
//     this.vy = 0;
//     this.vx = 0;
//     this.r = 0;

//     this.reset();
//   }

//   Snowflake.prototype.reset = function() {
//     this.x = Math.random() * width;
//     this.y = Math.random() * -height;
//     this.vy = 1 + Math.random() * 3;
//     this.vx = 0.5 - Math.random();
//     this.r = 1 + Math.random() * 2;
//     this.o = 0.5 + Math.random() * 0.5;
//   }

//   canvas.style.position = 'absolute';
//   canvas.style.left = canvas.style.top = '0';

//   var snowflakes = [], snowflake;
//   for (i = 0; i < COUNT; i++) {
//     snowflake = new Snowflake();
//     snowflake.reset();
//     snowflakes.push(snowflake);
//   }
  
//   function update() {

//     ctx.clearRect(0, 0, width, height);

//     if (!active)
//       return;

//     for (i = 0; i < COUNT; i++) {
//       snowflake = snowflakes[i];
//       snowflake.y += snowflake.vy;
//       snowflake.x += snowflake.vx;

//       ctx.globalAlpha = snowflake.o;
//       ctx.beginPath();
//       ctx.arc(snowflake.x, snowflake.y, snowflake.r, 0, Math.PI * 2, false);
//       ctx.closePath();
//       ctx.fill();

//       if (snowflake.y > height) {
//         snowflake.reset();
//       }
//     }

//     requestAnimFrame(update);
//   }

//   // shim layer with setTimeout fallback
//   window.requestAnimFrame = (function(){
//     return  window.requestAnimationFrame       ||
//             window.webkitRequestAnimationFrame ||
//             window.mozRequestAnimationFrame    ||
//             function( callback ){
//               window.setTimeout(callback, 1000 / 60);
//             };
//   })();

//   onResize();
//   window.addEventListener('resize', onResize, false);

//   masthead.appendChild(canvas);
// })();



