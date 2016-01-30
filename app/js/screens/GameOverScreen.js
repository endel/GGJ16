import GameScreen from './GameScreen'

export default class GameOverScreen extends PIXI.Container {

  constructor () {
    super()

    var gameover = PIXI.Sprite.fromImage('game-over.png')

    gameover.pivot.x = gameover.width / 2
    gameover.pivot.y = gameover.height / 2

    gameover.x = window.innerWidth / 2
    gameover.y = window.innerHeight / 2
    this.addChild(gameover)

    var retry = new PIXI.Text("Try again", {font : '24px Arial', fill : 0xff1010, align : 'center'})
    retry.interactive = true
    retry.x = window.innerWidth / 2
    retry.y = window.innerHeight / 2 + 200
    retry.pivot.set( retry.width / 2, retry.height / 2 )
    retry.on('click', () => this.emit('goto', GameScreen))
    this.addChild(retry)
  }

  onDispose () {
  }

}


