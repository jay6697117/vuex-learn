<template>
  <div id="app">
    <img alt="Vue logo" height="100" :src="logoPath" />
    <div class="time-app">timeApp: {{ timeApp }}</div>
    <div class="cpt-wrap">
      <div class="cpt-pd">
        <Hello :ageProp="ageApp" />
      </div>
      <div class="cpt-pd">
        <Demo />
      </div>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello.vue';
import Demo from './components/Demo.vue';
import logo from './assets/logo.png';

export default {
  name: 'App',
  components: {
    Hello,
    Demo
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.time-app {
  background: #999;
  color: white;
  width: 60vw;
  margin: 0 auto 20px;
}
.cpt-wrap{
  padding-bottom: 100px;
}
.cpt-pd {
  padding: 15px 0;
}
</style>
