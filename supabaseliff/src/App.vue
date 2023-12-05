<template>
<v-sheet width="300" class="mx-auto">
    <v-form ref="form">
      <h2 class="pt-6">経費入力</h2>

      <v-text-field
        v-model="addUser.name"
        label="name"
        class="pt-6"
        required
      ></v-text-field>

      <div class="d-flex flex-column">
        <v-btn
          color="primary"
          class="mt-4"
          block
          @click="submitForm"
        >
          保存
        </v-btn>
      </div>
    </v-form>
  </v-sheet>


</template>

<script>
import  { supabase } from './supabase.js'

export default {
  data: () => ({
    addUser:{
          name:''
        },
      }),

  methods: {
    async submitForm() {
      // LIFFの初期化
      await liff.init({ liffId: '2002024967-EaeOOX4b' });

      const { valid } = await this.$refs.form.validate();

      if (valid) {
        // バリデーションが通った場合の処理

        // LIFFのメッセージAPIを使用して入力欄の値をLINEのチャット上に送信
        try {
          const { data, error } = await supabase.from('expenses')
          .insert(this.addUser)
          .select();

          // 以下はLIFFを閉じるためのコード
          if (liff.isInClient()) {
            liff.closeWindow();
          }

          console.log('Message sent successfully');
        } catch (error) {
          console.error('Error sending message', error);
        }
      }
    },
  },

  mounted() {
    // コンポーネントがマウントされた時にLIFFのSDKをロード
    const script = document.createElement('script');
    script.src = 'https://static.line-scdn.net/liff/edge/2.1/sdk.js';
    document.head.appendChild(script);
  },
};
</script>
