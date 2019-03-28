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
    $('.pagination li a').click(function(){
      $('body, html').animate({ scrollTop: 0},50);
    });
  });