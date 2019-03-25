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
