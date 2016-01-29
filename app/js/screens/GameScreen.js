import TitleScreen from './TitleScreen'

import SpellButton from '../entities/hud/SpellButton'
import RitualCircle from '../entities/RitualCircle'

var HUD_MARGIN = 8

export default class GameScreen extends PIXI.Container {

  constructor () {
    super()

    this.action1 = new SpellButton('power-1')
    this.addChild(this.action1)

    this.action2 = new SpellButton('power-2')
    this.addChild(this.action2)

    this.action3 = new SpellButton('power-3')
    this.addChild(this.action3)

    this.action4 = new SpellButton('power-4')
    this.addChild(this.action4)

    this.god = new PIXI.Sprite.fromImage('god.png')
    this.god.pivot.x = this.god.width / 2
    this.god.pivot.y = this.god.height / 2
    this.addChild(this.god)

    this.ritualCircle = new RitualCircle()
    this.ritualCircle.pivot.x = this.ritualCircle.width / 2
    this.ritualCircle.pivot.y = this.ritualCircle.height / 2
    this.addChild(this.ritualCircle)

    this.currentWave = 1

    window.addEventListener('resize', this.onResize.bind(this))
    this.onResize()

    this.on('dispose', this.onDispose.bind(this))
  }

  onResize () {
    this.action1.x = HUD_MARGIN

    this.action2.x = HUD_MARGIN
    this.action2.y = this.action1.height + HUD_MARGIN

    this.action3.x = window.innerWidth - this.action3.width - HUD_MARGIN

    this.action4.x = window.innerWidth - this.action4.width - HUD_MARGIN
    this.action4.y = this.action4.height + HUD_MARGIN

    this.god.x = window.innerWidth / 2
    this.god.y = this.god.height / 2  + HUD_MARGIN

    this.ritualCircle.x = window.innerWidth / 2
    this.ritualCircle.y = window.innerHeight / 2 + this.ritualCircle.height / 2
  }

  onDispose () {
  }

}

