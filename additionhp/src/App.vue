<template>
  <v-app>
    <v-app-bar class="custom-app-bar" color="orange">
      <v-toolbar-title>会社概要</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text >TOP</v-btn>
      <v-btn text >サービスgg
      </v-btn>
      <v-btn text >会社概要</v-btn>
      <v-btn text >お問い合わせ</v-btn>
    </v-app-bar>

    <v-main>
      <v-container class="mt-5">
        <v-row>
          <v-col cols="12">
            <v-card class="mb-5">
              <v-row>
                <v-col cols="12" md="8">
                  <v-card-title>代表挨拶</v-card-title>
                  <v-card-text>
                    代表挨拶の例文。<br>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。 <br>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。 <br>
                    <div class="signature">代表者名</div>
                  </v-card-text>
                </v-col>
                <v-col cols="12" md="4">
                  <v-img
                    src="@/assets/logo.png"
                    aspect-ratio="1"
                    class="custom-img"
                  ></v-img>
                </v-col>
              </v-row>
            </v-card>
          </v-col>

          <v-col cols="12">
            <v-card>
              <v-card-title>メッセージ</v-card-title>
              <v-card-text>
                <div class="mission">
                  <strong>Mission</strong>
                  <p>中堅中小企業及び個人事業主のIT活用を推進し、データに基づく企業成長を実現する</p>
                </div>
                <div class="vision">
                  <strong>Vision</strong>
                  <p>経営に確かな地図とコンパスを</p>
                </div>
                <br>
                <div class="value">
                  <strong>Value</strong>
                  <p>
                    ビジネスを楽しむ<br>
                    常に新しいことにチャレンジする<br>
                    顧客の成功にコミットする
                  </p>
                </div>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" class="mt-5">
            <v-card>
              <v-card-title>会社概要</v-card-title>
              <v-card-text>
              <div class="company-info">
                <p><strong>会社名&nbsp;&nbsp;&nbsp;&nbsp;：</strong>テキストテキストテキストテキストテキストテキスト</p>
                <p><strong>設立日&nbsp;&nbsp;&nbsp;&nbsp;：</strong>テキストテキストテキストテキストテキストテキスト</p>
                <p><strong>所在地&nbsp;&nbsp;&nbsp;&nbsp;：</strong>テキストテキストテキストテキストテキストテキスト</p>
                <p><strong>代表者&nbsp;&nbsp;&nbsp;&nbsp;：</strong>テキストテキストテキストテキストテキストテキスト</p>
                <p><strong>事業内容：</strong>テキストテキストテキストテキストテキストテキスト</p>
              </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer color="orange">
      <v-col class="text-center">
        <v-spacer></v-spacer>
        <v-btn text class="custom-btn">TOP</v-btn>
        <v-btn text class="custom-btn">サービス</v-btn>
        <v-btn text class="custom-btn">会社概要</v-btn>
        <v-btn text class="custom-btn" >お問い合わせ</v-btn>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.custom-app-bar {
  position: relative !important;
}
.v-application {
  min-height: 100vh;
}

.custom-btn {
  color: black !important;  /* ボタンのテキストカラーを黒に設定 */
  background-color: transparent !important;  /* ボタンの背景色を透明に設定 */
  border: none !important;  /* ボタンの枠線を透明に設定 */
  box-shadow: none !important; /* ボタンの影を削除*/
}

.signature {
text-align: right;
margin-top: 20px;
}

.custom-img {
  height: 400px; /* 画像の高さを指定 */
}

.v-card-title {
font-size: 1.5rem;
font-weight: bold;
}
.v-card-text {
font-size: 1rem;
}

.mission,vision,value{
  margin-bottom: 20px;
}

.company-info p {
  margin: 0;
  margin-bottom: 10px;
}

@media (max-width: 600px) {
.custom-img {
height: auto; /* スマホ画面では画像の高さを自動調整 */
width: 100%; /* 画像を全幅に調整 */
}
}
</style>
