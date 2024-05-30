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

    <v-main style="padding: 0%;">
      <v-container fluid style="padding: 0; margin: 0;">
        <v-row style="padding: 0; margin: 0;">
          <v-col cols="12" class="text-center" style="padding: 0; margin: 0;">
            <v-img style="
            padding-left: 10%;
            margin-top: 0;
            display: block;" 
          src="@/assets/fv.png"
        ></v-img>
          </v-col>
        </v-row>

        <v-row class="my-3 justify-center">
          <v-col cols="12" md="10" style="margin: 0%;">
            <v-card class="pa-10;">
              <v-card-title
              class="text-center"
              >会社概要
              </v-card-title>
              <v-card-text>
                <v-row>
                  <v-col cols="12" md="4">
                    <v-img 
                    src="@/assets/logo.png"
                    style="width: 100%; height: auto;"
                    ></v-img>
                  </v-col>
                  <v-col cols="12" md="8">
                    <v-card style="box-shadow: none;">
                      <v-card-text style="font-size: 3rem; font-weight: bold;">
                        &nbsp;&nbsp;&nbsp;ITをもっと身近に、<br>
                        &nbsp;&nbsp;&nbsp;人々の生活にもっとITを。<br>
                      </v-card-text>
                      <v-card-text>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br>
                      </v-card-text>
                    </v-card>
                  </v-col>
                   <v-col cols="12" class="d-flex justify-end">
                    <v-btn style="background-color: orange;"
                    text to="/profile">
                      ボタン
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="my-3 justify-center">
          <v-col cols="12" md="10" style="margin: 0%;">
            <v-card class="pa-10;">
              <v-card-title
              class="text-center"
              >サービス
              </v-card-title>
              <v-card-text>
                <v-row>
                  <v-col cols="12" md="5">
                    <v-img 
                    src="@/assets/plan.png"
                    style="width: 100%; height: 100%;"
                    ></v-img>
                  </v-col>
                  <v-col cols="12" md="7">
                    <v-card style="box-shadow: none;">
                      <v-card-text style="font-size: 2rem; font-weight: bold; text-align: left;">
                        IT Planners<br>
                      </v-card-text>
                      <v-card-text style="text-align: left;">
                        テキストテキストテキストテキストテキストテキストテキスト<br>
                        テキストテキストテキストテキストテキストテキストテキスト<br>
                        テキストテキストテキストテキストテキストテキストテキスト<br>
                      </v-card-text>
                    </v-card>
                  </v-col>
                  
                  <v-col cols="12" md="7">
                    <v-card style="box-shadow: none;">
                      <v-card-text style="font-size: 2rem; font-weight: bold;">
                        プログラミング教育<br>
                      </v-card-text>
                      <v-card-text>
                        テキストテキストテキストテキストテキストテキストテキスト<br>
                        テキストテキストテキストテキストテキストテキストテキスト<br>
                        テキストテキストテキストテキストテキストテキストテキスト<br>
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col cols="12" md="5">
                    <v-img 
                    src="@/assets/pr.jpg"
                    style="width: 100%; height: 100%;"
                    ></v-img>
                  </v-col>

                  <v-col cols="12" md="5">
                    <v-img 
                    src="@/assets/system.jpg"
                    style="width: 100%; height: 100%;"
                    ></v-img>
                  </v-col>
                  <v-col cols="12" md="7">
                    <v-card style="box-shadow: none;">
                      <v-card-text style="font-size: 2rem; font-weight: bold; text-align: left;">
                        システム構築<br>
                      </v-card-text>
                      <v-card-text style="text-align: left;">
                        テキストテキストテキストテキストテキストテキストテキスト<br>
                        テキストテキストテキストテキストテキストテキストテキスト<br>
                        テキストテキストテキストテキストテキストテキストテキスト<br>
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
            <v-card-text style="font-size: 1.5rem; font-weight: bold;">
                お問い合わせ
              </v-card-text>
            <v-btn color="primary">ボタン</v-btn>
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
