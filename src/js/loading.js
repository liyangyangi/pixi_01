import * as PIXI from 'pixi.js'
import { TweenMax, TimelineMax } from 'gsap/TweenMax'
import AlloyTouch from 'alloytouch'

class PixiTake {
  constructor(options){
    this.lib = { PIXI, TweenMax, TimelineMax, AlloyTouch }
    // this.lib = {PIXI}
    // 事件监听
    this.callbacks = {
      loadProgress: []
    }
    this.options = options
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.container = options.container || document.body
    this.resource = options.resource || {sprites:[]}  // 要加载的资源

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
    PIXI.loader
    .add(this.resource.sprites)
    .on('progress', this.loadProgress.bind(this))
    .load(this.loadDone.bind(this))
  }
  loadProgress (loader) {
    this.trigger('progress',loader.progress)
    this.trigger('loadProgress', loader.progress)
  }
  loadDone(){
    this.trigger('loadDone')
  }

  // 事件
  on (name, callback) {
    this.callbacks[name] = this.callbacks[name] || []
    this.callbacks[name].push(callback)
  }
  trigger (name, params) {
    const callbacks = this.callbacks[name]
    if (callbacks && callbacks instanceof Array) {
      callbacks.forEach((cb) => {
        cb(params)
      })
    }
  }

  
}

export default PixiTake