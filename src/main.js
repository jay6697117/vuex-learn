import Vue from 'vue';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

console.log('main store :>> ', store);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
