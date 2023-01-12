console.clear();


function QuickMenuScroll__init() {
  $(function () {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 600) {
        $(".web_prosess_1  > .footer .top").addClass("show");
      } else {
        $(".web_prosess_1  > .footer .top").removeClass("show");
      }
    });
    $(".web_prosess_1  > .footer .top").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 800);
      return false;
    });
    // 스크롤 맨 아래라고 감지했을 때 버튼 위치 이동
    $(window).scroll(function () {
      console.log('로그');
      console.log($(window).scrollTop());
        console.log($(window).height());
        console.log($(document).height());
      if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        $(".web_prosess_1  > .footer .top.__footer-bottom").css("bottom", "248px");
      } else {
        $(".web_prosess_1  > .footer .top.__footer-bottom").css("bottom", "60px");
      }
    });
  });
}
QuickMenuScroll__init();
