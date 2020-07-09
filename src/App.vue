<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Hello :countProp="numApp" />
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
    numApp () {
      return this.$store.state.count;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
