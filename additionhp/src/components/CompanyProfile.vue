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
      <v-btn class="custom-btn" text href="https://docs.google.com/forms/d/e/1FAIpQLSdTbVbL6-yrmlm9BEDkc540ikCd2AasF7rhFdWFBHtwwVrTSA/viewform" target="_blank">お問い合わせ</v-btn>
    </v-app-bar>
    <v-row style="padding: 0; margin: 0;">
                <v-col cols="12" class="text-center" style="padding: 0; margin: 0;">
                  <v-img style="
                  width: 100%;
                  display: block;" 
                  src="@/assets/Addition_company.jpg"
                ></v-img>
                </v-col>
        </v-row>
    <v-main style="padding-bottom: 100px; padding-top: 100px;">
      <v-container class="mt-5">
        <v-row>
          <v-col cols="12">
            <v-card class="mb-5" style="box-shadow: none;">
              <v-card-title style="text-align: center;">代表挨拶</v-card-title>
              <v-row cols="8">
                <v-col cols="12" md="8">
                  <v-card-text>
                    私たちのITコンサルティング会社は、最新技術と革新的なソリューションを提供し、お客様のビジネスの成長と成功を支援することを使命としています。<br>
                    デジタルトランスフォーメーションが進む中、ITを最大限に活用することが企業の競争力を高める鍵となります。<br>
                    お客様一人ひとりに寄り添い、最適なIT戦略を提案・実行し、信頼関係を築き、透明性のあるコミュニケーションを心がけ、長期的なパートナーシップを目指しています。<br>
                    私たちと共に、未来への扉を開き、新たな価値を創造していきましょう。
                    <div class="signature">西島伸樹</div>
                  </v-card-text>
                </v-col>
                <v-col cols="1" md="4">
                  <v-img
                    src="@/assets/logo.png"
                    class="golden-ratio-img"
                  ></v-img>
                </v-col>
              </v-row>
            </v-card>
          </v-col>

          <v-col cols="12">
            <v-card style="box-shadow: none;">
              <v-card-title style="text-align: center;">理念</v-card-title>
              <v-card-text>
                <div class="mission">
                  <strong style="font-size: 3rem;">Mission</strong>
                  <p>－中堅中小企業及び個人事業主のIT活用を推進し、データに基づく企業成長を実現する</p>
                </div>
                <div class="vision">
                  <strong style="font-size: 3rem;">Vision</strong>
                  <p>－経営に確かな地図とコンパスを</p>
                </div>
                <br>
                <div class="value">
                  <strong style="font-size: 3rem;">Value</strong>
                  <p>－ビジネスを楽しむ・常に新しいことにチャレンジする・顧客の成功にコミットする</p>
                </div>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" class="mt-5" style="text-align: center;">
            <v-card style="box-shadow: none;">
              <v-card-title>会社概要</v-card-title>
              <v-card-text>
                <div class="company-info">
                  <p><strong>会社名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;：&nbsp;&nbsp;</strong>合同会社addition</p>
                  <p><strong>所在地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;：&nbsp;&nbsp;</strong>滋賀県守山市吉身6丁目4-46 シャトーロワール102</p>
                  <p><strong>設立&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;：&nbsp;&nbsp;</strong>2023年3月</p>
                  <p><strong>取締役&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;：&nbsp;&nbsp;</strong>西島伸樹</p>
                  <p><strong>事業内容&nbsp;&nbsp;：&nbsp;&nbsp;</strong>(1)コンピュータのソフトウェア及びハードウェアの企画、研究、開発、設計、製造、販
売、保守、リース、賃貸及び輸出入並びにそれらに関するコンサルティング業務
(2)情報の収集、分析、管理及び処理サービス業、情報提供サービス業並びに情報処理に
関する研究開発</p>
                </div>
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
          <v-btn text class="custom-btn" to="/service">サービス</v-btn>
          <v-btn text class="custom-btn" to="/profile">会社概要</v-btn>
          <v-btn text class="custom-btn" href="https://docs.google.com/forms/d/e/1FAIpQLSdTbVbL6-yrmlm9BEDkc540ikCd2AasF7rhFdWFBHtwwVrTSA/viewform" target="_blank">お問い合わせ</v-btn>
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
  name: 'CompanyProfile'
}
</script>

<style>
.custom-app-bar {
  position: relative !important;
  box-shadow: none !important;
  border: solid !important;
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

.golden-ratio-img {
  width: 90%;
  height: 100%;
  padding-top: 25%;
}
</style>
