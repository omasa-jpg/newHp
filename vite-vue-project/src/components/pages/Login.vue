<template>
    
      <form @submit="login">
        <input v-model="email" label="Email">
        <br>
        <input v-model="password" label="Password" type="password">
        <br>
        <input type="submit" label="Login" />
      </form>
    
  </template>
  
  <script>
  import { supabase } from '../../supabase.js';
  export default {
    data() {
      return {
        email: '',
        password: '',
        user:null
      };
    },
    computed: {
      // ... 既存のcomputedプロパティ ...

      isAuthenticated() {
        return this.user !== null;
      },
    },
    methods: {
      async login() {
        try {
            
          // Supabaseログイン処理
          const { user, error } = await supabase.auth.signIn({
            email: this.email,
            password: this.password,
          });
  
          if (error) {
            console.error(error);
            // エラー処理を追加する場合はここに追加
          } else {
            console.log('ログイン成功', user);
            // ログイン成功時の処理をここに追加
          }
        } catch (error) {
          console.error(error);
          // 予期しないエラーの処理をここに追加
        }
      },
      async signIn() {
        try {
          const { user, error } = await supabase.auth.signIn({
            email,
            password,
          });

          if (error) {
            throw error;
          }

          this.user = user;
          console.log('User signed in:', user);
        } catch (error) {
          console.error('Error signing in:', error.message);
        }
      },

      async signOut() {
        try {
          const { error } = await supabase.auth.signOut();

          if (error) {
            throw error;
          }

          this.user = null;
          console.log('User signed out');
        } catch (error) {
          console.error('Error signing out:', error.message);
        }
      },
    },
    mounted() {
      // ... 既存のmountedフック ...

      // ユーザーが既に認証されているかどうかを確認
      const session = supabase.auth.session();
      this.user = session?.user;

    },
  };
  </script>
  