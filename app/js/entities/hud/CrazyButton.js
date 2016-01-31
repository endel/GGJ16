export default class CrazyButton extends PIXI.Container {
  constructor (text = "Retry") {
    super()

    this.bg = new PIXI.Sprite.fromImage('replay.png')
    this.bg.pivot.x = this.bg.width / 2
    this.addChild(this.bg)

    this.text = new PIXI.Text(text, { font: "38px Berry_Rotunda", fill: 0xffffff, textAlign: 'center' })
    this.text.pivot.x = this.text.width / 2
    this.text.y = 172
    this.addChild(this.text)
  }

}

