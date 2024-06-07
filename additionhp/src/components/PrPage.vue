<template>
  <v-app>
    <v-app-bar class="custom-app-bar" color="white">
      <div style="display: flex; align-items: center; flex-grow: 0.2;">
        <v-img 
          src="@/assets/addition.png"
          style="margin-right: 8px; height: 50px;"
        ></v-img>
      </div>
      <v-spacer></v-spacer>
      <v-btn text class="custom-btn" to="/">TOP</v-btn>
      <v-btn text class="custom-btn" to="/service">サービス</v-btn>
      <v-btn text class="custom-btn" to="/profile">会社概要</v-btn>
      <v-btn text class="custom-btn">お問い合わせ</v-btn>
    </v-app-bar>

    <v-main style="padding-bottom: 100px; padding-top: 0%;">
      <v-container fluid style="padding: 0; margin: 0;">
            <v-img style="
            width: 100%;
            height: 10%;
            padding: 0;
            margin: 0;
            object-fit: cover;" 
          src="@/assets/pr.jpg"
        ></v-img>
        <v-row style="margin-right: 0; padding-left: 100px; padding-right: 100px; padding-top: 100px; box-shadow: none; border: none;" >
          <v-col cols="12" style="margin: 0% auto; box-shadow: none; border: none;">
            <v-card-title class="text-center">〇〇〇〇様</v-card-title>
            <v-card class="pa-10;" style="margin-top: 0; border: none; box-shadow: none;">
              <v-card-text>
                <v-row>
                  <v-col cols="12" md="6" style="padding-bottom: 40px; padding-top: 40px;">
                    <v-img 
                    src="@/assets/plan.png"
                    style="width: 100%; height: 100%;"
                    ></v-img>
                  </v-col>
                  <v-col cols="12" md="6" style="display: flex; align-items: center;">
                    <v-card style="box-shadow: none;">
                      <v-card-text style="text-align: left; font-size: 24px; font-weight: bold;">
                        テキストテキストテキストテキストテキストテキストテキストテキストテキストスト<br>
                        テキストテキストテキストテキストテキストテキストテキストテキストテキストスト<br>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="5" md="5">
                    <v-card-title class="text-center">導入前</v-card-title>
                    <v-card style="box-shadow: none;">
                      <v-card-text style="text-align: left;">
                        テキストテキストテキストテキストテキストテキストテキストテキストテキストスト<br>
                        テキストテキストテキストテキストテキストテキストテキストテキストテキストスト<br>
                        テキストテキストテキストテキストテキストテキストテキストテキストテキストスト<br>
                        テキストテキストテキストテキストテキストテキストテキストテキストテキストスト<br>
                        テキストテキストテキストテキストテキストテキストテキストテキストテキストスト<br>
                        テキストテキストテキストテキストテキストテキストテキストテキストテキストスト<br>
                        テキストテキストテキストテキストテキストテキストテキストテキストテキストスト<br>
                        テキストテキストテキストテキストテキストテキストテキストテキストテキストスト<br>
                      </v-card-text>
                    </v-card>
                  </v-col>
  
                  <v-col cols="2" class="text-center" style="padding: 0%; margin: 0%; display: flex; align-items: center;">	
                  <v-card-text style="font-size: 2rem;"
                  >
                  ⇒
                  </v-card-text>	
                  </v-col>

                  <v-col cols="6" md="5">
                    
                    <v-card-title class="text-center">導入後</v-card-title>
                    <v-card style="box-shadow: none;">
                      <v-card-text style="text-align: left;">
                        テキストテキストテキストテキストテキストテキストテキストテキストテキストスト<br>
                        テキストテキストテキストテキストテキストテキストテキストテキストテキストスト<br>
                        テキストテキストテキストテキストテキストテキストテキストテキストテキストスト<br>
                        テキストテキストテキストテキストテキストテキストテキストテキストテキストスト<br>
                        テキストテキストテキストテキストテキストテキストテキストテキストテキストスト<br>
                        テキストテキストテキストテキストテキストテキストテキストテキストテキストスト<br>
                        テキストテキストテキストテキストテキストテキストテキストテキストテキストスト<br>
                        テキストテキストテキストテキストテキストテキストテキストテキストテキストスト<br>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

      <v-footer>
        <v-col class="justify-center">
          <v-row class="justify-center" style="background-color: white;">
            <v-btn text class="custom-btn" to="/">TOP</v-btn>
            <v-btn text class="custom-btn" to="/services">サービス</v-btn>
            <v-btn text class="custom-btn" to="/company">会社概要</v-btn>
            <v-btn text class="custom-btn" to="/contact">お問い合わせ</v-btn>
          </v-row>
        </v-col>
      </v-footer>
      <v-footer color="orange" class="justify-center">
            <p style="color:white; font-family: 'Roboto',sans-serif;">©︎Addition inc.</p>
      </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'PrPage'
}
</script>

<style>
.custom-app-bar {
  position: relative !important;
  box-shadow: none !important;
}

.custom-btn::before {
  color: black !important;  /* ボタンのカラーを黒に設定 */
  background-color: transparent !important;  /* ボタンの背景色を透明に設定 */
  border: none !important;  /* ボタンの枠線を透明に設定 */
  box-shadow: none;  /*ボタンの影を削除*/
}

/* クリック時の背景色を無効化 */
.custom-btn:hover,
.custom-btn:focus,
.custom-btn:active
.custom-btn.v-btn--active,
.custom-btn.v-btn:focus,
.custom-btn.v-btn:active,
.custom-btn.v-btn:hover {
  background-color: transparent !important;  /* クリック時やホバー時の背景色を透明に設定 */
}

.v-btn {
  background-color: transparent !important;  /* ボタンの背景色を透明に設定 */
}

.v-btn:active,
.v-btn:hover,
.v-btn:focus,
.v-btn:before,
.v-btn:after {
  background-color: transparent !important;  /* クリック時やホバー時の背景色を透明に設定 */
  box-shadow: none !important; /* クリック時やホバー時の影を削除 */
}


@media (max-width: 600px) {
.custom-img {
  height: auto; /* スマホ画面では画像の高さを自動調整 */
  width: 100%; /* 画像を全幅に調整 */
}
}
</style>
