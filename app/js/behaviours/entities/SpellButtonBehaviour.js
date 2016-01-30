import { Behaviour } from 'behaviour.js'

export default class SpellButtonBehaviour extends Behaviour {

  onAttach () {
    this.onUse()
    this.on('use', this.onUse.bind(this))
  }

  onUse () {
    this.object.cooldownMask.y = this.object.cooldown.height * 2
  }

  update () {
    this.object.cooldownMask.y = Math.max(this.object.cooldownMask.targetY, this.object.cooldownMask.y-1)
  }

  onDetach () {
  }

}

