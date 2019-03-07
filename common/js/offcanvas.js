$(function () {
  'use strict'

  // メインメニューの開閉
  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
  // アイテムの開閉
  $('[data-toggle="offcanvas_item"]').on('click', function () {
    $('.offcanvas_item').toggleClass('open')
  })
});
