$(function () {
  'use strict'

  // メインメニューの開閉
  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
  // アイテムの開閉
  $('[data-toggle="offcanvas_item"]').on('click', function () {
    $('.offcanvas_item').toggleClass('open')
  })
});
$(function () {
  var timer = false;
  $(window).scroll(function() {
      if (timer !== false) {
          clearTimeout(timer);
      }
      timer = setTimeout(function() {
        var navheight = $('.navbar_main').height();
        var t = $('.delivery_info').offset().top + 10; // ターゲットの位置取得
        var s = t - navheight ;
        console.log(navheight);
        if($(window).scrollTop() > t){
          $('.slide_cart').addClass('slidein'); // ボタンを非表示
        }else{
          $('.slide_cart').removeClass('slidein'); // ボタンを表示
        }
      }, 5);
  });
});