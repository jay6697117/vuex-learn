<template>
  <div class="demo">
    <div>初始化年龄: {{ initAge }}</div>
    <div>现在时间: {{ dateNow }}</div>
    <div>学生信息: {{ studentInfo }}</div>
    <div>msgComputed: {{ msgComputed }}</div>
    <div>
      <button @click="add({ num: 10, isAsyn: false })" style="margin-right:20px;">同步+</button>
      <button @click="addAsync({ num: 10, isAsyn: true })" style="margin-right:20px;">异步+</button>
      <button @click="init({ age: initAge, isAsyn: false })">同步重置</button>
    </div>
    <div class="recordAge">记录年龄: {{ recordAge }}</div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import types from '../store/types';

export default {
  name: 'Demo',
  data() {
    return {
      msg: 'hello'
    };
  },
  computed: {
    //state对象形式(方便取别名)
    ...mapState({
      initAge: 'initAge',
      dateNow: 'dateNow',
      studentInfo: 'student'
    }),

    //state字符串数组形式
    // ...mapState(['initAge', 'dateNow', 'student']),

    //getters对象形式(方便取别名)
    ...mapGetters({
      timeNow: 'timeNow',
      timeLength: 'timeLength',
      recordAge: 'recordAge'
    }),

    //getters字符串数组形式
    // ...mapGetters(['timeNow', 'timeLength', 'recordAge']),

    msgComputed() {
      return `${this.msg}, world, ${this.timeNow('YYYY-MM-DD dddd')}, ${this.timeLength('YYYY-MM-DD dddd')}`;
    }
  },
  methods: {
    // 对象形式(方便取别名)
    ...mapMutations({
      add: types.INCREMENT,
      sub: types.DECREMENT,
      init: types.RESETAGE
    }),
    //字符串数组形式
    // ...mapMutations([types.INCREMENT, types.DECREMENT, types.RESETAGE]),

    // 对象形式(方便取别名)
    ...mapActions({
      addAsync: types.INCREMENT_ASYNC,
      subAsync: types.DECREMENT_ASYNC,
      initAsync: types.RESETAGE_ASYNC
    }),
    //字符串数组形式
    // ...mapActions([types.INCREMENT_ASYNC, types.DECREMENT_ASYNC, types.RESETAGE_ASYNC])
  }
};
</script>

<style scoped>
.demo {
  font-size: 18px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

.demo > div {
  width: 60vw;
  margin: 0 auto;
  margin-bottom: 10px;
  background-color: #ccc;
}

.recordAge {
  color: green;
  font-size: 20px;
}
</style>
