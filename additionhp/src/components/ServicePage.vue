<template>
  <v-app>
    <v-app-bar class="custom-app-bar" color="white" style="border: none;">
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
      <v-btn class="custom-btn" text href="https://docs.google.com/forms/d/e/1FAIpQLSdTbVbL6-yrmlm9BEDkc540ikCd2AasF7rhFdWFBHtwwVrTSA/viewform" target="_blank">お問い合わせ</v-btn>
    </v-app-bar>

    <v-main style="padding-bottom: 100px; padding-top: 0%;">
      <v-container fluid style="padding: 0; margin: 0;">
            <v-img style="
            width: 100%;"
            src="@/assets/Addition_service.jpg"
            ></v-img>     
  
            <v-row style="margin-right: 0; padding-left: 100px; padding-right: 100px; padding-top: 100px;" >
              <v-col cols="12" style="margin: 0% auto;">
                <v-card class="pa-10;" style="margin-top: 0; box-shadow: none;">
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
                          <v-card-text style="font-size: 2rem; font-weight: bold; text-align: left; margin-top: 40px; position: relative; display: inline-block;">
                            IT Planners<br>
                            <span style="position: absolute; left: 15px; bottom: 20px; height: 2px; width: 265%; background-color: black;"></span>
                          </v-card-text>
                          <v-card-text style="text-align: left;">
                        DX推進や業務効率化などビジネスにおける課題解決に向けた 技術的知見、<br>
                        開発リソースを月3万円〜で提供します。
                      </v-card-text>
                    </v-card>
                    <div style="margin-top: auto; text-align: right; width: 100%;">
                      <v-btn to="/pr" style="background-color: #F1684D!important; font-size: 1rem; font-weight: bold; color: black; height: 50px; padding: 10px;">詳しくはこちらから＞＞</v-btn>
                    </div>
                  </v-col>
                  
                  <v-col cols="12" md="6" style=" padding-top: 40px; padding-bottom: 40px;">
                    <v-card style="box-shadow: none; text-align: left;">
                      <v-card-text style="font-size: 2rem; font-weight: bold; margin-top: 40px; position: relative; display: inline-block;">
                        プログラミング教育<br>
                        <span style="position: absolute; left: 15px; bottom: 20px; height: 2px; width: 165%; background-color: black;"></span>
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
                      <v-card-text style="font-size: 2rem; font-weight: bold; text-align: left; margin-top: 40px; position: relative; display: inline-block;">
                        システム構築<br>
                        <span style="position: absolute; left: 15px; bottom: 20px; height: 2px; width: 255%; background-color: black;"></span>
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

      <v-footer>
        <v-col class="justify-center">
          <v-row class="justify-center" style="background-color: white;">
            <v-btn class="custom-btn" text to="/">TOP</v-btn>
            <v-btn class="custom-btn" text to="/service">サービス</v-btn>
            <v-btn class="custom-btn" text to="/profile">会社概要</v-btn>
            <v-btn class="custom-btn" text href="https://docs.google.com/forms/d/e/1FAIpQLSdTbVbL6-yrmlm9BEDkc540ikCd2AasF7rhFdWFBHtwwVrTSA/viewform">お問い合わせ</v-btn>
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
  name: 'ServicePage'
}
</script>

<style>
.custom-app-bar {
  position: relative !important;
  box-shadow: none !important;
  border: none !important;
}

.custom-btn {
  color: black !important;  /* ボタンのカラーを黒に設定 */
  background-color: transparent !important;  /* ボタンの背景色を透明に設定 */
  border: none !important;  /* ボタンの枠線を透明に設定 */
  box-shadow: none !important;  /*ボタンの影を削除*/
}


@media (max-width: 600px) {
.custom-img {
  height: auto; /* スマホ画面では画像の高さを自動調整 */
  width: 100%; /* 画像を全幅に調整 */
}
}
</style>
