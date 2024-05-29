<template>
  <v-app>
    <v-app-bar class="custom-app-bar" color="white">
      <div style="display: flex; align-items: center; flex-grow: 0.2;">
        <v-img 
          src="@/assets/addition.png"
          style="margin-right: 8px; height: 50px;"
        ></v-img>
        <v-toolbar-title>Addition</v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
      <v-btn text to="/">TOP</v-btn>
      <v-btn text>サービス</v-btn>
      <v-btn text to="/profile">会社概要</v-btn>
      <v-btn text>お問い合わせ</v-btn>
    </v-app-bar>

    <v-main style="padding: 0; margin: 0;">
      <v-container fluid>
        <v-row>
          <v-col cols="12" class="text-center" style="background-color: orange; color: white;">
            <h1 style=" font-size: 2rem; font-weight: bold;">ファーストビュー</h1>
          </v-col>
        </v-row>

        <v-row class="my-5">
          <v-col cols="12">
            <v-card class="pa-5" style="box-shadow: none;">
              <v-card-title>会社概要</v-card-title>
              <v-card-text>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-card>
                      <v-card-text>
                        テキストテキストテキストテキストテキスト
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-card>
                      <v-card-text>
                        テキストテキストテキストテキストテキスト
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="my-5">
          <v-col cols="12">
            <v-card class="pa-5" style="box-shadow: none;">
              <v-card-title>サービス</v-card-title>
              <v-card-text>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-card>
                      <v-card-text>
                        テキストテキストテキストテキストテキスト
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-card>
                      <v-card-text>
                        テキストテキストテキストテキストテキスト
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="my-5">
          <v-col cols="12" class="text-center">
            <v-btn color="primary">お問い合わせ</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer color="orange">
      <v-col class="text-center">
        <v-btn text class="custom-btn" to="/">TOP</v-btn>
        <v-btn text class="custom-btn" to="/services">サービス</v-btn>
        <v-btn text class="custom-btn" to="/company">会社概要</v-btn>
        <v-btn text class="custom-btn" to="/contact">お問い合わせ</v-btn>
        <v-row class="justify-center mt-3">
          <p style="color:white; font-size: 2rem; font-family: 'Roboto',sans-serif;">©︎Addition inc.</p>
        </v-row>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style>
.custom-app-bar {
  position: relative !important;
  box-shadow: none !important;
}
.v-application {
  min-height: 100vh;
}

.custom-btn {
  color: black !important;  /* ボタンのカラーを黒に設定 */
  background-color: transparent !important;  /* ボタンの背景色を透明に設定 */
  border: none !important;  /* ボタンの枠線を透明に設定 */
  box-shadow: none !important;  /*ボタンの影を削除*/
}

.v-card-title {
  font-size: 1.5rem;
  font-weight: bold;
}
.v-card-text {
  font-size: 1rem;
}

@media (max-width: 600px) {
.custom-img {
  height: auto; /* スマホ画面では画像の高さを自動調整 */
  width: 100%; /* 画像を全幅に調整 */
}
}
</style>
