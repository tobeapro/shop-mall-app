<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Child />
    <router-link to="/">CA</router-link>
    <router-link to="/cb">CB</router-link>
    <router-link to="/cc">CC</router-link>
    <router-view></router-view>
    <div>
      {{count}}
      <button @click="add">add</button>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Child from './components/child.vue'
export default {
  name: 'app',
  computed:{
    count(){
      return this.$store.state.count
    }
  },
  components: {
    HelloWorld,
    Child
  },
  methods:{
    add(){
      this.$store.commit("addCount")
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
