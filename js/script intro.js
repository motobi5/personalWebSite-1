console.clear();


// 홈 로딩페이지

// 페이지 열릴때 반응하라
// 인트로 바텀 애니메이션?
window.onload = function () {
  $('.intro_bottom div').addClass('active');
  $('.main-page_top div').addClass('active');
  }
  
  setTimeout(function() {
    $('.loading-page').addClass('hide');
  }, 14000);
  
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

// 파티클 -> 풀페이지와 스와이퍼와 같이 있으면 뒤에 있는(?) JS함수들은 반응을 하지 않는다.
tsParticles.load("tsparticles", {
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
    }
  },
    // 짱 큰 똥글뱅이
    particles: {
      number: {
        value: 10
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.2
      },
      size: {
        value: 20,
        random: {
          enable: true,
          minimumValue: 4
        }
      },
      move: {
        enable: true,
        speed: 1,
        direction: "bottom"
      }
    },
  
});