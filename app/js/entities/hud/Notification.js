export default class Notification extends PIXI.Container {

  constructor () {
    super()

    this.container = new PIXI.Container()
    this.addChild(this.container)

    this.bg = new PIXI.Sprite.fromImage('faixa1.png')
    this.container.addChild(this.bg)

    this.text = new PIXI.Text("Play", { font: "38px Berry_Rotunda", fill: 0x663910, textAlign: 'center' })
    this.text.pivot.x = this.text.width / 2
    this.text.x = this.bg.width / 2
    this.text.y = 60
    this.container.addChild(this.text)
  }

  set label (text) {
    this.text.text = text
    this.text.pivot.x = this.text.width / 2
  }

  goUp () {
    tweener.add(this.container).
      to({ y: this.container.y-8 }, 1000, Tweener.ease.quadInOut).
      then(this.goDown.bind(this))
  }

  goDown () {
    tweener.add(this.container).
      to({ y: this.container.y+8 }, 1000, Tweener.ease.quadInOut).
      then(this.goUp.bind(this))
  }

}
