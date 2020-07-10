<template>
  <div class="hello">
    <h1>ageProp:{{ ageProp }}</h1>
    <h1>timeHello: {{ timeHello }}</h1>
    <h1 class="studentInfo">
      <div class="studentInfoTitle">学生信息:</div>
      <span>姓名 - {{ studentInfo.name }};</span>
      <span>性别 - {{ studentInfo.sex }};</span>
      <span>年龄 - {{ studentInfo.age }}</span>
    </h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="resetAge">重置学生年龄</button>
  </div>
</template>

<script>
import { INCREMENT, DECREMENT, RESETAGE } from '../store/mutation-types';

export default {
  name: 'Hello',
  props: {
    ageProp: { type: Number, default: 0 }
  },
  data() {
    return {};
  },
  methods: {
    increment() {
      this.$store.commit(INCREMENT, { num: 5 });
      // this.$store.commit({ type: 'increment', num: 2 });
    },
    decrement() {
      this.$store.commit(DECREMENT, { num: 2 });
      // this.$store.commit({ type: 'decrement', num: 1 });
    },
    resetAge() {
      this.$store.commit(RESETAGE, { age: this.$store.state.initAge });
      // this.$store.commit({ type: 'decrement', age: this.initAge });
    }
  },
  computed: {
    timeHello() {
      return (
        this.$store.getters.timeNow('YY-MM-DD dddd') + ', 长度: ' + this.$store.getters.timeLength('YY-MM-DD dddd')
      );
    },
    studentInfo() {
      return this.$store.state.student;
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
</style>
