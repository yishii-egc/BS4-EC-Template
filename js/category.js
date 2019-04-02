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

  $(function() {
    $('.category_items').pagination({
      paginationMode: true,
      itemElement              : '.item',
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