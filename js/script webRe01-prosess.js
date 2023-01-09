console.clear();

AOS.init();

// 프로세스페이지
// 페이지 인트로
$("body").imagesLoaded(function () {
  setTimeout(function () {
    $(".web_prosess_1 > .loading-1").addClass("hide");
  }, 3000);
});

// 비주얼페이지 애니메이션
window.onload = function () {
  $(".web_prosess_1 > .section-1 > .inner > .txt-box").addClass("active");
  $(".web_prosess_1 > .section-1 > .inner .date-txt").addClass("active");
  $(".web_prosess_1 > .section-1 > .inner .center-box").addClass("active");
};
function Scroll02__init() {
  $(function () {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 4000 && $(window).scrollTop() <= 5000) {
        $(".web_prosess_1 > .section-4 .sche-box .center-box img").addClass("active");
        $(".web_prosess_1 > .section-4 .sche-box .center-box li").addClass("active");
      } else if (
        $(window).scrollTop() > 8300 && $(window).scrollTop() <= 9000
      ) {
        $(".web_prosess_1 > .section-7 .white-box").addClass("active");
      } else if (
        $(window).scrollTop() > 17900 && $(window).scrollTop() <= 20000
      ) {
        $(".web_prosess_1 > .section-19").addClass("active");
        $(".web_prosess_1 > .section-19 .thx-txt").addClass("active");
      } 
      // else if (
      //   $(window).scrollTop() > 20000 
      // ) {
      //   // alert("여기는 푸터");
      //   $(".web_prosess_1 > .footer > .inner > div").addClass("active");
      // }
      else {
        $(".web_prosess_1 > .section-4 .sche-box .center-box img").removeClass("active");
        $(".web_prosess_1 > .section-4 .sche-box .center-box li").removeClass("active");
        $(".web_prosess_1 > .section-7 .white-box").removeClass("active");
        $(".web_prosess_1 > .section-19").removeClass("active");
        $(".web_prosess_1 > .section-19 .thx-txt").removeClass("active");
        // $(".web_prosess_1 > .footer > .inner > div").removeClass("active");
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
Scroll02__init();