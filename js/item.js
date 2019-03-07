// 商品画像切替
$(function(){
  $('.thumbnails img').hover(function(){
    var $thisImg = $(this).attr('src');
    var $thisAlt = $(this).attr('alt');
    $('.main_img img').attr({src:$thisImg,alt:$thisAlt});
  });
});

// リロード時、上部のカート表がスクロール外になってたらスライドカートを表示する
  $(function () {
    var navheight = $('.navbar_main').height();
    var t = $('.delivery_info').offset().top + 10; // ターゲットの位置取得
    var s = t - navheight ;
    console.log(navheight);
    if($(window).scrollTop() > t){
      $('.slide_cart').addClass('slidein');
    }else{
      $('.slide_cart').removeClass('slidein');
    }
  });

// スクロールして上部のカート表がスクロール外になってたらスライドカートを表示する
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

// スライドカートの×をクリックしたらスライドカートを引っ込める
  $('.slide_cart_close').click(function(){
      $('.slide_cart').removeClass('slidein');
  });
