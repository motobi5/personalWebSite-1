console.clear();

AOS.init();

// 프로세스페이지
// 페이지 인트로
$("body").imagesLoaded(function () {
  setTimeout(function() {
    $('.prosess-1 > .loading-1').addClass('hide');
  }, 3000);
});

// 비주얼페이지 애니메이션
window.onload = function () {
  $('.prosess-1 > .section-1 > .inner > .txt-box').addClass('active');
  $('.prosess-1 > .section-1 > .inner .date-txt').addClass('active');
  $('.prosess-1 > .section-1 > .inner .bottom-box > .img-box').addClass('active');
  }

  // 섹션4 애니메이션
function Scroll01__init() {
  $(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 2600) {
            $(".prosess-1 > .section-4 .color-box").addClass("active");
            $(".prosess-1 > .section-4 .apphome .title-txt").addClass("active");
            $(".prosess-1 > .section-4 .inner > .img-box").addClass("active");
            $(".prosess-1 > .section-4 .right-txt").addClass("active");
            $(".prosess-1 > .section-4 .bottom-txt").addClass("active");
            
        }else {
           $(".prosess-1 > .section-4 .color-box").removeClass("active");
           $(".prosess-1 > .section-4 .apphome .title-txt").removeClass("active");
           $(".prosess-1 > .section-4 .inner > .img-box").removeClass("active");
           $(".prosess-1 > .section-4 .right-txt").removeClass("active");
           $(".prosess-1 > .section-4 .bottom-txt").removeClass("active");
        }
    });
    // $(".top").click(function(){
    //   $("html, body").animate({scrollTop:0}, 800);
    //   return false;
    // });
    // // 스크롤 맨 아래라고 감지했을 때 버튼 위치 이동
    // $(window).scroll(function() {
    //  if($(window).scrollTop() + $(window).height() == $(document).height()) {
    //    $(".top.__footer-bottom").css("bottom", "210px");
    //   }
    //   else {
    //     $(".top.__footer-bottom").css("bottom", "60px");
    //   }
    // });
    });
    }

Scroll01__init();