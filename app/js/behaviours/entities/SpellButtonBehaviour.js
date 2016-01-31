import { Behaviour } from 'behaviour.js'

export default class SpellButtonBehaviour extends Behaviour {

  onAttach (fillVelocity = 0.009, usageBurn = 30) {
    this.fillVelocity = fillVelocity
    this.usageBurn = usageBurn

    this.on('use', this.onUse.bind(this))
  }

  onUse () {
    this.object.cooldownMask.y += this.usageBurn

    tweener.remove(this.object.scale)
    tweener.add(this.object.scale).
      to({ x: 1.2, y: 1.2 }, 200, Tweener.ease.quintOut).
      then(() => {
        tweener.add(this.object.scale).
          to({ x: 1, y: 1 }, 200, Tweener.ease.quintOut)
      })
  }

  update () {
    this.object.cooldownMask.y = Math.max(
      this.object.cooldownMask.targetY,
      this.object.cooldownMask.y - (this.fillVelocity * clock.deltaTime)
    )
  }

  onDetach () {
  }

}

