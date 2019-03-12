$(function(){
  $('.thumbnails img').hover(function(){
    var $thisImg = $(this).attr('src');
    var $thisAlt = $(this).attr('alt');
    $('.main_img img').attr({src:$thisImg,alt:$thisAlt});
  });
});

$(function() {
  $('.maker_items').pagination({
    paginationMode: true,
    itemElement              : '.maker_item',
    wrapElement              :'nav',
    displayItemCount         : 10,
    paginationClassName      : 'pagination_wrap',
    paginationInnerClassName : 'pagination justify-content-center',
    prevNextPageBtnMode      : false
  });
  var headerHeight = $('.navbar_main').outerHeight(true);
  var itemsTop = $('.maker_items').offset().top - headerHeight;
  console.log(itemsTop);
  $('.pagination li a').click(function(){
    $('body, html').animate({ scrollTop: itemsTop},0);
  });
});