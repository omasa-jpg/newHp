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

    <v-main style="padding-bottom: 100px;">
      <v-container class="mt-5">
        <v-row>
          <v-col cols="12" class="text-center" style="background-color: orange; color: white;">
            <h1 style=" font-size: 2rem; font-weight: bold;">会社概要</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card class="mb-5" style="box-shadow: none;">
              <v-row cols="8">
                <v-col cols="12" md="8">
                  <v-card-title>代表挨拶</v-card-title>
                  <v-card-text>
                    私たちのITコンサルティング会社は、最新の技術と革新的なソリューションを提供することで、<br>
                    お客様のビジネスの成長と成功をサポートすることを使命としています。<br>
                    デジタルトランスフォーメーションが急速に進む現代において、ITの力を最大限に活用することが、企業の競争力を高める鍵となっています。<br>
                    私たちは、お客様一人ひとりのニーズに寄り添い、最適なIT戦略を提案・実行してまいります。<br>
                    高度な専門知識と豊富な経験を持つ私たちのチームは、常にお客様の視点に立ち、<br>
                    共に課題を解決し、未来を創造していくパートナーでありたいと考えています。<br>
                    また、私たちは「信頼」を最も重要な価値としています。お客様との信頼関係を築き、<br>
                    透明性のあるコミュニケーションを心がけ、長期的なパートナーシップを育むことを目指しています。<br>
                    常にお客様の期待を上回る成果を提供するために、全力を尽くしてまいります。<br>
                    ITの進化は止まることなく、新たなチャレンジと可能性をもたらします。私たちと共に、未来への扉を開き、新たな価値を創造していきましょう。<br>
                    引き続き、ご支援とご愛顧を賜りますよう、お願い申し上げます。<br>
                    <div class="signature">代表者名</div>
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
              <v-card-title>理念</v-card-title>
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
                  <p><strong>会社名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;：&nbsp;&nbsp;</strong>テキストテキストテキストテキストテキストテキスト</p>
                  <p><strong>設立日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;：&nbsp;&nbsp;</strong>テキストテキストテキストテキストテキストテキスト</p>
                  <p><strong>所在地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;：&nbsp;&nbsp;</strong>テキストテキストテキストテキストテキストテキスト</p>
                  <p><strong>代表者&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;：&nbsp;&nbsp;</strong>テキストテキストテキストテキストテキストテキスト</p>
                  <p><strong>事業内容&nbsp;&nbsp;：&nbsp;&nbsp;</strong>テキストテキストテキストテキストテキストテキスト</p>
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
