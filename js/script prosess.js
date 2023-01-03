console.clear();

AOS.init();

// 프로세스페이지
// 페이지 인트로
$("body").imagesLoaded(function () {
  setTimeout(function () {
    $(".prosess-1 > .loading-1").addClass("hide");
    $(".web_prosess_1 > .loading-1").addClass("hide");
  }, 3000);
});

// 비주얼페이지 애니메이션
window.onload = function () {
  $(".prosess-1 > .section-1 > .inner > .txt-box").addClass("active");
  $(".prosess-1 > .section-1 > .inner .date-txt").addClass("active");
  $(".prosess-1 > .section-1 > .inner .bottom-box > .img-box").addClass("active");
  $(".web_prosess_1 > .section-1 > .inner > .txt-box").addClass("active");
  $(".web_prosess_1 > .section-1 > .inner .date-txt").addClass("active");
  $(".web_prosess_1 > .section-1 > .inner .center-box").addClass("active");
};

// 섹션4,6,8,10,12,14 애니메이션
function Scroll01__init() {
  $(function () {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 2600 && $(window).scrollTop() <= 5200) {
        $(".prosess-1 > .section-4 .color-box").addClass("active");
        $(".prosess-1 > .section-4 .apphome .title-txt").addClass("active");
        $(".prosess-1 > .section-4 .inner > .img-box").addClass("active");
        $(".prosess-1 > .section-4 .right-txt").addClass("active");
        $(".prosess-1 > .section-4 .bottom-txt").addClass("active");
      } else if (
        $(window).scrollTop() > 5200 && $(window).scrollTop() <= 7200
      ) {
        $(".prosess-1 > .section-6 .color-box").addClass("active");
        $(".prosess-1 > .section-6 .appsearch .title-txt").addClass("active");
        $(".prosess-1 > .section-6 .inner > .img-box").addClass("active");
        $(".prosess-1 > .section-6 .right-txt").addClass("active");
        $(".prosess-1 > .section-6 .left-txt").addClass("active");
      } else if (
        $(window).scrollTop() > 7200 && $(window).scrollTop() <= 8600
      ) {
        $(".prosess-1 > .section-8 .color-box").addClass("active");
        $(".prosess-1 > .section-8 .apporder .title-txt").addClass("active");
        $(".prosess-1 > .section-8 .inner > .img-box").addClass("active");
        $(".prosess-1 > .section-8 .right-txt").addClass("active");
      }else if (
        $(window).scrollTop() > 8600 && $(window).scrollTop() <= 10000
      ) {
        $(".prosess-1 > .section-10 .color-box").addClass("active");
        $(".prosess-1 > .section-10 .appOrderCheck .title-txt").addClass("active");
        $(".prosess-1 > .section-10 .inner > .img-box").addClass("active");
        $(".prosess-1 > .section-10 .left-txt").addClass("active");
      }else if (
        $(window).scrollTop() > 10000 && $(window).scrollTop() <= 12500
      ) {
        $(".prosess-1 > .section-12 .color-box").addClass("active");
        $(".prosess-1 > .section-12 .appPayment .title-txt").addClass("active");
        $(".prosess-1 > .section-12 .inner > .img-box").addClass("active");
        $(".prosess-1 > .section-12 .right-txt").addClass("active");
      }else if (
        $(window).scrollTop() > 12500 && $(window).scrollTop() <= 14000
      ) {
        $(".prosess-1 > .section-14").addClass("active");
        $(".prosess-1 > .section-14 .thx-txt").addClass("active");
      }
      // else if (
      //   $(window).scrollTop() > 13400 && $(window).scrollTop() <= 14000
      // ) {
      //   // alert("여기는 푸터");
      //   $(".prosess-1 > .footer > .inner > div").addClass("active");
      // }
      else {
        $(".prosess-1 > .section-4 .color-box").removeClass("active");
        $(".prosess-1 > .section-4 .apphome .title-txt").removeClass("active");
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
Scroll01__init();
