<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div>xxxxxxxxxxxx</div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import * as PIXI from 'pixi.js'
import newDemo from './newDemo'
export default {
  name: 'app',
  components: {
    // HelloWorld
  },
  methods:{
    init(){
      let type = "WebGL"
      if(!PIXI.utils.isWebGLSupported()){
        type = "canvas"
      }
      PIXI.utils.sayHello(type)

      this.newDemo = new newDemo({
        container: this.$el,
        resource: this.getSpirtes(),
      })
    },
    getSpirtes(){
      const resource = [
        {
          name: 'res1',
          url: './assets/img1.png',
        },{
          name: 'res2',
          url: './assets/logo.png',
        }
      ]
      return resource
    },
  },
  mounted(){
    this.init()
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
  
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0) rotate(90deg);
}
canvas{
  width: 100%;
  height: 100%;
}
</style>
