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
