import TitleScreen from './TitleScreen'
import GameOverScreen from './GameOverScreen'

import SpellButton from '../entities/hud/SpellButton'
import RitualCircle from '../entities/RitualCircle'

import WaveController from '../behaviours/controllers/WaveController'
import Progress from '../entities/hud/Progress'

import God from '../entities/God'
import GodBehaviour from '../behaviours/entities/GodBehaviour'

window.HUD_MARGIN = 8

export default class GameScreen extends PIXI.Container {

  constructor () {
    super()
    this.waveController = new WaveController

    this.bg = new PIXI.Sprite.fromImage('images/background.png')
    this.addChild(this.bg)

    this.action1 = new SpellButton('power-1')
    this.action1.x = HUD_MARGIN
    this.addChild(this.action1)

    this.action2 = new SpellButton('power-2')
    this.action2.x = HUD_MARGIN
    this.action2.y = this.action1.height + HUD_MARGIN
    this.addChild(this.action2)

    this.god = new God
    this.god.pivot.x = this.god.width / 2
    this.god.pivot.y = this.god.height / 2
    this.god.x = APP.width / 2
    this.god.y = this.god.height / 1.2 + HUD_MARGIN
    this.god.addBehaviour(new GodBehaviour, {
      waveController: this.waveController,
      action1: this.action1,
      action2: this.action2
    })
    this.addChild(this.god)

    this.progress = new Progress()
    this.progress.pivot.x = this.progress.bg.width / 2
    this.progress.pivot.y = this.progress.bg.height / 2
    this.progress.x = APP.width / 2
    this.progress.y = this.god.y + this.god.height / 3
    this.progress.once('gameover', () => this.emit('goto', GameOverScreen))
    this.addChild(this.progress)

    this.ritualCircle = new RitualCircle(this.god)
    this.ritualCircle.pivot.x = this.ritualCircle.width / 2
    this.ritualCircle.pivot.y = this.ritualCircle.height / 2
    this.ritualCircle.x = (APP.width / 2) - 50
    this.ritualCircle.y = APP.height / 2 + this.ritualCircle.height - 10
    this.ritualCircle.addBehaviour(this.waveController, {
      progress: this.progress,
      god: this.god
    })
    this.addChild(this.ritualCircle)

    window.addEventListener('resize', this.onResize.bind(this))

    this.on('touchstart', this.onTouchStart.bind(this))
    this.on('touchend', this.onTouchEnd.bind(this))

    this.on('dispose', this.onDispose.bind(this))
  }

  onTouchStart (e) {
  }

  onTouchEnd (e) {
  }

  onResize () {
  }

  onDispose () {
  }

}

