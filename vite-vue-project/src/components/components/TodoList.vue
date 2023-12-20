<script>
import MyButton from '../basics/MyButton.vue'

export default {
  components: {
    MyButton,
  },
  props: {
    todos: Array,
  },
  methods: {
    openEditMode(todo) {
      this.$router.push('/edit')
    },
  },
}
</script>

<template>
  <ul>
    <li v-for="todo in todos">
      <input type="checkbox" v-model="todo.isDone" /><span
        :class="{ 'todo-done': todo.isDone }"
        >{{ todo.text }}</span
      >
      <MyButton @click="openEditMode(todo)">編集</MyButton>
    </li>
  </ul>
</template>
