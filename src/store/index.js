// store/index.js

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count += 1;
      console.log('increment state.count :>> ', state.count);
    },
    decrement(state) {
      state.count -= 1;
      console.log('decrement state.count :>> ', state.count);
    }
  },
  actions: {},
  modules: {}
});
