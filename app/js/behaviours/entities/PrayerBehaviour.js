import { Behaviour } from 'behaviour.js'

import Explosion from '../particles/Explosion'
import Blood from '../../entities/effects/Blood'

var prayerTypes = require('../../../config/prayers.json')

export default class PrayerBehaviour extends Behaviour {

  onAttach (config, waveController) {
    playSound('Human_All_Walking_loop')

    this.waveController = waveController
    this.attributes = prayerTypes[ config.type ]
    this.baseVelocity = 5

    this._hp = parseInt(this.attributes.hp)

    this.targetSlot = config.targetSlot
    this.angle = config.angle

    this.stopped = false
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

  get hp () { return this._hp }
  set hp (value) {
    if (value !== this._hp) {
      this._hp = value
      this.stopped = true
      this.object.stop()

      this.object.addBehaviour(new Explosion)

      clock.setTimeout(() => {
        this.stopped = false
        this.object.play()
      }, this.attributes.stuck_time * 1000)
    }
  }

  update () {
    if (this.stopped) return false;

    if (!this.praying) {
      this.move()
    } else {
      this.pray()
    }
  }

  move() {
    var nextPoint = {
      x: (Math.cos(this.angle) * 0.01 * clock.deltaTime * ( this.baseVelocity * this.attributes.velocity )),
      y: (Math.sin(this.angle) * 0.01 * clock.deltaTime * ( this.baseVelocity * this.attributes.velocity ))
    }

    if (nextPoint.x > 0) { this.object.scale.x = -1 }

    this.object.x -= nextPoint.x
    this.object.y -= nextPoint.y

    let distance = Math.sqrt(
      Math.pow((this.object.x-this.targetSlot.x), 2) +
      Math.pow((this.object.y-this.targetSlot.y), 2)
    )

    if (distance < 8) {
      playSound('Human_Fem_ScreenEntrance')

      this.praying = true

      if (this.targetSlot.prayers.length) {
        this.object.x += 20 * this.targetSlot.prayers.length
      }
      this.targetSlot.prayers.push(this)
      this.waveController.prayers.push(this)

      this.object.removeChild(this.object.walking)
      this.object.addChild(this.object.praying)
    }
  }

  pray () {
  }

  onDetach () {
    this.object.removeAllListeners()

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

    // this.object.addChild(this.object.dead)
    tweener.add(this.object).to({ alpha: 0 }, 300, Tweener.ease.quintOut).then(() => {
      clock.setTimeout(() => {
        this.object.parent.removeChild(this.object)
      }, 1000)
    })

    // blood effect
    let blood = new Blood
    blood.position.copy(this.object.position)
    this.object.parent.addChild(blood)

    console.log("Detached! Destroy this entity!")
  }

}
