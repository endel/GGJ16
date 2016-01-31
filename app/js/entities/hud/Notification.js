export default class Notification extends PIXI.Container {

  constructor () {
    super()

    this.container = new PIXI.Container()
    this.addChild(this.container)

    this.bg = new PIXI.Sprite.fromImage('faixa1.png')
    this.container.addChild(this.bg)

    this.killAmount = 0

    this.text = new PIXI.Text("Play", { font: "38px Berry_Rotunda", fill: 0x663910, textAlign: 'center' })
    this.text.pivot.x = this.text.width / 2
    this.text.x = this.bg.width / 2
    this.text.y = 60
    this.container.addChild(this.text)

    this.kills = new PIXI.Text("0 kills", { font: "38px Berry_Rotunda", fill: 0x663910, textAlign: 'center' })
    this.kills.pivot.x = this.kills.width / 2
    this.kills.x = this.bg.width / 2
    this.kills.y = 60
    this.kills.alpha = 0
    this.container.addChild(this.kills)
  }

  set label (text) {
    this.kills.text = text
    this.kills.pivot.x = this.kills.width / 2
  }

  incrementKill () {
    this.killAmount++
    this.label = this.killAmount.toString() + " kills"

    var fillPerKill = 5

    this.punchAction.cooldownMask.y = Math.max(
      this.punchAction.cooldownMask.targetY,
      this.punchAction.cooldownMask.y - fillPerKill
    )
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
