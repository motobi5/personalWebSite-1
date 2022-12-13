console.clear();




// 어바웃미

// 만약 페이지를 다시 활성화했을 때 애니메이션이 다시 재생되길 원할 경우 true로 변경
let chart1AllowRerender = false;

// 건들지 마세요
let chart1Rendered = false;


$("#fullpage").fullpage({
  menu: ".line",
  
  controlArrows: true, // 슬라이드 컨트롤 애로우 생성
  slidesNavigation: true, // 슬라이드 컨트롤 네비게이션 생성
  slidesNavPosition: "bottom", // 슬라이드 컨트롤 네비게이션 위치 top / bottom
  
  
  afterLoad: function(ignored, destination){
    // 애니메이션이 재생되길 원하는 data anchor의 위치 입력
    if ( destination.anchor == 'section-4' ) {
      if ( chart1AllowRerender ) {
        // circle 차트 클래스명 확인 및 변경을 원하는 수치 입력
        $(".skill-1 .circle").circleProgress({value: 0.9});
        $(".skill-2 .circle").circleProgress({value: 0.8});
        $(".skill-3 .circle").circleProgress({value: 0.75});
        $(".skill-4 .circle").circleProgress({value: 0.75});
      }
      else {
        if ( chart1Rendered == false ) {
          // circle 차트 클래스명 확인 및 변경을 원하는 수치 입력
          $(".skill-1 .circle").circleProgress({value: 0.9});
          $(".skill-2 .circle").circleProgress({value: 0.8});
          $(".skill-3 .circle").circleProgress({value: 0.75});
          $(".skill-4 .circle").circleProgress({value: 0.75});
          chart1Rendered = true;
        }
      }
    }
    else {
      if ( chart1AllowRerender ) {
        // circle 차트 클래스명 확인
        $(".skill-1 .circle").circleProgress({value: 0});
        $(".skill-2 .circle").circleProgress({value: 0});
        $(".skill-3 .circle").circleProgress({value: 0});
        $(".skill-4 .circle").circleProgress({value: 0});
      }
    }

  },
 //onleave
 //온리브 어바웃미-1을 다른 형태의 이벤트로 분리시켜야 하나?? 흠... 
    onLeave: function (origin, destination, direction, trigger) {
      if (destination.index == 0) {
        $(".aboutme-1 .title-txt").addClass("active");
        $(".aboutme-1 .cen-text").addClass("active");
        $(".aboutme-2 .txt-box").removeClass("active");
        $(".aboutme-3 .txt-box").removeClass("active");
        $(".aboutme-4 .txt-box").removeClass("active");
        $(".aboutme-5 .txt-box").removeClass("active");
        $(".aboutme-6 .txt-box").removeClass("active");
        $(".aboutme-6 .top").removeClass("show");
      }  else if (destination.index == 1) {
        $(".aboutme-1 .title-txt").removeClass("active");
        $(".aboutme-1 .cen-text").removeClass("active");
        $(".aboutme-2 .txt-box").addClass("active");
        $(".aboutme-3 .txt-box").removeClass("active");
        $(".aboutme-4 .txt-box").removeClass("active");
        $(".aboutme-5 .txt-box").removeClass("active");
        $(".aboutme-6 .txt-box").removeClass("active");
        $(".aboutme-6 .top").removeClass("show");
      } else if (destination.index == 2) {
        $(".aboutme-1 .title-txt").removeClass("active");
        $(".aboutme-1 .cen-text").removeClass("active");
        $(".aboutme-2 .txt-box").removeClass("active");
        $(".aboutme-3 .txt-box").addClass("active");
        $(".aboutme-4 .txt-box").removeClass("active");
        $(".aboutme-5 .txt-box").removeClass("active");
        $(".aboutme-6 .txt-box").removeClass("active");
        $(".aboutme-6 .top").removeClass("show");
      }else if (destination.index == 3) {
        $(".aboutme-1 .title-txt").removeClass("active");
        $(".aboutme-1 .cen-text").removeClass("active");
        $(".aboutme-2 .txt-box").removeClass("active");
        $(".aboutme-3 .txt-box").removeClass("active");
        $(".aboutme-4 .txt-box").addClass("active");
        $(".aboutme-5 .txt-box").removeClass("active");
        $(".aboutme-6 .txt-box").removeClass("active");
        $(".aboutme-6 .top").removeClass("show");
      }else if (destination.index == 4) {
        $(".aboutme-1 .title-txt").removeClass("active");
        $(".aboutme-1 .cen-text").removeClass("active");
        $(".aboutme-2 .txt-box").removeClass("active");
        $(".aboutme-3 .txt-box").removeClass("active");
        $(".aboutme-4 .txt-box").removeClass("active");
        $(".aboutme-5 .txt-box").addClass("active");
        $(".aboutme-6 .txt-box").removeClass("active");
        $(".aboutme-6 .top").removeClass("show");
      }else if (destination.index == 5) {
        $(".aboutme-1 .title-txt").removeClass("active");
        $(".aboutme-1 .cen-text").removeClass("active");
        $(".aboutme-2 .txt-box").removeClass("active");
        $(".aboutme-3 .txt-box").removeClass("active");
        $(".aboutme-4 .txt-box").removeClass("active");
        $(".aboutme-5 .txt-box").removeClass("active");
        $(".aboutme-6 .txt-box").addClass("active");
        $(".aboutme-6 .top").addClass("show");
      } else {
        $(".aboutme-1 .title-txt").removeClass("active");
        $(".aboutme-1 .cen-text").removeClass("active");
        $(".aboutme-2 .txt-box").removeClass("active");
        $(".aboutme-3 .txt-box").removeClass("active");
        $(".aboutme-4 .txt-box").removeClass("active");
        $(".aboutme-5 .txt-box").removeClass("active");
        $(".aboutme-6 .txt-box").removeClass("active");
        $(".aboutme-6 .top").removeClass("show");
      }
    }
  
});

// 스페셜 도넛차트
// circle 커스텀 value를 0으로 설정해야 합니다!
$(".circle")
  .circleProgress({
    // 그래프 시작 위치
    // Math.PI = 3.14
    startAngle: -Math.PI / 2,
    // 방향 반전 여부
    // reverse: true,
    // 그래프 수치
    value: 0,
    // 그래프 사이즈
    size: 140,
    // 그래프 모서리, 지울 시 각진 모양
    // lineCap: "round",
    // 그래프 두께
    thickness: 20,
    // 그래프 색상
    fill: {
      gradient: ["#525252", "#5C89A1 "]
    }
  })

  // 그래프 수치 출력
  .on("circle-animation-progress", function (event, progress, stepValue) {
    $(this)
      .find(".percent")
      .text(parseInt(stepValue * 100) + "%");
  });

// 워크스킬 파티클
  tsParticles.load("tsparticles", {
    // 전체 화면 여부
    fullScreen: {
      enable: false,
      // zIndex: -1
    },
    
    // 배경 관련 옵션
    background: {
      // 색상
      // color: "#000",
      
      // 이미지
      image: "url('https://i.postimg.cc/02pjrZGQ/unsplash-Eiwfp-X6mh1w.png')",
      size: "cover",
      // repeat:"no-repeat",
      position: "center center"
      
    },
    
    // 배경 마스크 여부
    // backgroundMask: {
    //   enable: true,
    //   cover: {
    //     value: {
    //       r: 255,
    //       g: 255,
    //       b: 255
    //     }
    //   }
    // },
    
    // 인터렉션 관련 옵션
    interactivity: {
      events: {
        // 클릭 시
        onClick: {
          enable: true,
          mode: "push"
        },
        // 호버 시
        onHover: {
          enable: true,
          mode: "repulse"
        },
        // 효과 세부 설정
        // modes: {
        //   push: {
        //     quantity: 6
        //   },
        //   repulse: {
        //     distance: 100
        //   }
        // }
      }
    },
  
    // particles = 입자 관련 옵션
    // 아래 particle 옵션 중 원하는 한 가지만! 적용
    
    // 기본 애니메이션
    particles: {
      // 개수
      number: {
        value: 40,
        // 밀도
        density: {
          enable: true,
          value_area: 1000
        }
      },
      
      // 움직임 여부
      move: {
        enable: true,
        speed: { min: 1, max: 3 }
      },
      
      // 투명도
      opacity: {
        value: { min: 0.2, max: 1 }
      },
      
      // 사이즈
      size: {
        value: { min: 1, max: 4 }
      },
      
      // 연결 여부
      links: {
        enable: true,
        opacity: 0.3,
        // 연결 시 도형 생성 여부 및 옵션
        triangles: {
          enable: true,
          color: "#ffffff",
          opacity: 0.1
        }
      }
    },
      
  });
  

  $(document).ready(function () {
  
  
    //메뉴이동
    $(".aboutme-6 .top").click(function () {
      let IndexNum = $(this).index() + 1;
      // console.log(IndexNum);
      fullpage_api.moveTo(IndexNum);
    },12000);
  });