import GameScreen from './GameScreen'

import ParticleExplosion from '../behaviours/particles/Explosion'

export default class TitleScreen extends PIXI.Container {

  constructor () {
    super()

    var title = new PIXI.Text("GGJ16", {font : '24px Arial', fill : 0xff1010, align : 'center'})
    title.pivot.set( title.width / 2, title.height / 2 )
    title.y = 40
    title.x = APP.width / 2
    this.addChild(title)

    var start = new PIXI.Text("START", {font : '24px Arial', fill : 0xff1010, align : 'center'})
    start.interactive = true
    start.x = APP.width / 2
    start.pivot.set( start.width / 2, start.height / 2 )
    start.y += 100
    // start.on('click', this.onStartClick.bind(this))
    // start.on('touchstart', this.onStartClick.bind(this))
    this.addChild(start)

    this.addBehaviour(new ParticleExplosion)

    this.on('dispose', this.onDispose.bind(this))
  }

  onDispose () {
  }

}
