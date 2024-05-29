import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'; // Vue Routerをインポート

loadFonts()

createApp(App)
  .use(vuetify)
  .use(router) // Routerを使用するように設定
  .mount('#app')
