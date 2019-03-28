<!--
 fld = new Array();
 fld['family_name'] = "required";
 fld['first_name'] = "required";
 fld['family_name_kana'] = "required";
 fld['first_name_kana'] = "required";
 fld['sex']  = "radio";
 fld['birth_year'] = "required";
 fld['birth_month'] = "required";
 fld['birth_day'] = "required";
 fld['destination']  = "radio";
 fld['post_code'] = "required";
 fld['pref_name'] = "required";
 fld['city'] = "required";
 fld['street'] = "required";
 fld['tel_no'] = "required";
 fld['mail_address1'] = "mail";
 fld['passwd'] = "required";
 fld['agree'] = "required";
 //fld['payment']  = "radio";
 reqcolor = "#ffe5f2";
 encolor  = "#ffffff";
-->


$(function(){
  $('.collapsed_tr').hide();
  $( 'input[name="destination"]:radio' ).change( function() {
    var radioval = $(this).val();
    if(radioval == 2){
      $('.collapsed_tr').show(300);
    }else{
      $('.collapsed_tr').hide(300);
    }
  });
});


$(function(){
  //送信ボタンの無効、チェックボックスを外す
  $(".info_change .btn").css({opacity:"0.5",cursor:"default"}).attr("disabled","disabed");
  $(".entry_agree input:checkbox").attr('checked',false);
  //利用規約：チェックボックスがクリックされると送信ボタン有効
  $(".inputForm label,.inputForm input").click(function(){
    if($(".inputForm input:checkbox").is(':checked')){
      $(".btnCbox .btnInput").css({opacity:"1",cursor:"pointer"}).removeAttr("disabled");
    }else{
      $(".btnCbox .btnInput").css({opacity:"0.5",cursor:"default"}).attr("disabled","disabed");
    }
  })
});
