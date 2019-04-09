<!doctype html>
<html lang="ja">
<head>
<!-- Required meta tags -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="ED治療薬通販の商品一覧ページ｜バイアグラ・シアリス・レビトラ・ステンドラやEDサプリメント・不感症改善薬など様々な治療薬をご紹介。安全なメーカー正規品のジェネリック医薬品や海外医薬品を最安値でのお求めは【お薬通販部】にお任せください!!">
<link rel="canonical" href="https://okusuri-shop.com/">

<!-- Google font -->
<link href="//fonts.googleapis.com/css?family=Noto+Sans+JP:400,700" rel="stylesheet">
<link href="//fonts.googleapis.com/css?family=Lato:400,900" rel="stylesheet">

<!-- drawer css-->
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/drawer/3.2.2/css/drawer.min.css">

<!-- Bootstrap CSS -->
<link rel="stylesheet" href="//stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" crossorigin="anonymous">

<!-- page CSS -->

<!-- original CSS -->
<link rel="stylesheet" href="css/contact.css">

<title>お問い合わせ｜医薬品・サプリメント【お薬通販部】</title>
</head>
<body>
<?php include "inc/header_p_login.php"; ?>
<div class="wrapper">
  <div class="container-fluid">
    <div class="row justify-content-lg-center">
      <main class="col-lg-9 col-xl-10">

        <nav class="my_breadcrumb" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.php"><i class="fas fa-home mr-1"></i>お薬通販部TOP</a></li>
            <li class="breadcrumb-item active" aria-current="page">お問い合わせ</li>
          </ol>
        </nav>
        <h1 class="contact_h1">お問い合わせ</h1>
        <p>
          お問い合わせ前に、「よくある質問」をご確認ください。<br>
          「よくある質問」にて問題が解決されない場合は、下記のお問い合わせフォームより、お問い合わせください。<br>
          お客様サポートデスクの営業時間内の対応となりますので、予めご了承下さい。<br>
          ※お問い合わせをしても、サポートデスクから連絡が来ないという方は、「メールが届かないお客様へ」をご確認ください。
        </p>

        <dl class="row contact_info mb-4">
          <dt class="col-sm-5 col-md-4 col-xl-3">名前</dt>
          <dd class="col-sm-7 col-md-8 col-xl-9">
            <input type="text" class="col-12 col-md-6 col-lg-9 col-xl-6 col-form-label form-control form-control-sm mx-1" id="" placeholder="">
          </dd>
          <dt class="col-sm-5 col-md-4 col-xl-3">メールアドレス</dt>
          <dd class="col-sm-7 col-md-8 col-xl-9">
            <div class="form-group row align-items-center mb-0 mx-0">
              <input type="email" class="col-12 col-md-6 col-lg-9 col-xl-6 col-form-label form-control form-control-sm mx-1 form-inline" id="" placeholder="">
            </div>
          </dd>
          <dt class="col-sm-5 col-md-4 col-xl-3">注文番号</dt>
          <dd class="col-sm-7 col-md-8 col-xl-9">
            <div class="form-group row align-items-center mb-0 mx-0">
              <input type="text" class="col-12 col-md-6 col-lg-9 col-xl-6 col-form-label form-control form-control-sm mx-1 form-inline" id="" placeholder="">
            </div>
          </dd>
          <dt class="col-sm-5 col-md-4 col-xl-3">お問い合わせ内容</dt>
          <dd class="col-sm-7 col-md-8 col-xl-9">
            <div class="form-group row align-items-center mb-0 mx-0">
              <select name="title" id="title" class="validate[required] form-control form-control-sm ">
                <option value="">お問い合わせの内容を選択してください </option>
                <optgroup label="ご購入前のお問い合わせ">
                <option value="商品に関して">商品に関して</option>
                <option value="サービスに関して">サービスに関して</option>
                </optgroup>
                <optgroup label="ご注文後のお問い合わせ">
                <option value="ご注文内容変更（お支払い完了前のみ可能）">ご注文内容変更（お支払い完了前のみ可能）</option>
                <option value="ご住所変更（お支払い完了前のみ可能）">ご住所変更（お支払い完了前のみ可能）</option>
                <option value="配送状況に関して">配送状況に関して</option>
                <option value="ご入金の連絡や確認">ご入金の連絡や確認</option>
                <option value="ご到着した商品について">ご到着した商品に関して</option>
                </optgroup>
                <optgroup label="その他のお問い合わせ">
                <option value="ログインに関して">ログインに関して</option>
                <option value="メールの不具合に関して">メールの不具合に関して</option>
                <option value="メールマガジンに関して">メールマガジンに関して</option>
                <option value="その他">その他</option>
                </optgroup>
              </select>
            </div>
          </dd>
          <dt class="col-sm-5 col-md-4 col-xl-3">本文</dt>
          <dd class="col-sm-7 col-md-8 col-xl-9">
            <textarea id="notice" name="notice" class="input10 validate[required] form-control form-control-sm" placeholder="お問い合わせ内容を入力してください。" rows="5"></textarea>
          </dd>
        </dl>
        <nav class="info_change mx-auto">
          <a href="contact_confirmation.php" class="btn btn-block btn-info mb-5">送信内容を確認する</a>
        </nav>

      </main>
      <aside class="col-lg-3 col-xl-2 order-lg-first">
        <nav class="side_nav my-lg-4 d-none d-lg-block">
<?php include "inc/aside_menu.php"; ?>
        </nav>
<?php include "inc/side_sns.php"; ?>
      </aside>
      <?php include "inc/login_modal.php"; ?>
    </div>
  </div>
</div>
<?php include "inc/footer.php"; ?>

<!-- Page JS -->

<!-- Original JS -->
<script src="common/js/common.js"></script>

</body>
</html>