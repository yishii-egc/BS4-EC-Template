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

// カテゴリスライド
$(window).on('load resize', function(){
  var mystring = $('.categorynav_scroll_x').width();//メニュー部分の幅を取得
  console.log(mystring);
  var currentmenu = $('.categorynav_scroll_x ul li .active').offset();//.active要素のoffsetを取得
  console.log(currentmenu);
});