//ハンバーガーメニューの開閉


$('.navbar-toggler').click(function(){//.navbar-toggleをクリックすると
    $('.overlay').addClass('active');//.overlayにクラスactiveを付ける
});

$('.sp_menu_close').click(function(){//.sp_menu_closeをクリックすると
    $('.overlay').removeClass('active');//.overlayのクラスactiveを外しーの
    $('.navbar-collapse').removeClass('open');//.navbar-collapseのクラスopenを外す
});

$('.overlay').click(function(){//.overlayをクリックすると
    $('.overlay').removeClass('active');////.overlayのクラスactiveを外しーの
    $('.navbar-collapse').removeClass('open');//.navbar-collapseのクラスopenを外す
});

// TOPに戻るボタン
  $(function($) {
    var $toTopBtn = $(['<div id="toTopBtn" title="ページTOPへ">',
                       '  <i class="fas fa-chevron-up"></i>',
                       '</div>'].join(''));
    $toTopBtn.on('click', function () {
      $('body, html').animate({ scrollTop: 0}, 500);
      return false;
    });

    $('body > footer').before($toTopBtn.hide());

    $(window).on('scroll', function () {
      if (50 < $(this).scrollTop()) {
          $toTopBtn.fadeIn();
      } else {
          $toTopBtn.fadeOut();
      }
    });
  });

// フッターの電話番号リンク（スマホ時のみ作動）
if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
  $(function() {
    $('.tel').each(function() {
      var str = $(this).html();
      if ($(this).children().is('img')) {
        $(this).html($('<a>').attr('href', 'tel:' + $(this).children().attr('alt').replace(/-/g, '')).append(str + '</a>'));
      } else {
        $(this).html($('<a>').attr('href', 'tel:' + $(this).text().replace(/-/g, '')).append(str + '</a>'));
      }
    });
  });
}

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