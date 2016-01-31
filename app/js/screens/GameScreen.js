import TitleScreen from './TitleScreen'
import GameOverScreen from './GameOverScreen'

import KillCounter from '../entities/hud/KillCounter'
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
    currentMusic = music.play('title_screen').loop(true)

    this.waveController = new WaveController

    this.bg = new PIXI.Sprite.fromImage('images/background.jpg')
    this.addChild(this.bg)

    //
    // Actions
    //

    this.actionsContainer = new PIXI.Container()

    // gradients
    this.bottomGradient = new PIXI.Sprite.fromImage('gradientbase.png')
    this.bottomGradient.y = APP.height
    this.addChild(this.bottomGradient)

    this.topGradient = new PIXI.Sprite.fromImage('gradientbase.png')
    this.topGradient.scale.y *= -1
    this.topGradient.y = -this.topGradient.height
    this.addChild(this.topGradient)

    this.punchAction = new PunchSpellButton()
    this.punchAction.pivot.x = this.punchAction.width / 2
    this.punchAction.pivot.y = this.punchAction.height / 2
    this.punchAction.x = APP.width / 2 + this.punchAction.width / 5.7
    this.punchAction.y = this.punchAction.height / 4
    this.actionsContainer.addChild(this.punchAction)

    this.thunderAction = new ThunderSpellButton()
    this.thunderAction.pivot.x = this.thunderAction.width / 2
    this.thunderAction.pivot.y = this.thunderAction.height / 2
    this.thunderAction.x = APP.width / 2 - this.thunderAction.width - HUD_MARGIN
    this.thunderAction.y = this.punchAction.height - this.thunderAction.height
    this.actionsContainer.addChild(this.thunderAction)

    this.frozenAction = new FrozenSpellButton()
    this.frozenAction.alpha = 0.1
    this.frozenAction.pivot.x = this.frozenAction.width / 2
    this.frozenAction.pivot.y = this.frozenAction.height / 2
    this.frozenAction.x = APP.width / 2 + this.punchAction.width + HUD_MARGIN
    this.frozenAction.y = this.punchAction.height - this.frozenAction.height
    this.actionsContainer.addChild(this.frozenAction)

    this.actionsContainer.pivot.x = this.actionsContainer.width / 2
    this.actionsContainer.x = APP.width / 2 - (this.actionsContainer.width / 5)
    this.actionsContainer.alpha = 0
    this.actionsContainer.y = APP.height

    // Kills
    this.killCounter = new KillCounter('0')
    this.killCounter.x = APP.width / 2
    this.killCounter.y = -this.killCounter.height
    this.killCounter.punchAction = this.punchAction // TODO: move me to elsewhere
    this.addChild(this.killCounter)

    //
    // God
    //
    this.god = new God
    this.god.x = APP.width / 2

    this.ritualCircle = new RitualCircle(this.god)
    this.ritualCircle.pivot.x = this.ritualCircle.width / 2
    this.ritualCircle.pivot.y = this.ritualCircle.height / 2
    this.ritualCircle.x = (APP.width / 2) - 50
    this.ritualCircle.y = APP.height / 2 + this.ritualCircle.height - 10
    this.addChild(this.ritualCircle)

    this.lifebar = new Lifebar()
    this.lifebar.pivot.x = this.lifebar.width / 2
    this.lifebar.pivot.y = this.lifebar.height / 2
    this.lifebar.x = APP.width / 2
    this.lifebar.y = APP.height / 2 + 30
    this.lifebar.once('gameover', () => this.emit('goto', GameOverScreen))
    this.addChild(this.lifebar)

    this.addChild(this.god)

    this.addChild(this.actionsContainer)

    //
    // "HUD"
    //

    this.notification = new Notification()
    this.notification.pivot.x = this.notification.bg.width / 2
    this.notification.pivot.y = this.notification.bg.height / 2
    this.notification.x = APP.width / 2
    this.notification.y = APP.height - this.notification.height - 80
    this.notification.goUp()
    this.addChild(this.notification)

    // add wave controller to ritual circle
    this.ritualCircle.addBehaviour(this.waveController, {
      notification: this.notification,
      lifebar: this.lifebar,
      god: this.god
    })

    //
    // Intro
    //
    this.god.y = this.god.height + HUD_MARGIN
    this.god.setFace('sleeping')
    console.log(this.god.currentFace)

    this.introUfoLight = new PIXI.Sprite.fromImage('UFOLight.png')
    this.introUfoLight.pivot.x = this.introUfoLight.width / 2
    this.introUfoLight.pivot.y = 0
    this.introUfoLight.x = APP.width / 2 + 50
    this.introUfoLight.y = this.god.y + this.god.height / 3
    this.addChild(this.introUfoLight)

    this.introUfo = new PIXI.Sprite.fromImage('UFO.png')
    this.introUfo.pivot.x = this.introUfo.width / 2
    this.introUfo.pivot.y = this.introUfo.height / 2
    this.introUfo.x = APP.width / 2
    this.introUfo.y = this.god.y + this.god.height / 4
    this.addChild(this.introUfo)

    // notification / events
    this.notification.on('click', this.startGame.bind(this))
    this.notification.on('touchstart', this.startGame.bind(this))
    this.notification.interactive = true
    this.notification.buttonMode = true

    this.introGoDown()
    this.scaleXUp()

    window.addEventListener('resize', this.onResize.bind(this))

    this.on('touchstart', this.onTouchStart.bind(this))
    this.on('touchend', this.onTouchEnd.bind(this))

    this.on('dispose', this.onDispose.bind(this))
  }

  init () {
    // bottomGradient.y = APP.height - bottomGradient.height
    // this.actionsContainer.y = APP.height - this.actionsContainer.height - 30
    // this.topGradient.y = 0
    // this.killCounter.y = 30
    // this.actionsContainer.alpha = 1
    // currentMusic = music.play('loop').loop(true)
    // this.notification.y = this.god.y + this.god.height / 3

    // this.emit('start')
  }

  startGame () {
    this.notification.removeAllListeners()
    this.notification.buttonMode = this.notification.interactive = false

    tweener.add(this.bottomGradient).
      wait(1500).
      to({ y: APP.height - this.bottomGradient.height }, 1000, Tweener.ease.quintInOut)
    tweener.add(this.actionsContainer).
      wait(1500).
      to({ y: APP.height - this.actionsContainer.height - 30, alpha: 1 }, 1000, Tweener.ease.quintInOut)
    tweener.add(this.topGradient).
      wait(1500).
      to({ y: 0 }, 1000, Tweener.ease.quintInOut)
    tweener.add(this.killCounter).
      wait(1500).
      to({ y: 30 }, 1000, Tweener.ease.quintInOut).
      then(() => {
        currentMusic.stop()
        currentMusic = music.play('loop').loop(true)

        this.god.addBehaviour(new GodBehaviour, {
          waveController: this.waveController,
          thunderAction: this.thunderAction,
          punchAction: this.punchAction,
          frozenAction: this.frozenAction,
          killCounter: this.killCounter
        })

        this.waveController.emit('start')
      })

    var destGodY = this.god.height + HUD_MARGIN * 8

    // move ufo light
    tweener.add(this.introUfoLight).
      to({ alpha: 0 }, 1000, Tweener.ease.quintInOut)

    // move notification to god
    tweener.add(this.notification).
      to({ y: destGodY + this.god.height / 3 }, 2500, Tweener.ease.quintInOut).
      then( () => { })


    tweener.add(this.introUfoLight.scale).
      to({ y: 0.6 }, 1000, Tweener.ease.quintInOut).
      then( () => {
        this.introUfoLight.parent.removeChild(this.introUfoLight)
      })

    // move god
    tweener.add(this.god).
      wait(600).
      to({ y: destGodY }, 1000, Tweener.ease.quadInOut)

    // move ufo
    tweener.add(this.introUfo).
      wait(1000).
      to({ y: this.introUfo.y + 50, alpha: 0 }, 1600, Tweener.ease.quintOut).
      then(() => {
        this.introUfo.parent.removeChild(this.introUfo)
      })

  }

  introGoUp () {
    tweener.add(this.introUfo).
      to({ y: this.introUfo.y-8 }, 1000, Tweener.ease.quadInOut).
      then(this.introGoDown.bind(this))
  }

  introGoDown () {
    tweener.add(this.introUfo).
      to({ y: this.introUfo.y+8 }, 1000, Tweener.ease.quadInOut).
      then(() => {
        if (this.introUfoLight.parent) {
         this.introGoUp.bind(this)
        }
      })
  }

  scaleXUp () {
    tweener.add(this.introUfoLight.scale).
      to({ x: 1.05 }, 1500, Tweener.ease.quadInOut).
      then(this.scaleXDown.bind(this))
  }

  scaleXDown () {
    tweener.add(this.introUfoLight.scale).
      to({ x: 0.95 }, 1500, Tweener.ease.quadInOut).
      then(() => {
        if (this.introUfoLight.parent) { this.scaleXUp.bind(this) }
      })
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

