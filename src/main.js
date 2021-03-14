import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/style/style.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUserSecret);

// createApp.component('font-awesome-icon', FontAwesomeIcon);

// App.config.productionTip = false;

createApp(App)
  .use(router)
  .mount('#app');
