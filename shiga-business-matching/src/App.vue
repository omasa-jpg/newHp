<template>
<<<<<<< HEAD
  <!-- 業種選択・新規登録(画面上部) -->

  <!-- 業種選択プルダウン -->
  <v-select
    v-model="selectedBusiness"
    :items="businessList"
    label="業種"
    style="height: 100px;
          width: 380px;
          padding: 20px;
          position: relative;
          top: 20px;
          left: 5%;"
  >
  </v-select>
  
  <!-- 新規登録ボタン -->
  <v-btn
    @click="open"
    color="blue"
    style="height: 50px;
          width: 340px;
          border: solid;
          position: relative;
          bottom: 50px;
          left: 70%;
          "
  >
  新規追加
  </v-btn>

<<<<<<< HEAD
  <v-dialog v-model="dialog" max-width="400px">
  <v-card>
    <v-card-title class="text-h5">情報を入力してください</v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field label="名前" id="name" outlined dense></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field label="フリガナ" id="furigana" outlined dense></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-select
              :items="['男性', '女性']"
              label="性別"
              id="gender"
              outlined
              dense></v-select>
          </v-col>
          <v-col cols="12">
            <v-date-picker
              ref="picker"
              locale="jp-ja"
              v-model="date"
              :day-format="date => new Date(date).getDate()"
              :max="new Date().toISOString().substr(0, 10)"
              :picker-date="pickerDate"
              min="1950-01-01"
              @change="save"
            ></v-date-picker>
            </v-col>
          <v-col cols="12">
            <v-text-field label="業種" id="industry" outlined dense></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="submitForm">送信</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>

=======
  <v-dialog v-model="dialog" max-width="300">
    <div 
      style="background:white;">
        <h2>情報を入力してください</h2>
        <div style="margin-bottom: 10px;">
          <div style="border: 1px solid #ccc; padding: 10px;">
          <label for="name">名前:</label>
          <input type="text" id="name">
        </div>
      </div>
      <div>
        <label for="furigana">フリガナ:</label>
        <input type="text" id="furigana">
      </div>
      <div>
        <label for="gender">性別:</label>
        <select id="gender">
          <option value="male">男性</option>
          <option value="female">女性</option>
        </select>
      </div>
      <div>
        <label for="industry">業種:</label>
        <input type="text" id="industry">
      </div>
      <button @click="submitForm">送信</button>
    </div>
  </v-dialog>
>>>>>>> fa3064ebf4b1026c87cdf1c2469f43c2ddb8ddc9
=======
    <v-select
    style="height: 100px;
           width: 380px;
           padding: 20px;
           position: relative;
           top: 20px;
           left: 5%;"
    label="業種"
    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
    ></v-select>
    <v-btn
    color="blue"
    style="height: 50px;
           width: 340px;
           border: solid;
           position: relative;
           bottom: 50px;
           left: 70%;
           "
    >
    新規追加
    </v-btn>

  <v-row class="d-flex flex-row justify-space-between box">
    <v-spacer></v-spacer>
    <v-col cols="12" md="3">
      <v-card
        subtitle="This is a card subtitle"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!"
        title="This is a title"
      ></v-card>
    </v-col>

    <v-spacer></v-spacer>
    <v-col cols="12" md="3">
      <v-card>
        <template v-slot:title>
          This is a title
        </template>
>>>>>>> fd2dc719a6b7e076b79ba7592f51fdd7cc10271d

  <!-- 登録ユーザ情報をカードで表示(画面下部) -->
  <v-row class="d-flex flex-row justify-space-between box">
    <v-spacer></v-spacer>
    <v-card v-for="user in FilteredUsers"
            :key="user.id"
            style="height: 280px;
                   width:  300px;
                   margin: 0px 10px;
                   color:  black;
                   background: lightgray;
                  "
    >
      <!-- 名前 -->
      <v-card-title>
        {{user.name}}
      </v-card-title>

      <!-- ふりがな -->
      <v-card-text>
      {{user.furigana}}
      </v-card-text>

<<<<<<< HEAD
      <!-- 性別 -->
      <v-card-text>
      {{user.gender}}
      </v-card-text>
=======
    <v-spacer></v-spacer>
    <v-col cols="12" md="3">
      <v-card>
        <v-card-item>
          <v-card-title>This is a title</v-card-title>
>>>>>>> fd2dc719a6b7e076b79ba7592f51fdd7cc10271d

      <!-- 生年月日 -->
      <v-card-text>
      {{user.birth}}
      </v-card-text>

<<<<<<< HEAD
      <!-- 業種 -->
      <v-card-text>
      {{user.business}}
      </v-card-text>

      <!-- 編集ボタン -->
      <v-row class="justify-end" style="padding-right: 5%">
        <v-icon @click="openEditModal(user.id)">
          mdi-pencil
        </v-icon>

        <!-- モーダル -->
        <v-dialog v-model="editModal" max-width="400">
          <v-card
            style="height: 280px;
                   width:  300px;
                   margin: 0px 10px;
                   color:  black;
                   background: lightgray;
                  "
          >
          <!-- モーダルの内容(未実装) -->
          </v-card>
        </v-dialog>

        <!-- 削除ボタン -->
        <v-icon @click="openDeleteModal(user.id)">
          mdi-delete
        </v-icon>

        <!-- モーダル -->
        <v-dialog v-model="deleteModal" max-width="400">
          <v-card>
            <!-- モーダルの内容 -->
            <v-text>削除しますか？</v-text>
            <div>   <!-- ボタンを横並びにするためdivを使用 -->
              <v-btn @click="deleteUser">削除</v-btn>
              <v-btn @click="closeDeleteModal">キャンセル</v-btn>
            </div>
          </v-card>
        </v-dialog>

      </v-row>
    </v-card>
    <v-spacer></v-spacer>
  </v-row>

</template>

<script>
export default {
  /*------*/
  /* data */
  /*------*/
  data() {
    return {
      //ここは初期値を定義してあげるだけ（今回は最初は閉じていたいのでfalse)
      dialog: false,

      editModal: false,
      deleteModal: false,
      lookingId: null,

      /* 登録ユーザ情報 */
      users:
      [
        {
          id: 3,
          name: "山田太郎",
          furigana: "ヤマダタロウ",
          gender: "男性",
          birth: "1980/3/3",
          business: "エステサロン経営",
          isDeleted: false,
        },
        {
          id: 4,
          name: "田中花子",
          furigana: "タナカハナコ",
          gender: "女性",
          birth: "1970/5/5",
          business: "生命保険窓口",
          isDeleted: false,
        },
        {
          id: 5,
          name: "鈴木史郎",
          furigana: "スズキシロウ",
          gender: "男性",
          birth: "1960/7/7",
          business: "SNS運用コンサルタント",
          isDeleted: false,
        },
      ],
      selectedBusiness: "全ての業種",
    };
  },
  methods: {
    open: function() {
      // dataのdialogをtrueに書き換えているだけ
      this.dialog = true;
      // 逆にfalseにすれば閉じるを実装できる
    },

    /* ユーザ編集モーダルオープン */
    openEditModal(id)
    {
      this.editModal = true;
      this.lookingId = id;
    },

    /* ユーザ削除モーダルオープン */
    openDeleteModal(id)
    {
      this.deleteModal = true;
      this.lookingId = id;
    },

    /* ユーザ削除処理(論理削除) */
    deleteUser()
    {
      for(let i = 0; i < this.users.length; i++)
      {
        if (this.users[i].id === this.lookingId)
        {
          this.users[i].isDeleted = true;
        }
      }
      this.deleteModal = false;
    },

    /* ユーザ削除モーダルのクローズ */
    closeDeleteModal()
    {
      this.deleteModal = false;
    },
  },

  /*----------*/
  /* computed */
  /*----------*/
  computed:
  {
    /* 登録されている業種一覧を返す */
    businessList()
    {
      /* Array.from(オブジェクトを配列に変換) */
      /* new Set(値を重複を許さずコレクションしたオブジェクト) */
      /* this.users.map(usersの各データを見ていき、業種を取り出す) */
      return ["全ての業種", ...new Set(this.users.map(user => user.business))];
    },
    /* 表示するユーザをフィルタ */
    FilteredUsers()
    {
      if(this.selectedBusiness === "全ての業種")
      {
        /* 論理削除されてないユーザをすべて表示 */
        return this.users.filter(user => !user.isDeleted);
      }
      else
      {
        return this.users.filter(user => user.business === this.selectedBusiness && !user.isDeleted);
      }
    }
  },
};
</script>
<<<<<<< HEAD

=======
>>>>>>> fa3064ebf4b1026c87cdf1c2469f43c2ddb8ddc9
=======
        <v-card-text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!
        </v-card-text>
      </v-card>
    </v-col>
    <v-spacer></v-spacer>
  </v-row>
</template>
>>>>>>> fd2dc719a6b7e076b79ba7592f51fdd7cc10271d
