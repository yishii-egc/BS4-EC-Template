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