// mdサイズ（タブレット）以上で、メディカルガイド目次の位置をアイキャッチの高さに合わせる
$(window).on('load resize', function(){
    var winWidth = window.innerWidth;
  console.log(winWidth);
    if (winWidth >= 768) {
      var eyecatcHeight = $('.medical_eyecatch').outerHeight(true);
      $('.medical_toc > .list-group').css('margin-top',- eyecatcHeight);
    } else {
      $('.medical_toc > .list-group').css('margin-top','0');
    }
});

// スムーススクロール
  $(function(){
    $('a[href^="#"]').click(function(){
      var speed = 200;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var headerHeight = $('.navbar_main').outerHeight(); 
      var position = target.offset().top - headerHeight - 16;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });
