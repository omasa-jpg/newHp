<template>
  <div class="q-pa-md">
    <q-table
      style="height: 400px"
      flat bordered
      title="Treats"
      :rows="users"
      :columns="columns"
      row-key="index"
      virtual-scroll
      v-model:pagination="pagination"
      :rows-per-page-options="[0]"
    />
  </div>
</template>

<script>
 import  { supabase } from './supabase.js'
 import dayjs from 'dayjs';
 import { ref } from 'vue'
 
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
        })
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
          console.log(this.users)
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
      async insartUser(){
        try{
          const { data, error } = await supabase.from('user')
          .insert(this.addUser)
          .select();
          if (error) {
            throw error;
          }
          this.users = data;
          console.log(this.users)
        } catch (error) {
          console.error('Error insart users:', error.message);
        }
      },
      // delete user
      async deleteUser(){
        try{
          const { data, error } = await supabase.from('user')
         .delete()
         .eq('id', this.id);
         if (error) {
            throw error;
          }
          this.users = data;
          console.log(this.users)
        } catch (error) {
          console.error('Error delete user:', error.message);
        }      
      }, 
      // uapdate user
      async updateUser(){
        try{
            const { data, error } = await supabase.from('user')
            .update({ name: this.updateName })
            .eq('id', this.select).select()
            if (error) {
              throw error;
            }
            this.users = data;
            console.log(this.users)
           } catch (error) {
          console.error('Error delete user:', error.message);
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
