  <!-- Login Modal -->
  <div class="modal fade" id="login_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">ようこそ お薬通販部へ</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" class="fas fa-times"></span>
          </button>
        </div>
        <div class="modal-body">
          <form method="get" action="/login.php">
            <div class="form-group">
              <label for="exampleInputEmail1">メールアドレス</label>
              <input type="email" class="form-control form-control-sm" aria-describedby="emailHelp" placeholder="例：xxxx@okusuri-shop.com">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword3">パスワード</label>
              <input type="password" class="form-control form-control-sm" placeholder="パスワード">
            </div>
            <button type="submit" class="btn btn-sm btn-success mb-4">ログイン</button>
            <div class="form-group pt-3 border-top">
              <label for="exampleInputEmail1">パスワードを忘れた方</label>
              <input type="email" class="form-control form-control-sm" aria-describedby="emailHelp" placeholder="登録時のメールアドレスを入力して下さい">
            </div>
            <button type="submit" class="btn btn-sm btn-success mb-4">パスワードを問い合わせる</button>

            <p class="pt-3 border-top mb-1">初めてのお客様</p>
            <a href="entry.php" class="btn btn-sm btn-info mb-2">新規会員登録</a>
          </form>
        </div>
      </div>
    </div>
  </div>