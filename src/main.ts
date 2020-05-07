import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';
import 'es6-promise/auto';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App), // eslint-disable-line @typescript-eslint/explicit-function-return-type
}).$mount('#app');
