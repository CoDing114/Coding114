//according to loftblog tut 标签
$('.navbar li:first').addClass('scroll_active');

var showSection = function showSection(section, isAnimate) {
  var
  direction = section.replace(/#/, ''), // /#/ 을 '공백' 으로 변경 해준다
  reqSection = $('.section').filter('[data-section="' + direction + '"]'),  // 필터 활용 
  reqSectionPos = reqSection.offset().top - 0;  // 좌표를 구한다

  if (isAnimate) {
    $('body, html').animate({ // 애니메이션 호과를 넣는다
      scrollTop: reqSectionPos }, // 원하는 위치로 부드럽게 이동시킨다
    600); // 스크롤 타이밍 설정
  } else {
    $('body, html').scrollTop(reqSectionPos); // 원하는 위치로 바로 이동시킨다
  }

};

var checkSection = function checkSection() {
  $('.section').each(function () {  // .each 배열 관리
    var
    $this = $(this),
    topEdge = $this.offset().top - 80,
    bottomEdge = topEdge + $this.height(),
    wScroll = $(window).scrollTop();
    if (topEdge < wScroll && bottomEdge > wScroll) {
      var
      currentId = $this.data('section'),
      reqLink = $('a').filter('[href*=\\#' + currentId + ']');
      reqLink.closest('li').addClass('scroll_active').
      siblings().removeClass('scroll_active');
    }
  });
};

$('.main-menu, .scroll-to-section').on('click', 'a', function (e) {
  if($(e.target).hasClass('external')) {
    return;
  }
  e.preventDefault();
  $('#menu').removeClass('scroll_active');
  showSection($(this).attr('href'), true);
});

$(window).scroll(function () {
  checkSection();
});