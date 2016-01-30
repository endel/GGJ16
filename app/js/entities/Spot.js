export default class Spot extends PIXI.Container {

  constructor () {
    super()

    var graphics = new PIXI.Graphics()
    graphics.beginFill(0x000000, 0.3)
    graphics.drawEllipse(0, 0, 40, 12)
    graphics.x = 14
    graphics.y = 26
    this.addChild(graphics)

    // this.pivot.x = this.width / 2
    this.pivot.y = this.height

    this.prayers = []
  }

}

