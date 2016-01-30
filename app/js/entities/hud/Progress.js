export default class Progress extends PIXI.Container {
  constructor () {
    super()
    this.background = new PIXI.Graphics();
    this.background.beginFill(0x000000)
    this.background.drawRect(0, 0, window.innerWidth, 10)
    this.addChild(this.background)

    this.fill = new PIXI.Graphics();
    this.fill.beginFill(0xff0000)
    this.fill.drawRect(0, 0, window.innerWidth, 10)
    this.addChild(this.fill)

    this.progress = 0
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
