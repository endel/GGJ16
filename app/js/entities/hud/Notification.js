export default class Notification extends PIXI.Container {
  constructor () {
    super()

    this.bg = new PIXI.Sprite.fromImage('faixa1.png')
    this.addChild(this.bg)

    this.background = new PIXI.Graphics();
    this.background.beginFill(0x000000)
    this.background.drawRect(0, 0, this.bg.width, 10)
    this.background.position.y = this.bg.height / 2
    // this.addChild(this.background)

    this.fill = new PIXI.Graphics();
    this.fill.beginFill(0xff0000)
    this.fill.drawRect(0, 0, this.bg.width, 10)
    this.fill.position.y = this.bg.height / 2
    // this.addChild(this.fill)

    this.progress = 0
  }

  goUp () {
    tweener.add(this).
      to({ y: this.y-8 }, 1000, Tweener.ease.quadInOut).
      then(this.goDown.bind(this))
  }

  goDown () {
    tweener.add(this).
      to({ y: this.y+8 }, 1000, Tweener.ease.quadInOut).
      then(this.goUp.bind(this))
  }

  get progress () {
    return this.fill.scale.x
  }

  set progress (percent) {
    this.fill.scale.x = Math.min(Math.max(percent, 0), 1)
    if (this.fill.scale.x === 1) {
      this.emit('gameover')
    }
  }
}
