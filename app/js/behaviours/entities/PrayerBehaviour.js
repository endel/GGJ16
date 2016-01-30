import { Behaviour } from 'behaviour.js'

import Explosion from '../particles/Explosion'
import Blood from '../../entities/effects/Blood'

var prayerTypes = require('../../../config/prayers.json')

export default class PrayerBehaviour extends Behaviour {

  onAttach (config, waveController) {
    this.waveController = waveController
    this.attributes = prayerTypes[ config.type ]

    this.targetSlot = config.targetSlot
    this.angle = config.angle

    this.praying = false

    this.originPoint = {
      x: this.targetSlot.x + (Math.cos(this.angle) * 200),
      y: this.targetSlot.y + (Math.sin(this.angle) * 200)
    }

    this.object.x = this.originPoint.x
    this.object.y = this.originPoint.y

    tweener.add(this.object).from({ alpha: 0 }, 600, Tweener.ease.quintOut)

    this.object.addChild(this.object.walking)
  }

  update () {
    if (!this.praying) {
      this.move()
    } else {
      this.pray()
    }
  }

  move() {
    var nextPoint = {
      x: (Math.cos(this.angle) * 0.01 * clock.deltaTime * this.attributes.velocity),
      y: (Math.sin(this.angle) * 0.01 * clock.deltaTime * this.attributes.velocity)
    }

    this.object.x -= nextPoint.x
    this.object.y -= nextPoint.y

    let distance = Math.sqrt(
      Math.pow((this.object.x-this.targetSlot.x), 2) +
      Math.pow((this.object.y-this.targetSlot.y), 2)
    )

    if (distance < 5) {
      this.praying = true

      this.targetSlot.prayers.push(this)
      this.waveController.prayers.push(this)

      this.object.removeChild(this.object.walking)
      this.object.addChild(this.object.praying)
    }
  }

  pray () {
  }

  onDetach () {
    if (this.object.walking.parent) {
      this.object.removeChild(this.object.walking)
    }

    if (this.object.praying) {
      this.object.removeChild(this.object.praying)
    }

    // remove prayer from slot
    let prayerSlotIndex = this.targetSlot.prayers.indexOf(this)
    if (prayerSlotIndex >= 0) {
      this.targetSlot.prayers.splice(this.targetSlot.prayers.indexOf(this), 1)
    }

    // remove prayer from wave
    let prayerWaveIndex = this.waveController.prayers.indexOf(this)
    if (prayerWaveIndex >= 0) {
      this.waveController.prayers.splice(this.waveController.prayers.indexOf(this), 1)
    }

    this.object.addChild(this.object.dead)
    tweener.add(this.object).to({ alpha: 0 }, 5000, Tweener.ease.quintOut).then(() => {
      this.object.parent.removeChild(this.object)
    })

    // blood effect
    let blood = new Blood
    blood.position.copy(this.object.position)
    this.object.parent.addChild(blood)

    this.object.addBehaviour(new Explosion)
    console.log("Detached! Destroy this entity!")
  }

}
