import { Behaviour } from 'behaviour.js'

export default class SpellButtonBehaviour extends Behaviour {

  onAttach (fillVelocity = 0.5, usageBurn = 0.5) {
    this.onUse()

    this.fillVelocity = fillVelocity

    this.on('use', this.onUse.bind(this))
  }

  onUse () {
    this.object.cooldownMask.y = this.object.cooldown.height * 2
  }

  update () {
    this.object.cooldownMask.y = Math.max(
      this.object.cooldownMask.targetY,
      this.object.cooldownMask.y-this.fillVelocity
    )
  }

  onDetach () {
  }

}

