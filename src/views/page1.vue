<template>
    <div class="page1">
        
    </div>
</template>


<script>
import PixiTake from '../js/page1'
export default {
  name:'page1',
  methods:{
    init(){
      this.pixiTake = new PixiTake({
        container: this.$el,
        resource: this.getResource(),
        bgSprites: this.getBgSprites(),
      })

      this.pixiTake.on('loadProgress', (progress) => {
        console.log(`加载进度: ${progress}`)
      })
      this.pixiTake.on('loadDone', () => {
        console.log('加载完毕')
      })
      this.pixiTake.on('progress', (progress) => {
        console.log(`当前进度: ${progress}`)
      })
    },
    // 加载资源
    getResource(){
      const resource = { sprites:[]}
      for(let i=0;i<5;i++){
        resource.sprites.push({
          name: `img${i+1}`,
          url: `../assets/images/img${i+1}.png`,
        })
      }
      return resource
    },
    getBgSprites(){
      const bgSprites = []
      for (let i=0;i<5;i++){
        bgSprites.push(`../assets/images/img${i+1}.png`)
      }
      return bgSprites
    }
  },
  mounted(){
    this.init()
  }
}
</script>

<style lang="scss">
  .page1{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 0;
  }
  canvas{
    width: 100%;
    height: 100%;
  }
</style>