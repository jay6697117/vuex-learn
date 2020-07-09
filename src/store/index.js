// store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    dateNow: new Date()
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
  getters: {
    timeNow: state => formmatStr => moment(state.dateNow).format(formmatStr),
    timeLength: (state, getters) => formmatStr => {
      return getters.timeNow(formmatStr).length;
    }
  },
  actions: {},
  modules: {}
});
