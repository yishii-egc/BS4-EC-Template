  $(function() {
    $('.pagenation_items').pagination({
      paginationMode: true,
      itemElement              : '.item',
      wrapElement              :'nav',
      displayItemCount         : 10,
      paginationClassName      : 'pagination_wrap',
      paginationInnerClassName : 'pagination justify-content-center',
      prevNextPageBtnMode      : false
    });
    $('.pagination li a').click(function(){
      var position = $('.pagenation_items').offset().top;
      $('body, html').animate({ scrollTop: position - 150},50);
    });
  });