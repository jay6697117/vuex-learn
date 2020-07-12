import Vue from 'vue';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

console.log('main store :>> ', store);
console.log('main store.state :>> ', store.state);
console.log('main store.getters :>> ', store.getters);
console.log('main store.commit :>> ', store.commit);
console.log('main store.dispatch :>> ', store.dispatch);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
