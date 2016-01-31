import SpellButtonBehaviour from '../../behaviours/entities/SpellButtonBehaviour'

export default class FrozenSpellButton extends PIXI.Container {

  constructor (id) {
    super()

    this.active = new PIXI.Sprite.fromImage('button-snow-inactive.png')
    this.addChild(this.active)

    this.cooldown = new PIXI.Sprite.fromImage('button-snow.png')
    this.addChild(this.cooldown)

    this.initY = this.cooldown.height * 2

    this.cooldownMask = new PIXI.Graphics()
    this.cooldownMask.lineStyle(2, 0x000000, 0.8)
    this.cooldownMask.beginFill(0x000000)
    this.cooldownMask.drawCircle(0, 0, this.cooldown.height)
    this.cooldownMask.x = this.cooldownMask.width / 3
    this.cooldownMask.targetY = this.cooldownMask.height / 2.1
    this.cooldownMask.y = this.initY
    this.addChild(this.cooldownMask)

    this.cooldown.mask = this.cooldownMask

    this.fillVelocity = 0.009
    this.usageBurn = 30
  }

  init () {
    this.addBehaviour(new SpellButtonBehaviour, this.fillVelocity, this.usageBurn)
  }

  get width () { return this.active.width }
  get height () { return this.active.height }

  get isAvailable () {
    return (this.cooldownMask.y + this.usageBurn) <= this.initY
  }

}
