export default class Lifebar extends PIXI.Container {
  constructor () {
    super()

    this.lifebar = new PIXI.Sprite.fromImage('lifelight.png')
    this.addChild(this.lifebar)

    this.lifebarMask = new PIXI.Graphics()
    this.lifebarMask.beginFill(0x000000)
    this.lifebarMask.drawRect(0, 0, this.lifebar.width, this.lifebar.height)
    this.lifebarMask.pivot.y = this.lifebarMask.height
    this.lifebarMask.y = this.lifebarMask.height
    this.addChild(this.lifebarMask)

    this.lifebar.mask = this.lifebarMask

    this.progress = 0
  }

  get progress () {
    return this.lifebarMask.scale.y
  }

  set progress (percent) {
    this.lifebarMask.scale.y = Math.min(Math.max(percent, 0), 1)

    if (this.lifebarMask.scale.y === 1) {
      this.emit('gameover')
    }
  }
}

