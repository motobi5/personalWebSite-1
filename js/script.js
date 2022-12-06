console.clear();

// 홈 로딩페이지
setTimeout(function() {
  $('.loading-page').addClass('hide');
}, 15000);

// 홈 인트로 글자 타이핑
$(document).ready(function () {
  var typingBool = false;
  var typingIdx = 0;
  var liIndex = 0;
  var liLength = $(".typing-txt>ul>li").length;

  // 타이핑될 텍스트를 가져온다
  var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
  typingTxt = typingTxt.split(""); // 한글자씩 자른다.
  if (typingBool == false) {
    // 타이핑이 진행되지 않았다면
    typingBool = true;
    var tyInt = setInterval(typing, 100); // 반복동작
  }

  function typing() {
    $(".typing ul li").removeClass("on");
    $(".typing ul li").eq(liIndex).addClass("on");
    if (typingIdx < typingTxt.length) {
      // 타이핑될 텍스트 길이만큼 반복
      $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다.
      typingIdx++;
    } else {
      if (liIndex < liLength - 1) {
        //다음문장으로  가기위해 인덱스를 1증가
        liIndex++;
        //다음문장을 타이핑하기위한 셋팅
        typingIdx = 0;
        typingBool = false;
        typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();

        //다음문장 타이핑전 1초 쉰다
        clearInterval(tyInt);
        //타이핑종료

        setTimeout(function () {
          //1초후에 다시 타이핑 반복 시작
          tyInt = setInterval(typing, 100);
        }, 1000);
      } else if (liIndex == liLength - 1) {
        //마지막 문장까지 써지면 반복종료
        clearInterval(tyInt);
      }
    }
  }
});

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

