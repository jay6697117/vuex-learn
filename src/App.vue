<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>timeApp: {{ timeApp }}</h1>
    <Hello :ageProp="ageApp" />
  </div>
</template>

<script>
import Hello from './components/Hello.vue';

export default {
  name: 'App',
  components: {
    Hello
  },
  data() {
    return {};
  },
  computed: {
    ageApp() {
      return this.$store.state.student.age;
    },
    timeApp() {
      return (
        this.$store.getters.timeNow('YYMMDD h:mm:ss') + ', 长度: ' + this.$store.getters.timeLength('YYMMDD h:mm:ss')
      );
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
