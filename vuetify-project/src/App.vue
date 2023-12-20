<template>
  <v-btn color="blue" class="mr-2 mb-4 mt-4">更新</v-btn>
  <v-btn color="red" class="mb-4 mt-4" @click="deleteUser">削除</v-btn>
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="users"
    item-key="id"
    show-select
  ></v-data-table>
</template>

<script>
import { supabase } from './supabase.js';
import dayjs from 'dayjs';
import { ref } from 'vue';

export default {
  data() {
    return {
      selected: [],
      headers: [
        { title: 'ID', value: 'id' },
        { title: '名前', value: 'name' },
      ],
      users: [],
    };
  },

  methods: {
    // Supabaseからユーザーを取得
    async fetchUsers() {
      try {
        const { data, error } = await supabase.from('user').select('*');
        if (error) {
          throw error;
        }
        console.log('data', data);
        this.users = data;
      } catch (error) {
        console.error('ユーザーの取得エラー:', error.message);
      }
    },
    // 選択されたアイテムを削除
    async deleteUser(){
        alert('削除しますか？')
        try{
          for(let i=0;i < this.selected.length;i++){
            const { data, error } = await supabase.from('user')
            .delete()
            .eq('id', this.selected[i].id);
            if (error) {
              throw error;
            }
            this.users = data;
            console.log(this.users)
            console.log(this.selected[i].id)
            this.fetchUsers();
          }
          
        } catch (error) {
          console.error('Error delete user:', error.message);
        }      
      },
  },

  mounted() {
    this.fetchUsers();
  },
};
</script>
