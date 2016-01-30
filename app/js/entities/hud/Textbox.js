export default class Textbox extends PIXI.Container {
  constructor (text) {
    super()

    this.bg = new PIXI.Sprite.fromImage('textbox.png')
    this.bg.pivot.x = this.bg.width / 2
    this.addChild(this.bg)

    this.text = new PIXI.Text(text, { font: "48px Berry_Rotunda", fill: 0xffffff, textAlign: 'center' })
    this.text.pivot.x = this.text.width / 2
    this.text.y = 6
    this.addChild(this.text)
  }

}
