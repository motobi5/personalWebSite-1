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
      if ($(window).scrollTop() > 4000 && $(window).scrollTop() <= 5200) {
        $(".web_prosess_1 > .section-4 .sche-box .center-box img").addClass("active");
        $(".web_prosess_1 > .section-4 .sche-box .center-box li").addClass("active");
      } else if (
        $(window).scrollTop() > 5200 && $(window).scrollTop() <= 7200
      ) {

      } else if (
        $(window).scrollTop() > 7200 && $(window).scrollTop() <= 8600
      ) {
        
      }else if (
        $(window).scrollTop() > 8600 && $(window).scrollTop() <= 10000
      ) {
        
        
      }else if (
        $(window).scrollTop() > 10000 && $(window).scrollTop() <= 12500
      ) {
       
        
      }else if (
        $(window).scrollTop() > 12500 && $(window).scrollTop() <= 14000
      ) {
        
        
      }
      // else if (
      //   $(window).scrollTop() > 13400 && $(window).scrollTop() <= 14000
      // ) {
      //   // alert("여기는 푸터");
      //   $(".prosess-1 > .footer > .inner > div").addClass("active");
      // }
      else {
        $(".web_prosess_1 > .section-4 .sche-box .center-box img").removeClass("active");
        $(".web_prosess_1 > .section-4 .sche-box .center-box li").removeClass("active");
        $(".prosess-1 > .section-4 .inner > .img-box").removeClass("active");
        $(".prosess-1 > .section-4 .right-txt").removeClass("active");
        $(".prosess-1 > .section-4 .bottom-txt").removeClass("active");
        $(".prosess-1 > .section-6 .color-box").removeClass("active");
        $(".prosess-1 > .section-6 .appsearch .title-txt").removeClass(
          "active");
        $(".prosess-1 > .section-6 .inner > .img-box").removeClass("active");
        $(".prosess-1 > .section-6 .left-txt").removeClass("active");
        $(".prosess-1 > .section-6 .right-txt").removeClass("active");
        $(".prosess-1 > .section-8 .color-box").removeClass("active");
        $(".prosess-1 > .section-8 .apporder .title-txt").removeClass("active");
        $(".prosess-1 > .section-8 .inner > .img-box").removeClass("active");
        $(".prosess-1 > .section-8 .right-txt").removeClass("active");
        $(".prosess-1 > .section-10 .color-box").removeClass("active");
        $(".prosess-1 > .section-10 .appOrderCheck .title-txt").removeClass("active");
        $(".prosess-1 > .section-10 .inner > .img-box").removeClass("active");
        $(".prosess-1 > .section-10 .left-txt").removeClass("active");
        $(".prosess-1 > .section-12 .color-box").removeClass("active");
        $(".prosess-1 > .section-12 .appPayment .title-txt").removeClass("active");
        $(".prosess-1 > .section-12 .inner > .img-box").removeClass("active");
        $(".prosess-1 > .section-12 .right-txt").removeClass("active");
        $(".prosess-1 > .section-14").removeClass("active");
        $(".prosess-1 > .section-14 .thx-txt").removeClass("active");
        // $(".prosess-1 > .footer > .inner > div").removeClass("active");
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