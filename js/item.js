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
            $('.slide_cart').addClass('slidein'); // カートをスライドイン
          } else if(){
            
          } else{
            $('.slide_cart').removeClass('slidein'); // カートをスライドアウト
          }
        }, 5);
    });
  });

// スライドカートの×をクリックしたらスライドカートを引っ込める
  $('.slide_cart_close').click(function(){
      $('.slide_cart').removeClass('slidein');
  });

$(function(){
  $('.slick_wrapper').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev btn btn-small btn_white_trans"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next btn btn-small btn_white_trans"><i class="fas fa-angle-right"></i></button>',
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    ]
  });
});