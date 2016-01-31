export default class KillCounter extends PIXI.Container {
  constructor (text) {
    super()

    this.bg = new PIXI.Sprite.fromImage('deathcounter.png')
    this.bg.pivot.x = this.bg.width / 2
    this.addChild(this.bg)

    this.text = new PIXI.Text(text, { font: "48px Berry_Rotunda", fill: 0xffffff, textAlign: 'center' })
    this.text.pivot.x = this.text.width / 2
    this.text.x = 18
    this.text.y = 6
    this.addChild(this.text)
  }

  increment () {
    this.text.text = parseInt(this.text.text)+1

    var fillPerKill = 5

    this.punchAction.cooldownMask.y = Math.max(
      this.punchAction.cooldownMask.targetY,
      this.punchAction.cooldownMask.y - fillPerKill
    )
  }

}

