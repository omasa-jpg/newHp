<template>
  <v-app>
    <v-main>
      <router-view></router-view> <!-- ここにルートコンポーネントが表示される -->
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
.v-btn {
  background-color: transparent !important;
  border: none !important;
  box-shadow: none !important;
}

.v-btn:active,
.v-btn:focus,
.v-btn:hover {
  background-color: transparent !important;
  box-shadow: none !important;
}

.v-btn:visited {
  background-color: transparent !important;
  box-shadow: none !important;
}
</style>
