<template>
  <v-app>
    <v-app-bar class="custom-app-bar" color="white">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
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

    <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group>
            <v-list-item>
              <v-list-item-title>HOME</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>ABOUT</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>WORK</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>SERVICE</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>BLOG</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>ACCESS</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

    <v-main style="padding: 0%; padding-bottom: 100px;">
      <v-container fluid style="padding: 0; margin: 0;;">
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

        <v-row class="my-3 justify-center" style="padding-top: 100px;">
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

        <v-row style="margin-right: 0; padding-left: 100px; padding-right: 100px; padding-top: 100px;" >
              <v-col cols="12" style="margin: 0% auto;">
                <v-card class="pa-10;" style="margin-top: 0; box-shadow: none;">
                  <v-card-title class="text-center">サービス</v-card-title>
                  <v-card-text>
                    <v-row>
                      <v-col cols="12" md="6" style="padding-bottom: 40px; padding-top: 40px;">
                        <v-img 
                        src="@/assets/IT_m.jpg"
                        style="width: 100%; height: 100%; "
                        ></v-img>
                      </v-col>
                      <v-col cols="12" md="6" style="display: flex; flex-direction: column; justify-content: flex-end; margin-bottom: 35px;">
                        <v-card style="box-shadow: none;">
                          <v-card-text style="font-size: 2rem; font-weight: bold; text-align: left; margin-top: 40px; text-decoration: underline;">
                            IT Planners<br>
                          </v-card-text>
                          <v-card-text style="text-align: left;">
                        DX推進や業務効率化などビジネスにおける課題解決に向けた 技術的知見、<br>
                        開発リソースを月3万円〜で提供します。
                      </v-card-text>
                    </v-card>
                    <div style="margin-top: auto; text-align: right; width: 100%;">
                      <v-btn to="/pr" style="background-color: #F1684D; font-size: 1rem; font-weight: bold; color: black; padding: 0%;">詳しくはこちらから＞＞</v-btn>
                    </div>
                  </v-col>
                  
                  <v-col cols="12" md="6" style=" padding-top: 40px; padding-bottom: 40px;">
                    <v-card style="box-shadow: none; text-align: left;">
                      <v-card-text style="font-size: 2rem; font-weight: bold; margin-top: 40px">
                        プログラミング教育<br>
                      </v-card-text>
                      <v-card-text style="text-align: left;">
                        一定のレベルまでプログラムレベルを引き上げながら、報酬を受け取れる<br>
                        開発の仕事に参加し、実践的に業務がこなしながら学べるスクールの運営
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col cols="12" md="6" style=" padding-top: 40px; padding-bottom: 40px; padding-left: 30px;">
                    <v-img 
                    src="@/assets/programing_m.jpg"
                    style="width: 100%; height: 100%;"
                    ></v-img>
                  </v-col>

                  <v-col cols="12" md="6" style="padding-top: 40px; padding-bottom: 40px;">
                    <v-img 
                    src="@/assets/system_m.jpg"
                    style="width: 100%; height: 100%; "
                    ></v-img>
                  </v-col>
                  <v-col cols="12" md="6" style=" padding-top: 40px; padding-bottom: 40px;">
                    <v-card style="box-shadow: none;">
                      <v-card-text style="font-size: 2rem; font-weight: bold; text-align: left; margin-top: 40px">
                        システム構築<br>
                      </v-card-text>
                      <v-card-text style="text-align: left;">
                        サービス開発、アプリ開発、LINEbot開発、HP/LP制作などリクエストに応じた<br>
                        開発を行います。
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
