import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/style/style.scss';

import 'leaflet/dist/leaflet.css';
createApp(App)
  .use(router)
  .mount('#app');
