// store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';
import { INCREMENT, DECREMENT, RESETAGE } from './mutation-types';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    initAge: 0,
    dateNow: new Date(),
    student: {
      name: '小明',
      sex: '女',
      age: 0
    }
  },
  mutations: {
    [INCREMENT](state, payload) {
      state.student.age += payload.num;
      console.log('increment state.student.age :>> ', state.student.age);
    },
    [DECREMENT](state, payload) {
      state.student.age -= payload.num;
      console.log('decrement state.student.age :>> ', state.student.age);
    },
    [RESETAGE](state, payload) {
      Vue.set(state.student, 'age', payload.age);
      // state.student = { ...state.student, age: payload.age };
      console.log('state.initAge :>> ', state.initAge);
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
