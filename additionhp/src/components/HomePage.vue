<template>
  <v-app>
    <v-app-bar class="custom-app-bar" color="white">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
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
        @click:close="drawerClose"
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
        <v-row class="pb-sm-9 pd-0" style="margin: 0;">
                <v-col cols="12" class="text-center" style="padding: 0; margin: 0;">
                  <v-img style="
                  padding-left: 0%;
                  margin-top: 0;
                  display: block;" 
                  src="@/assets/fv.png"
                ></v-img>
                </v-col>
        </v-row>

        <v-row  class="pt-sm-16 pt-0 justify-center text-sm-left text-center" style="margin-top: 0;">
          <v-col cols="12" style="margin: 0; padding: 0;" >
            <v-card class="pa-10;" style="box-shadow: none;">
              <v-card-title
              class="text-center"
              >会社概要
              </v-card-title>
              <v-card-text>
                <v-row>
                  <v-col cols="12" sm="5" md="5" lg="5" xl="5">
                    <v-img 
                    src="@/assets/logo.png"
                    style="width: 100%; height: auto;"
                    ></v-img>
                  </v-col>
                  <v-col cols="12" sm="7" md="7" lg="7" xl="7">
                    <v-card style="box-shadow: none;" >
                      <v-card-text style="font-size: 1.5rem; font-weight: bold;" class="text-sm-h3">
                        ITをもっと身近に、<br>
                        人々の生活にもっとITを。<br>
                      </v-card-text>
                      <v-card-text>
                        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br>
                        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br>
                        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br>
                        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br>
                      </v-card-text>
                    </v-card>
                  </v-col>
                   <v-col cols="12" class="d-flex justify-end" xs="0">
                    <v-btn v-if="!$vuetify.breakpoint.xs" style="background-color: orange!important;"
                    text to="/profile">
                      ボタン
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="padding-setting" style="margin-right: 0; padding-left: 100px; padding-right: 100px; padding-top: 100px;" >
            <v-col cols="12" style="margin: 0% auto;">
              <v-card class="pa-10;" style="margin-top: 0; box-shadow: none;">
                <v-card-title class="text-center">サービス</v-card-title>
                  <v-card-text>
                    <v-row>
                        <v-col class="position-change1 padding-botom0" cols="12" md="6" style="padding-bottom: 40px; padding-top: 40px;">
                          <v-img 
                          src="@/assets/IT_m.jpg"
                          style="width: 100%; height: 100%; "
                          ></v-img>
                        </v-col>
                      <v-col class="position-change2" cols="12" md="6" style="display: flex; flex-direction: column; justify-content: flex-end; margin-bottom: 35px;">
                          <v-card style="box-shadow: none;">
                            <v-card-text class="text-sm-left text-center margin-top0 text-rem" style="font-size: 2rem; font-weight: bold; text-align: left; margin-top: 40px; text-decoration: underline;">
                              IT Planners<br>
                            </v-card-text>
                            <v-card-text style="text-align: left;">
                              DX推進や業務効率化などビジネスにおける課題解決に向けた 技術的知見、<br>
                              開発リソースを月3万円〜で提供します。
                            </v-card-text>
                          </v-card>
                          <div class="text-aligncenter" style="margin-top: auto; text-align: right; width: 100%;">
                            <v-btn to="/pr" 
                            style="background-color: #F1684D!important; 
                            font-size: 1rem; 
                            font-weight: bold; 
                            color: black; 
                            padding: 0%;"
                            >詳しくはこちらから＞＞</v-btn>
                          </div>
                      </v-col>
                    
                    <v-col class="position-change4 padding-top12px" cols="12" md="6" style=" padding-top: 40px; padding-bottom: 40px;">
                      <v-card style="box-shadow: none; text-align: left;">
                        <v-card-text class="text-sm-left text-center margin-top0 text-rem" style="font-size: 2rem; font-weight: bold; margin-top: 40px">
                          プログラミング教育<br>
                        </v-card-text>
                        <v-card-text style="text-align: left;">
                          一定のレベルまでプログラムレベルを引き上げながら、報酬を受け取れる<br>
                          開発の仕事に参加し、実践的に業務がこなしながら学べるスクールの運営
                        </v-card-text>
                      </v-card>
                    </v-col>
                    <v-col class="position-change3 padding-botom0" cols="12" md="6" style=" padding-top: 40px; padding-bottom: 40px; padding-left: 30px;">
                      <v-img 
                      src="@/assets/programing_m.jpg"
                      style="width: 100%; height: 100%;"
                      ></v-img>
                    </v-col>

                    <v-col class="position-change5 padding-botom0" cols="12" md="6" style="padding-top: 40px; padding-bottom: 40px;">
                      <v-img 
                      src="@/assets/system_m.jpg"
                      style="width: 100%; height: 100%; "
                      ></v-img>
                    </v-col>
                    <v-col class="position-change6 padding-top12px" cols="12" md="6" style=" padding-top: 40px; padding-bottom: 40px;">
                      <v-card style="box-shadow: none;">
                        <v-card-text class="text-sm-left text-center margin-top0 text-rem" style="font-size: 2rem; font-weight: bold; text-align: left; margin-top: 40px">
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
      ><v-icon left>mdi-email</v-icon>
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
data(){
  return{
  drawer: false,
  name: 'HomePage'
}
},
watch:{
  group(){
    this.drawer = false
},
},
methods:{
  //メソッドを記述
  drawerClose(){
    this.drawer = false
}
}

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
  color: black !important; /* ボタンのカラーを黒に設定 */
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
  font-weight: bold !important;
  z-index: 1000;	
  align-items: center;	
  font-size: 1.25rem;
  border-radius: 10px;
}	

.floating-btn v-icon {	
margin-right: 10px;
/*font-size: 1.5rem;  アイコンのサイズを大きくする */
}

@media(max-width: 600px) {
  .padding-setting {
    padding: 0 !important;
  }
  .position-change1{
    order: 1 !important;
  }
  .position-change2{
    order: 2 !important;
  }
  .position-change3{
    order: 3 !important;
  }
  .position-change4{
    order: 4 !important;
  }
  .position-change5{
    order: 5 !important;
  }
  .position-change6{
    order: 6 !important;
  }
  .margin-top0{
    margin-top: 0 !important;
  }
  .padding-botom0{
    padding-bottom: 0 !important;
  }
  .text-aligncenter{
    text-align: center !important;
  }
  .padding-top12px{
    padding-top: 12px !important;
  }
  .text-rem{
    font-size: 1.5rem !important;
  }
}
</style>
