import Progress from './Progress'

import SpellButtonBehaviour from '../../behaviours/entities/SpellButtonBehaviour'

export default class SpellButton extends PIXI.Container {

  constructor (id) {
    super()

    this.active = new PIXI.Sprite.fromImage(id + '.png')
    this.addChild(this.active)

    this.cooldown = new PIXI.Sprite.fromImage(id + '-available.png')
    this.addChild(this.cooldown)

    this.cooldownMask = new PIXI.Graphics()
    this.cooldownMask.lineStyle(2, 0x000000, 0.8)
    this.cooldownMask.beginFill(0x000000)
    this.cooldownMask.drawCircle(0, 0, 25)
    this.cooldownMask.x = this.cooldownMask.width / 2
    this.cooldownMask.targetY = this.cooldownMask.height / 2
    this.addChild(this.cooldownMask)

    this.cooldown.mask = this.cooldownMask

    this.addBehaviour(new SpellButtonBehaviour)
  }

  get isAvailable () {
    return this.cooldownMask.y === this.cooldownMask.targetY
  }

}

