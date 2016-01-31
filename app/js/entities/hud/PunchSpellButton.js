import SpellButtonBehaviour from '../../behaviours/entities/SpellButtonBehaviour'

export default class PunchSpellButton extends PIXI.Container {

  constructor (id) {
    super()

    this.active = new PIXI.Sprite.fromImage('button-fist-inactive.png')
    this.addChild(this.active)

    this.cooldown = new PIXI.Sprite.fromImage('button-fist.png')
    this.addChild(this.cooldown)

    this.initY = this.cooldown.height * 2

    this.cooldownMask = new PIXI.Graphics()
    this.cooldownMask.lineStyle(2, 0x000000, 0.8)
    this.cooldownMask.beginFill(0x000000)
    this.cooldownMask.drawCircle(0, 0, this.cooldown.height)
    this.cooldownMask.x = this.cooldownMask.width / 3
    this.cooldownMask.targetY = this.cooldownMask.height / 2.5
    this.cooldownMask.y = this.initY
    this.addChild(this.cooldownMask)

    this.cooldown.mask = this.cooldownMask

    // this.fillVelocity = 0.1
    this.fillVelocity = 0.004
    this.usageBurn = 210
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



