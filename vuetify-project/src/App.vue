<template>
  <div>
    <v-btn color="red" class="mb-4 mt-4" @click="deleteUser">削除</v-btn>

    <!-- データテーブル -->
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="users"
      item-key="id"
      show-select
    >
      <template v-slot:item.action="{ item }">
        <v-icon @click="editUser(item)">mdi-pencil</v-icon>
      </template>
    </v-data-table>

    <!-- 編集用のフォーム -->
    <v-dialog v-model="editDialog" max-width="600px">
      <v-card>
        <v-card-title>ユーザー編集</v-card-title>
        <v-card-text>
          <v-text-field v-model="editedUser.name" label="新しい名前"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="closeEditDialog">キャンセル</v-btn>
          <v-btn color="primary" @click="updateUser">更新</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
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
        { text: '編集', value: 'action', sortable: false },
      ],
      users: [],
      editDialog: false,
      editedUser: {
        id: null,
        name: '',
      },
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

    // ユーザー名の更新
    editUser(user) {
      this.editedUser.id = user.id;
      this.editedUser.name = user.name;
      this.editDialog = true;
    },

    async updateUser() {
      try {
        const { data, error } = await supabase
          .from('user')
          .update({ name: this.editedUser.name })
          .eq('id', this.editedUser.id);

        if (error) {
          throw error;
        }

        console.log('Updated user with ID:', this.editedUser.id);
        this.fetchUsers();
        this.closeEditDialog();
      } catch (error) {
        console.error('Error updating user:', error.message);
      }
    },

    // 選択されたユーザーを削除
    async deleteUser(){
        alert('削除しますか？')
        try{
          for(let i=0;i < this.selected.length;i++){
            const { data, error } = await supabase.from('user')
            .delete()
            .eq('id', this.selected[i]);
            if (error) {
              throw error;
            }
            this.users = data;
            console.log(this.users)
            this.fetchUsers();
          }
          
        } catch (error) {
          console.error('Error delete user:', error.message);
        }      
    },

    closeEditDialog() {
      this.editedUser.id = null;
      this.editedUser.name = '';
      this.editDialog = false;
    },
  },

  

  mounted() {
    this.fetchUsers();
  },
};
</script>
