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

// 商品情報のタブ固定の位置
  $(function () {
    var h = $('.navbar_main').outerHeight(true);
    $('.item_tabs').css('top', h);
  });

// 口コミのページネーション
  $(function() {
    $('.review_list').pagination({
      paginationMode: true,
      itemElement              : '.review_item',
      wrapElement              :'nav',
      displayItemCount         : 10,
      paginationClassName      : 'pagination_wrap',
      paginationInnerClassName : 'pagination justify-content-center',
      prevNextPageBtnMode      : false
    });
    $('.pagination li a').click(function(){
      var position = $('.review_list').offset().top;
      $('body, html').animate({ scrollTop: position - 150},50);
    });
  });

// スムーススクロール
  $(function(){
    $('.item_intro a[href^="#"]').click(function(){
      var speed = 200;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var headerHeight = $('.navbar_main').outerHeight(); 
      var position = target.offset().top - headerHeight - 16;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });

// slick
$(function(){
  $('.slick_wrapper').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev btn btn-small btn_white_trans"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next btn btn-small btn_white_trans"><i class="fas fa-angle-right"></i></button>',
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
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