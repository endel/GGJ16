export default class Progress extends PIXI.Container {
  constructor () {
    super()
    this.background = new PIXI.Graphics();
    this.background.beginFill(0x000000)
    this.background.drawRect(0, 0, 100, 10)
    this.addChild(this.background)

    this.fill = new PIXI.Graphics();
    this.fill.beginFill(0x000000)
    this.fill.drawRect(0, 0, 100, 10)
    this.addChild(this.fill)

    this.progress = 1
  }

  set progress (percent) {
    this.fill.scale.x = percent
  }
}
