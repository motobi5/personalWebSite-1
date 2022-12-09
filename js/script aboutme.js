console.clear();




// 어바웃미

// 만약 페이지를 다시 활성화했을 때 애니메이션이 다시 재생되길 원할 경우 true로 변경
let chart1AllowRerender = false;

// 건들지 마세요
let chart1Rendered = false;


$("#fullpage").fullpage({
  menu: ".line",
  afterLoad: function(ignored, destination){
    // 애니메이션이 재생되길 원하는 data anchor의 위치 입력
    if ( destination.anchor == 'section-4' ) {
      if ( chart1AllowRerender ) {
        // circle 차트 클래스명 확인 및 변경을 원하는 수치 입력
        $(".skill-1 .circle").circleProgress({value: 0.9});
        $(".skill-2 .circle").circleProgress({value: 0.8});
        $(".skill-3 .circle").circleProgress({value: 0.7});
        $(".skill-4 .circle").circleProgress({value: 0.7});
      }
      else {
        if ( chart1Rendered == false ) {
          // circle 차트 클래스명 확인 및 변경을 원하는 수치 입력
          $(".skill-1 .circle").circleProgress({value: 0.9});
          $(".skill-2 .circle").circleProgress({value: 0.8});
          $(".skill-3 .circle").circleProgress({value: 0.7});
          $(".skill-4 .circle").circleProgress({value: 0.7});
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
  }
 
});

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

// 파티클
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
    
    
      // 동글 네모
      // particles: {
      //   number: {
      //     value: 30,
      //     density: {
      //       enable: true,
      //       area: 800
      //     }
      //   },
      //   links: {
      //     enable: true,
      //     color: "#0077ff"
      //   },
      //   shape: {
      //     type: ["circle", "square"]
      //   },
      //   opacity: {
      //     value: 1
      //   },
      //   size: {
      //     value: 30,
      //     random: {
      //       enable: true,
      //       minimumValue: 15
      //     }
      //   },
      //   rotate: {
      //     value: 0,
      //     direction: "random",
      //     animation: {
      //       speed: 5,
      //       enable: true
      //     }
      //   },
      //   move: {
      //     enable: true,
      //     speed: 6,
      //     direction: "none",
      //     out_mode: "out"
      //   }
      // },
    
      // 짱 큰 똥글뱅이
      // particles: {
      //   number: {
      //     value: 10
      //   },
      //   shape: {
      //     type: "circle"
      //   },
      //   opacity: {
      //     value: 0.2
      //   },
      //   size: {
      //     value: 400,
      //     random: {
      //       enable: true,
      //       minimumValue: 200
      //     }
      //   },
      //   move: {
      //     enable: true,
      //     speed: 1,
      //     direction: "top-right",
      //     // outModes: {
      //     //   default: "out",
      //     //   top: "destroy",
      //     //   bottom: "none"
      //     // }
      //   }
      // },
    
  });
  
