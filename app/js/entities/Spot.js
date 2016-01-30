export default class Spot extends PIXI.Sprite {

  constructor () {
    super(PIXI.Texture.fromImage('enemy-spot.png'))

    this.interactive = true
    this.pivot.x = this.width / 2
    this.pivot.y = this.height / 2

    this.prayers = []
  }

}

