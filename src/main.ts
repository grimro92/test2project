import { createApp } from 'vue'
import { createPinia } from 'pinia';
// import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { createI18n } from 'vue-i18n';
// import 'normalize.css/normalize.css';
// import router from './router/routers';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const i18n = createI18n({
  legacy: false, // Composition APIを使うため
  locale: 'en',  // デフォルトの言語
  messages: {
    en: {
      message: {
        welcome: 'Welcome to My Retro Diner',
        favoriteThings: 'My Favorite Things',
        contact: 'Contact',
        name: 'Your Name',
        // 他の英語のメッセージをここに追加
      },
    },
    ja: {
      message: {
        welcome: '私のレトロダイナーへようこそ',
        favoriteThings: '私のお気に入り',
        contact: '連絡先',
        name: 'あなたの名前',
        // 他の日本語のメッセージをここに追加
      },
    },
  },
});

const app = createApp(App);
const pinia = createPinia();

// アイコンコンポーネントをグローバル登録
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

const vuetify = createVuetify({
  components,
  directives,
})

app.use(ElementPlus);
app.use(i18n);
// app.use(router);
app.use(pinia);
app.use(vuetify);

app.mount('#app');
