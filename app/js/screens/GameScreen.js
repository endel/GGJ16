import TitleScreen from './TitleScreen'
import GameOverScreen from './GameOverScreen'

import SpellButton from '../entities/hud/SpellButton'
import ThunderSpellButton from '../entities/hud/ThunderSpellButton'
import PunchSpellButton from '../entities/hud/PunchSpellButton'
import FrozenSpellButton from '../entities/hud/FrozenSpellButton'
import RitualCircle from '../entities/RitualCircle'

import WaveController from '../behaviours/controllers/WaveController'
import Notification from '../entities/hud/Notification'
import Lifebar from '../entities/hud/Lifebar'

import God from '../entities/God'
import GodBehaviour from '../behaviours/entities/GodBehaviour'

window.HUD_MARGIN = 8


export default class GameScreen extends PIXI.Container {

  constructor () {
    super()

    // if (!currentMusic) {
      currentMusic = music.play('loop').loop(true)
    // }
    // currentMusic.play()

    this.waveController = new WaveController

    this.bg = new PIXI.Sprite.fromImage('images/background.png')
    this.addChild(this.bg)

    //
    // Actions
    //

    this.actionsContainer = new PIXI.Container()
    this.addChild(this.actionsContainer)

    this.punchAction = new PunchSpellButton()
    this.punchAction.x = APP.width / 2
    this.addChild(this.punchAction)

    this.thunderAction = new ThunderSpellButton()
    this.thunderAction.x = APP.width / 2 - this.thunderAction.width - HUD_MARGIN
    this.thunderAction.y = this.punchAction.height - this.thunderAction.height
    this.actionsContainer.addChild(this.thunderAction)

    this.frozenAction = new FrozenSpellButton()
    this.frozenAction.x = APP.width / 2 + this.punchAction.width + HUD_MARGIN
    this.frozenAction.y = this.punchAction.height - this.frozenAction.height
    this.addChild(this.frozenAction)

    //
    // God
    //
    this.god = new God
    this.god.pivot.x = this.god.width / 2
    this.god.pivot.y = this.god.height / 2
    this.god.x = APP.width / 2
    this.god.y = this.god.height + HUD_MARGIN * 4
    this.god.addBehaviour(new GodBehaviour, {
      waveController: this.waveController,
      thunderAction: this.thunderAction,
      punchAction: this.punchAction,
      frozenAction: this.frozenAction
    })
    this.addChild(this.god)

    this.ritualCircle = new RitualCircle(this.god)
    this.ritualCircle.pivot.x = this.ritualCircle.width / 2
    this.ritualCircle.pivot.y = this.ritualCircle.height / 2
    this.ritualCircle.x = (APP.width / 2) - 50
    this.ritualCircle.y = APP.height / 2 + this.ritualCircle.height - 10
    this.addChild(this.ritualCircle)

    //
    // "HUD"
    //

    this.lifebar = new Lifebar()
    this.lifebar.pivot.x = this.lifebar.width / 2
    this.lifebar.pivot.y = this.lifebar.height / 2
    this.lifebar.x = APP.width / 2
    this.lifebar.y = APP.height / 2 + 30
    this.lifebar.once('gameover', () => this.emit('goto', GameOverScreen))
    this.addChild(this.lifebar)

    this.notification = new Notification()
    this.notification.pivot.x = this.notification.bg.width / 2
    this.notification.pivot.y = this.notification.bg.height / 2
    this.notification.x = APP.width / 2
    this.notification.y = this.god.y + this.god.height / 3
    this.notification.goUp()
    this.addChild(this.notification)

    // add wave controller to ritual circle
    this.ritualCircle.addBehaviour(this.waveController, {
      notification: this.notification,
      lifebar: this.lifebar,
      god: this.god
    })

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

