import GameScreen from './GameScreen'
import CrazyButton from '../entities/hud/CrazyButton'
import Textbox from '../entities/hud/Textbox'
import Notification from '../entities/hud/Notification'
import God from '../entities/God'

export default class GameOverScreen extends PIXI.Container {

  constructor () {
    super()

    music.stop()
    playSound('gameover')

    this.bg = new PIXI.Sprite.fromImage('images/background.jpg')
    this.addChild(this.bg)

    var god = new God()
    god.setFace('lost')
    god.x = APP.width / 2
    god.y = APP.height / 2
    this.addChild(god)

    this.notification = new Notification(`${ (APP.killAmount||0) } kills`)
    this.notification.pivot.x = this.notification.bg.width / 2
    this.notification.pivot.y = this.notification.bg.height / 2
    this.notification.x = APP.width / 2
    this.notification.y = APP.height / 2 + 100
    this.addChild(this.notification)
    this.goUp()

    var label = new Textbox("You were summoned.")
    label.x = APP.width / 2
    label.y = 100
    this.addChild(label)

    var button = new CrazyButton()
    button.x = APP.width / 2
    button.y = APP.height - button.height
    button.buttonMode = button.interactive = true
    button.on('click', () => this.emit('goto', GameScreen))
    button.on('touchstart', () => this.emit('goto', GameScreen))
    this.addChild(button)
  }

  onDispose () {
  }

  goUp () {
    tweener.add(this.notification).
      to({ y: this.notification.y-8 }, 1000, Tweener.ease.quadInOut).
      then(this.goDown.bind(this))
  }

  goDown () {
    tweener.add(this.notification).
      to({ y: this.notification.y+8 }, 1000, Tweener.ease.quadInOut).
      then(this.goUp.bind(this))
  }

}


