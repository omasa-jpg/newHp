<template>
  <v-sheet width="300" class="mx-auto">

    <!-- フォームのヘッダー -->
    <v-card class="mx-auto" max-width="448">
    <v-layout>
      <v-app-bar color="primary" density="compact">
        <v-app-bar-title>請求書入力フォーム</v-app-bar-title>
      </v-app-bar>
    </v-layout>
  </v-card>

    <v-form ref="form">
      <!-- 空白用 -->
      <h2 class="pt-6"></h2>
      <h2 class="pt-6"></h2>
      <h2 class="pt-6"></h2>


        <!-- フォーム項目 -->
        <h2 class="pt-6">定期追加or都度請求</h2>
        
            <v-radio-group inline >
              <v-radio label="定期追加" value="定期追加" @change="updateSelectType1('定期追加')"></v-radio>
              <v-radio label="都度請求" value="都度請求" @change="updateSelectType1('都度請求')"></v-radio>
            </v-radio-group>

        <h2 class="pt-6">法人or個人</h2>
        
            <v-radio-group inline >
              <v-radio label="法人" value="御中" @change="updateSelectType2('御中')"></v-radio>
              <v-radio label="個人" value="様" @change="updateSelectType2('様')"></v-radio>
            </v-radio-group>
        

            <h2 class="pt-6">請求日</h2>
              <v-text-field
                v-model="date"
                type="date"
                label="請求日"
                required
              ></v-text-field>

              <!---取引先のその他の入力は、法人or個人の箇所を参考に関数を入れる予定--->
              <h2 class="pt-6">取引先</h2>
              <v-select
                v-model="select"
                :items="items"
                :rules="[v => !!v || 'Item is required']"
                label="取引先"
                required
              ></v-select>
              
              <!-- その他の取引先テキストフィールド -->
              <v-text-field v-if="select === 'その他'" v-model="otherText" label="その他の取引先"></v-text-field>
              <v-text-field v-if="select === 'その他'" v-model ="postalCode" label="郵便番号"></v-text-field>
              <v-text-field v-if="select === 'その他'" v-model="address" label="市区町村・番地"></v-text-field>
              <v-text-field v-if="select === 'その他'" v-model="building" label="建物名・部屋番号"></v-text-field>
              <v-text-field v-if="select === 'その他'" v-model="department" label="取引先部署"></v-text-field>
              <v-text-field v-if="select === 'その他'" v-model="contactPerson" label="取引先担当者名"></v-text-field>
            
              <!-- 単位、数量、金額は修正が必要。数字しか入力できないなど-->
              <h2 class="pt-6">件名</h2>
              <v-text-field
                v-model="subject"
                label="件名"
                class="pt-6"
                required
              ></v-text-field>

              <h2 class="pt-6">お支払期限</h2>
            <v-text-field
                v-model="deadline"
                type="date"
                label="お支払期限"
                required
              ></v-text-field>

              <h2 class="pt-6">請求内容</h2>
              <v-text-field
                v-model="billing"
                label="請求内容"
                class="pt-6"
                required
              ></v-text-field>

              <h2 class="pt-6">数量</h2>
              <v-text-field
                v-model="quantity"
                label="数量"
                class="pt-6"
                required
              ></v-text-field>

              <h2 class="pt-6">単位</h2>
              <v-text-field
                v-model="unit"
                label="単位"
                class="pt-6"
                required
              ></v-text-field>

              <h2 class="pt-6">単価</h2>
              <v-text-field
                v-model="price"
                label="単価"
                class="pt-6"
                required
              ></v-text-field>

              <h2 class="pt-6">金額</h2>
              <v-text-field
                v-model="money"
                label="金額"
                class="pt-6"
                required
              ></v-text-field>

              <h2 class="pt-6">備考</h2>
              <v-textarea 
              v-model="memo" 
              label="備考" 
              outlined
              ></v-textarea>
              
      <div class="d-flex flex-column">
        <v-btn
          color="primary"
          class="mt-4"
          block
          @click="submitForm"
        >
          送信
        </v-btn>
      </div>
    </v-form>
  </v-sheet>
</template>

<script>
export default {
  data:() => ({
    subject: '',
    date: '',
    memo: '',
    billing: '',
    quantity: '',
    unit: '',
    price: '',
    money: '',
    select: '',
    selectType1: '',
    selectType2: '',
    items: [
          "Valuup株式会社",
          "十人十家合同会社",
          "ピーシーアシスト株式会社",
          "株式会社vicus",
          "増崎真奈美",
          "片山慎也",
          "駒沢悟",
          "その他",
    ],
    deadline: '',
    otherText: '',
    postalCode: '',
    address: '',
    building: '',
    department: '',
    contactPerson: ''
  }),
  mounted(){
    /* eslint-disable */
    const liffId =  '1657533119-ZA9O9lRl';
    console.log(liffId);
    if (!liffId) {
      console.error("LIFF ID is not defined in environment variables.");
      return;
    }
    this.initializeLiff(liffId);
    /* eslint-disable */
  },
  methods: {
    initializeLiff(liffId) {
      const liffSDKUrl = 'https://static.line-scdn.net/liff/edge/2/sdk.js';
      console.log('liffSDKUrl',liffSDKUrl);
      const script = document.createElement('script');
      script.src = liffSDKUrl;
      script.onload = () => {
        liff.init({ liffId: liffId })
          .then(() => {

            console.log('LIFF Initialization succeeded');
            // ここで initializeApp() などの処理を行う
            this.initializeApp();
          })
          .catch((err) => {
            console.log('LIFF Initialization failed ', err);
          });
      };
      document.body.appendChild(script);
    },
      
    submitForm() {
      const selectedValue = this.select === 'その他' ? this.otherText : this.select;
      const msg = `createInvoice\n法人or個人: ${this.selectType2}\n請求日: ${this.date}\n取引先: ${selectedValue}\n件名: ${this.subject}\nお支払期限: ${this.deadline}\n請求内容: ${this.billing}\n数量: ${this.quantity}\n単位: ${this.unit}\n単価: ${this.price}\n金額: ${this.money}\nメモ: ${this.memo}\n郵便番号: ${this.postalCode}\n市区町村・番地: ${this.address}\n建物名・部屋番号: ${this.building}\n取引先部署: ${this.department}\n取引先担当者名: ${this.contactPerson}\n定期追加or都度請求: ${this.selectType1}`;;      
      this.sendText(msg);
      console.log(msg)
    },

    sendText(text) {
      
      liff.sendMessages([
        {
          type: 'text',
          text: text
        }
      ])
      .then(() => {
        console.log('LIFF Initialization succeeded');
        
            // ここで initializeApp() などの処理を行う
        liff.closeWindow();
      })
      .catch((error) => {
        window.alert('Failed to send message ' + error);
      });
    },
      
    updateSelectType1(value) {
      this.selectType1 = value;
    },

    updateSelectType2(value) {
      this.selectType2 = value;
    },
   },
};
</script>