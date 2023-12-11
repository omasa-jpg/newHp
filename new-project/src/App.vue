<template>
  <div class="q-pa-md q-gutter-sm">
    <!-- 新規作成フォーム -->
    <q-dialog v-model="showForm">
      <q-card>
        <q-card-section>
          <!-- フォーム内の入力フィールド -->
          <q-input v-model="addUser.name" label="Name" />
        </q-card-section>
        <q-card-section>
          <!-- 保存ボタン -->
          <q-btn color="primary" label="保存" @click="insartUser" />
        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- 新規作成ボタン -->
    <q-btn color="white" text-color="black" label="新規作成" @click="showForm = true" />
    <!-- 更新ボタン -->
    <q-btn color="primary" label="更新" @click="showUpdateForm" :disable="selected.length !== 1" />
    <!-- 削除ボタン -->
    <q-btn color="black" @click="deleteUser"  label="削除" />

  </div>

  <!-- 更新用のフォーム -->
    <q-dialog v-model="showUpdateFormFlag">
    <q-card>
      <q-card-section>
        <!-- フォーム内の入力フィールド -->
        <q-input v-model="selectedUser.name" label="Name" />
      </q-card-section>
      <q-card-section>
        <!-- 保存ボタン -->
        <q-btn color="primary" label="上書き" @click="updateSelectedUser" />
        <q-btn color="red" label="閉じる" @click="closeDialog" />
      </q-card-section>
    </q-card>
    </q-dialog>


  <div class="q-pa-md">
    <q-table
      style="height: 400px"
      flat bordered
      title="テーブル情報"
      :rows="formattedUsers"
      :columns="columns"
      row-key="id"
      virtual-scroll
      :selected-rows-label="getSelectedString"
      selection="multiple"
      v-model:selected="selected"
      :rows-per-page-options="[0]"
      />
  </div>
</template>

<script>
 import  { supabase } from './supabase.js'
 import dayjs from 'dayjs'
 import { ref,} from 'vue';
 
  export default {

    data() {
      return {
        search: '',
        columns: [
          { field: 'id', sortable: true, label: 'ID' },
          { field: 'created_at', label: 'Created At' },
          { field: 'name', label: 'Name' },
        ],
        users: [],
        addUser:{
          name:''
        },
        id:'',
        select:null,
        items:[],
        pagination: ref({
          rowsPerPage: 5
        }),
        selected: [], 
        showForm: false, // フォームの表示状態
        showUpdateFormFlag: false, // 更新フォームの表示状態
        selectedRows: [], // チェックボックスの選択状態を管理する配列
        selectedUser: {
          name: '',
        },
      };
    },
    
    computed: {
      // Format the users array with formatted created_at dates
      formattedUsers() {
        return this.users.map(user => ({
          ...user,
          created_at: dayjs(user.created_at).format('YYYY-MM-DD'),
        }));
      },
        getSelectedString() {
        return this.selectedRows.length === 0 ? '' : `${this.selectedRows.length} record${this.selectedRows.length > 1 ? 's' : ''} selected of ${this.users.length}`;
      },
    },

    methods: {
      // Fetch users from Supabase
      async fetchUsers() {
        try {
          const { data, error } = await supabase.from('user').select('*');
          if (error) {
            throw error;
          }
          this.users = data;
        } catch (error) {
          console.error('Error fetching users:', error.message);
        }
      },
      // Fetch users id from Supabase
      async fetchUserIds() {
        try {
          const { data, error } = await supabase.from('user').select('id');
          if (error) {
            throw error;
            }
          this.items = data.map((user) => String(user.id));
          this.select = this.items[0]; // Set the default selected value
          console.log(this.items);
          } catch (error) {
          console.error('Error fetching user IDs:', error.message);
        }
      },

      // insart user
      async insartUser() {
        try {
          // 新しいユーザーを挿入
          const { data, error } = await supabase.from('user')
            .insert([this.addUser])
            .select();

          if (error) {
            throw error;
          }

          // フォームを非表示にし、ユーザーデータをリフレッシュ
          this.showForm = false;
          this.fetchUsers();
        } catch (error) {
          console.error('Error inserting user:', error.message);
        }
      },
      // delete user
      async deleteUser(){
        alert('削除しますか？')
        // console.log('this.selectedUser.id',this.selected)
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
            this.fetchUsers();
          }
          
        } catch (error) {
          console.error('Error delete user:', error.message);
        }      
      }, 
      // Show the update form when the "更新" button is clicked
      showUpdateForm() {
          console.log('this.selected.length',this.selected.length)
        if (this.selected.length === 1) {
          // Copy the selected user data to the selectedUser variable
          this.selectedUser = { ...this.selected[0] }; 
          this.showUpdateFormFlag = true; 
        } 
      }, 
      closeDialog(){
        console.log(this.showUpdateFormFlag)
        this.showUpdateFormFlag = false;
      },
      // Update the name of the selected user
      async updateSelectedUser() {
          try {
            // Update the selected user's name
            const { data, error } = await supabase
              .from('user')
              .update({ name: this.selectedUser.name })
              .eq('id', this.selectedUser.id)
              .select();

            if (error) {
              throw error;
            }

            // Close the update form and refresh the user data
            this.showUpdateFormFlag = false;
            this.fetchUsers();
          } catch (error) {
          console.error('Error updating user:', error.message);
        }
      },
    },
    mounted() {
      // Fetch users & ids when the component is mounted
      this.fetchUsers();
      this.fetchUserIds();
    },
  };
</script>