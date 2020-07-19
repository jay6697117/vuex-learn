// store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';
import types from '../store/types';

Vue.use(Vuex);

export default new Vuex.Store({
  //状态类似data
  state: {
    initAge: 0,
    dateNow: new Date(),
    student: {
      name: '小明',
      sex: '女',
      age: 0,
      title:''
    }
  },
  //类似计算属性
  getters: {
    timeNow: state => formmatStr => moment(state.dateNow).format(formmatStr),
    timeLength: (state, getters) => formmatStr => {
      return getters.timeNow(formmatStr).length;
    },
    recordAge: state => state.student.age
  },
  //类似methods(提交修改状态,必须是同步函数, 通过store.commit触发)
  mutations: {
    [types.INCREMENT]: (state, payload) => {
      if (payload.title) {
        Vue.set(state.student, 'title', payload.title);
        return;
      }
      if (Object.prototype.toString.call(payload) === '[object Object]') {
        // async/await
        if (payload.isAsyn) {
          if (payload.retCode === 'success') {
            Vue.set(state.student, 'title', '');
            Vue.set(state.student, 'age', state.student.age + payload.num);
          }
        } else {
          Vue.set(state.student, 'title', '');
          Vue.set(state.student, 'age', state.student.age + payload.num);
        }
      }

      if (Object.prototype.toString.call(payload) === '[object Promise]') {
        //promise
        payload
          .then(result => {
            if (result.retCode === 'success') {
              Vue.set(state.student, 'title', '');
              Vue.set(state.student, 'age', state.student.age + result.num);
            }
          })
          .catch(error => {
            console.log('then/catch error :>> ', error);
            Vue.set(state.student, 'title', '请求失败');
          });
      }
    },
    [types.DECREMENT]: (state, payload) => {
      if (payload.title) {
        Vue.set(state.student, 'title', payload.title);
        return;
      }
      Vue.set(state.student, 'title', '');
      Vue.set(state.student, 'age', state.student.age - payload.num);
    },
    [types.RESETAGE]: (state, payload) => {
      if (payload.title) {
        Vue.set(state.student, 'title', payload.title);
        return;
      }
      Vue.set(state.student, 'title', '');
      Vue.set(state.student, 'age', payload.age);
    }
  },
  // 类似methods(不直接变更状态,可以包含异步操作,通过store.dispatch触发)
  actions: {
    [types.INCREMENT_ASYNC]: async ({ commit, dispatch, state }, payload) => {
      commit(types.INCREMENT, { title: '请求中...' });

      //promise
      // commit(types.INCREMENT, fnPromise(payload));

      // async|await
      try {
        commit(types.INCREMENT, await fnPromise(payload));
      } catch (error) {
        console.log('try/catch error :>> ', error);
        commit(types.INCREMENT, { title: '请求失败' });
      }
    },
    [types.DECREMENT_ASYNC]: ({ commit, state }, payload) => {
      commit(types.DECREMENT, { title: '请求中...' });
      setTimeout(() => {
        commit(types.DECREMENT, payload);
      }, 2000);
    },
    [types.RESETAGE_ASYNC]: ({ commit, state }, payload) => {
      commit(types.RESETAGE, { title: '请求中...' });
      setTimeout(() => {
        commit(types.RESETAGE, payload);
      }, 2000);
    }
  },
  modules: {}
});

function fnPromise(payload) {
  const random = Math.floor(Math.random() * 10 + 1);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (random > 5) {
        return resolve({ ...payload, retCode: 'success', random });
      } else {
        return reject({ ...payload, retCode: 'failure', random });
      }
    }, 2000);
  });
}
