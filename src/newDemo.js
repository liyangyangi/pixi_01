import * as PIXI from 'pixi.js'

class newDemo {
  constructor (options) {
    console.log(options)
    this.lib = { PIXI}
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.container = options.container || document.body
    this.resource = options.resource || []

    this.app = new PIXI.Application({
      width: this.width,
      height:this.height,
      resolution: 1,
      transparent: false,
    })
    this.container.appendChild(this.app.view)

    this.load()
  }
  
  load(){
    console.log(this.resource)
    PIXI.loader.add(this.resource)
    .on('progress',)
  }

}

export default newDemo
