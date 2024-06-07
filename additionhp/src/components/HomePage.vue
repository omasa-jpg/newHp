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
      <v-btn class="custom-btn" text to="/">TOP</v-btn>
      <v-btn class="custom-btn" text to="/service">サービス</v-btn>
      <v-btn class="custom-btn" text to="/profile">会社概要</v-btn>
      <v-btn text href="https://docs.google.com/forms/d/e/1FAIpQLSdTbVbL6-yrmlm9BEDkc540ikCd2AasF7rhFdWFBHtwwVrTSA/viewform" target="_blank">お問い合わせ</v-btn>
    </v-app-bar>

    <v-main style="padding: 0%; padding-bottom: 100px;">
      <v-container fluid style="padding: 0; margin: 0;">
        <v-row style="padding: 0; margin: 0;">
          <v-col cols="12" class="text-center" style="padding: 0; margin: 0;">
            <v-img style="
            padding-left: 0%;
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
      </v-container>
    </v-main>
          
    <v-btn color="primary" 
      href="https://docs.google.com/forms/d/e/1FAIpQLSdTbVbL6-yrmlm9BEDkc540ikCd2AasF7rhFdWFBHtwwVrTSA/viewform" 
      target="_blank"
      class="floating-btn"
      icon
      ><v-icon>mdi-email</v-icon>
    </v-btn>
          
    <v-footer>
      <v-col class="justify-center">
        <v-row class="justify-center" style="background-color: white;">
          <v-btn class="custom-btn" text to="/">TOP</v-btn>
          <v-btn class="custom-btn" text to="/service">サービス</v-btn>
          <v-btn class="custom-btn" text to="/profile">会社概要</v-btn>
          <v-btn text href="https://docs.google.com/forms/d/e/1FAIpQLSdTbVbL6-yrmlm9BEDkc540ikCd2AasF7rhFdWFBHtwwVrTSA/viewform" target="_blank">お問い合わせ</v-btn>
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

.v-btn {
  background-color: transparent !important;
  border: none !important;
  box-shadow: none !important;
}

.v-btn:active,
.v-btn:focus,
.v-btn:hover {
  background-color: transparent !important;
  box-shadow: none !important;
}

.v-btn:visited {
  background-color: transparent !important;
  box-shadow: none !important;
}

.v-card-title {
  font-size: 1.5rem;
  font-weight: bold;
}

.v-card-text {
  font-size: 1rem;
}

.floating-btn {
  position: fixed;
  bottom: 60px;
  right: 30px;
  background-color: orange;
  color: white !important;
  font-weight: bold !important;
  z-index: 1000;
}

@media (max-width: 600px) {
.custom-img {
  height: auto; /* スマホ画面では画像の高さを自動調整 */
  width: 100%; /* 画像を全幅に調整 */
}
}
</style>
