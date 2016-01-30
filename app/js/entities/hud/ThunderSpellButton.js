import SpellButtonBehaviour from '../../behaviours/entities/SpellButtonBehaviour'

export default class ThunderSpellButton extends PIXI.Container {

  constructor (id) {
    super()

    this.active = new PIXI.Sprite.fromImage('button-thunder-inactive.png')
    this.addChild(this.active)

    this.cooldown = new PIXI.Sprite.fromImage('button-thunder.png')
    this.addChild(this.cooldown)

    this.cooldownMask = new PIXI.Graphics()
    this.cooldownMask.lineStyle(2, 0x000000, 0.8)
    this.cooldownMask.beginFill(0x000000)
    this.cooldownMask.drawCircle(0, 0, this.cooldown.height)
    this.cooldownMask.x = this.cooldownMask.width / 3
    this.cooldownMask.targetY = this.cooldownMask.height / 2.5
    this.addChild(this.cooldownMask)

    this.cooldown.mask = this.cooldownMask

    this.addBehaviour(new SpellButtonBehaviour)
  }

  get isAvailable () {
    return this.cooldownMask.y > this.cooldownMask.targetY
  }

}


