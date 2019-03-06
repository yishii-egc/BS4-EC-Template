// 商品画像切替
$(function(){
  $('.thumbnails img').hover(function(){
    var $thisImg = $(this).attr('src');
    var $thisAlt = $(this).attr('alt');
    $('.main_img img').attr({src:$thisImg,alt:$thisAlt});
  });
});

// 商品購入スライドの出し入れ
