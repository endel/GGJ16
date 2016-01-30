import Progress from './Progress'

export default class SpellButton extends PIXI.Container {

  constructor (id) {
    super()

    this.active = new PIXI.Sprite.fromImage(id + '.png')
    this.addChild(this.active)

    // this.cooldown = new Progress()
    // this.addChild(this.cooldown)
  }

}

