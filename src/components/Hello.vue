<template>
  <div class="hello">
    <h1>ageProp:{{ ageProp }}</h1>
    <h1>timeHello: {{ timeHello }}</h1>
    <h1 class="studentInfo">
      <div class="studentInfoTitle">学生信息:</div>
      <span>姓名: {{ studentInfo.name }};</span>
      <span>性别: {{ studentInfo.sex }};</span>
      <span v-show="studentInfo.title">年龄: {{ studentInfo.title }}</span>
      <span v-show="!studentInfo.title">年龄: {{ studentInfo.age }}</span>
    </h1>
    <div style="background: #ccc;margin-bottom:10px;padding:5px 0;">
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="resetAge">重置学生年龄</button>
    </div>
    <div style="background: #ccc;margin-bottom:10px;padding:5px 0;">
      <button @click="incrementAsyn">异步 +</button>
      <button @click="decrementAsyn">异步 -</button>
      <button @click="resetAgeAsyn">异步 重置学生年龄</button>
    </div>
    <div style="background: #ccc;margin-bottom:10px;padding:5px 0;">
      <div class="recordAge">记录年龄: {{ recordAge }}</div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import types from '../store/mutation-types';

export default {
  name: 'Hello',
  props: {
    ageProp: { type: [Number, String], default: 0 }
  },
  data() {
    return {};
  },
  methods: {
    increment() {
      this.$store.commit(types.INCREMENT, { num: 10, isAsyn: false });
    },
    incrementAsyn() {
      this.$store.dispatch(types.INCREMENT_ASYN, { num: 10, isAsyn: true });
    },
    decrement() {
      this.$store.commit(types.DECREMENT, { num: 5, isAsyn: false });
    },
    decrementAsyn() {
      this.$store.dispatch(types.DECREMENT_ASYN, { num: 5, isAsyn: true });
    },
    resetAge() {
      this.$store.commit(types.RESETAGE, { age: this.$store.state.initAge, isAsyn: false });
    },
    resetAgeAsyn() {
      this.$store.dispatch(types.RESETAGE_ASYN, { age: this.$store.state.initAge, isAsyn: true });
    }
  },
  computed: {
    timeHello() {
      return `${this.$store.getters.timeNow('YYYY-MM-DD dddd')}, 长度: ${this.$store.getters.timeLength(
        'YYYY-MM-DD dddd'
      )}`;
    },
    studentInfo() {
      return this.$store.state.student;
    },
    recordAge() {
      return this.$store.getters.recordAge;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  border: 1px solid #000;
  padding: 0 50px 35px;
  width: 60vw;
  margin: 0 auto;
}
.hello button {
  padding: 2px 10px;
}
.hello button {
  margin-right: 20px;
}

.hello h1:nth-of-type(1) {
  color: red;
}

.hello h1:nth-of-type(2) {
  color: blue;
}

.studentInfo {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.studentInfoTitle {
  font-size: 28px;
  padding-right: 10px;
}
.studentInfo span {
  color: green;
  font-size: 20px;
  padding-right: 5px;
}
.recordAge {
  color: green;
  font-size: 20px;
}
</style>
