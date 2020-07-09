<template>
  <div class="hello">
    <h1>countProp:{{ countProp }}</h1>
    <h1>numHello: {{ numHello }}</h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>

export default {
  name: 'Hello',
  props: {
    countProp: { type: Number, default: 0 }
  },
  data() {
    return {};
  },
  methods: {
    increment() {
      this.$store.commit('increment');
    },
    decrement() {
      this.$store.commit('decrement');
    }
  },
  computed: {
    numHello() {
      return this.$store.state.count;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  border: 1px solid #000;
  padding: 0 50px 35px;
  width: 60vw;
  margin: 0 auto;

}
.hello button{
  padding: 2px 10px;
}
.hello button:first-of-type{
  margin-right: 20px;;
}

.hello h1:nth-of-type(1){
  color:red;
}

.hello h1:nth-of-type(2){
  color:blue;
}
</style>
