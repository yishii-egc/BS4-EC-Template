// 商品画像切替
$(function(){
  $('.thumbnails img').hover(function(){
    var $thisImg = $(this).attr('src');
    var $thisAlt = $(this).attr('alt');
    $('.main_img img').attr({src:$thisImg,alt:$thisAlt});
  });
});


// リロード時、上部のカート表が画面の外になってたらスライドカートを表示する
  $(function () {
    var navheight = $('.navbar_main').height();
    var t = $('.delivery_info').offset().top + 10; // ターゲットの位置取得
    var s = t - navheight ;
    console.log(navheight);
    if($(window).scrollTop() > t){
      $('.slide_cart').addClass('slidein');
    } else {
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
          var navheight = $('.navbar_main').height(); // ヘッダー高さ
          var t = $('.delivery_info').offset().top + 10; // .delivery_infoのTOPからの位置取得+10
          var s = t - navheight ;
          var c = $('.slide_cart').hasClass('cart_hide'); // カート表示状態の有無
          var s2 = $(window).scrollTop() > t ; // スクロールがtより大きいとき
          var s3 = $(window).scrollTop() < t ; // スクロールがtより小さいとき
          if(s2 && !$('slide_cart').hasClass('cart_hide')){
            $('.slide_cart').addClass('slidein');
          }
          else if(s3 && $('slide_cart').hasClass('cart_hide')) {
            $('.slide_cart').removeClass('slide_in').removeClass('cart_hide'); // カートをスライドアウト
          }
          else if(s3) {
            $('.slide_cart').removeClass('slidein').removeClass('cart_hide'); // カートをスラ
          }
          else {
            $('.slide_cart').removeClass('slidein'); // カートをスライドアウト
          }
        }, 5);
    });
  });

// スライドカートの×をクリックしたらスライドカートを引っ込める
  $('.slide_cart_close').click(function(){
      $('.slide_cart').removeClass('slidein').addClass('cart_hide');
  });

