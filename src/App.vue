<template>
  <div id="app">
    <img alt="Vue logo" :src="logoPath" />
    <h1>timeApp: {{ timeApp }}</h1>
    <Hello :ageProp="ageApp" />
  </div>
</template>

<script>
import Hello from './components/Hello.vue';
import logo from './assets/logo.png';
// console.log('logo :>> ', logo); //logo :>>  /img/logo.82b9c7a5.png

export default {
  name: 'App',
  components: {
    Hello
  },
  data() {
    return {
      logoPath: logo
    };
  },
  computed: {
    ageApp() {
      if (this.$store.state.student.title) {
        return this.$store.state.student.title;
      }
      return this.$store.state.student.age;
    },
    timeApp() {
      return `${this.$store.getters.timeNow('YYYYMMDD h:mm:ss')}, 长度: ${this.$store.getters.timeLength(
        'YYYYMMDD h:mm:ss'
      )}`;
    }
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  background: #999;
  color: white;
  width: 60vw;
  margin: 0 auto 20px;
}
</style>
