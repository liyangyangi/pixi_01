<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'app',
  components: {
    // HelloWorld
  },
  methods:{
    
  },
  mounted(){
    
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html{
  font-size: calc(100vw / 3.75);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
/*   
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0) rotate(90deg); */
}

</style>
