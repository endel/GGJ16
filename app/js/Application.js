import { createComponentSystem } from 'behaviour.js'

import SceneManager from './core/SceneManager'

import Clock from 'clock-timer.js'
window.clock = new Clock();

import Tweener from 'tweener'
window.Tweener = Tweener
window.tweener = new Tweener();

export default class Application {

  constructor () {
    this.renderer = new PIXI.WebGLRenderer(window.innerWidth, window.innerHeight, {
      resolution: window.devicePixelRatio,
      // antialias: false,
    })
    this.renderer.backgroundColor = 0xffffff
    document.body.appendChild(this.renderer.view)

    this.sceneManager = new SceneManager()
    this.componentSystem = createComponentSystem(PIXI.DisplayObject)

    window.addEventListener('resize', this.onResize.bind(this))
  }

  gotoScene (sceneClass) {
    this.sceneManager.goTo(sceneClass)
  }

  onResize (e) {
    this.renderer.view.width = window.innerWidth
    this.renderer.view.height = window.innerHeight
  }

  update () {
    window.requestAnimationFrame( this.update.bind( this) )
    clock.tick()

    tweener.update(clock.deltaTime)
    this.componentSystem.update()

    this.renderer.render(this.sceneManager)
  }

}
