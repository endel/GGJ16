import { Behaviour } from 'behaviour.js'

import Prayer from '../../entities/Prayer'
import Thunder from '../../entities/Thunder'

export default class GodBehaviour extends Behaviour {

  onAttach (options) {
    this.thunderSounds = ['GOD_Attack1_alt1', 'GOD_Attack1_alt2', 'GOD_Attack1_alt3']
    this.killSounds = ['GOD_KilledHuman_01', 'GOD_KilledHuman_02', 'GOD_KilledHuman_03', 'GOD_KilledHuman_04', 'GOD_KilledHuman_05', 'GOD_KilledHuman_06', 'GOD_KilledHuman_07', 'GOD_KilledHuman_08', 'GOD_KilledHuman_09', 'GOD_KilledHuman_10', 'GOD_KilledHuman_11', 'GOD_KilledHuman_12', 'GOD_KilledHuman_13', 'GOD_KilledHuman_14' ]
    this.hitSounds = ['GOD_HitHuman_01', 'GOD_HitHuman_02', 'GOD_HitHuman_03', 'GOD_HitHuman_04', 'GOD_HitHuman_05', 'GOD_HitHuman_06', 'GOD_HitHuman_07' ]
    this.killSmashSounds = [ 'Human_Man_KILL_01', 'Human_Man_KILL_02', 'Human_Man_KILL_03' ]

    this.waveController = options.waveController

    this.thunderAction = options.thunderAction
    this.punchAction = options.punchAction
    this.frozenAction = options.frozenAction

    this.killCounter = options.killCounter

    this.punchAction.interactive = true
    this.punchAction.on('click', this.onPunchAction.bind(this))
    this.punchAction.on('touchstart', this.onPunchAction.bind(this))

    this.interval = clock.setInterval(this.checkStatus.bind(this), 1000)
    this.on('action', this.onThunderAction.bind(this))
  }

  onThunderAction (target, clickPoint) {
    if (this.thunderAction.isAvailable) {
      playSound(this.thunderSounds)

      this.thunderAction.getEntity().emit('use')

      var thunder = new Thunder
        , killed = false

      if (target instanceof Prayer) {
        target.behaviour.hp--;
        if (target.behaviour.hp <= 0) {
          this.killCounter.increment()
          target.behaviour.detach()
          killed = true
        }
        thunder.x = target.x
        thunder.y = target.y

      } else {
        for (var i=0; i<target.prayers.length; i++) {
          let prayerBehaviour = target.prayers[i]
          prayerBehaviour.hp--;

          if (prayerBehaviour.hp <= 0) {
            this.killCounter.increment()
            prayerBehaviour.detach()
            killed = true
          }

          thunder.x = prayerBehaviour.x
          thunder.y = prayerBehaviour.y
        }
      }

      if (killed) {
        playSound(this.killSounds)
        playSound(this.killSmashSounds)
      } else {
        playSound(this.hitSounds)
      }

      thunder.x = target.x
      thunder.y = target.y
      this.object.parent.addChild(thunder)

      this.object.face.rotation = 0
      this.object.setFace('attack')
      this.interval.elapsedTime = 0

      tweener.remove(this.object.face)
      tweener.add(this.object.face).
        to({ rotation: 0.1 }, 500, Tweener.ease.quintOut).
        to({ rotation: 0 }, 200, Tweener.ease.quintOut)

    } else {
      this.noManaWarning()

      if (!this.thunderActionOriginX) {
        this.thunderActionOriginX = this.thunderAction.x
      }

      // shake
      tweener.remove(this.thunderAction)
      tweener.add(this.thunderAction).
        to({ x: this.thunderActionOriginX + 10 }, 80, Tweener.ease.quintOut).
        to({ x: this.thunderActionOriginX - 10 }, 80, Tweener.ease.quintOut).
        to({ x: this.thunderActionOriginX + 10 }, 80, Tweener.ease.quintOut).
        to({ x: this.thunderActionOriginX - 10 }, 80, Tweener.ease.quintOut).
        to({ x: this.thunderActionOriginX }, 80, Tweener.ease.quintOut)
    }

  }

  onPunchAction () {
    if (this.punchAction.isAvailable) {
      playSound('GOD_Attack2_START')

      this.punchAction.getEntity().emit('use')
      this.object.animatePunch(() => {
        let killed = false
        for (var i=0; i<this.waveController.object.slots.length; i++) {
          let slot = this.waveController.object.slots[i]
          slot.prayers.forEach(prayer => {
            prayer.hp -= 5
            if (prayer.hp <= 0) {
              killed = true
              this.killCounter.increment()
              prayer.detach()
            }
          })
        }

        if (killed) {
          playSound(this.killSmashSounds)
        }
      })

    } else {
      this.noManaWarning()

      if (!this.punchActionOriginX) {
        this.punchActionOriginX = this.punchAction.x
      }

      // shake
      tweener.remove(this.punchAction)
      tweener.add(this.punchAction).
        to({ x: this.punchActionOriginX + 10 }, 80, Tweener.ease.quintOut).
        to({ x: this.punchActionOriginX - 10 }, 80, Tweener.ease.quintOut).
        to({ x: this.punchActionOriginX + 10 }, 80, Tweener.ease.quintOut).
        to({ x: this.punchActionOriginX - 10 }, 80, Tweener.ease.quintOut).
        to({ x: this.punchActionOriginX }, 80, Tweener.ease.quintOut)
    }

  }

  checkStatus () {
    if (this.waveController.prayers.length > 0 && this.object.currentFace !== 'attack') {
      this.object.setFace('damage')
      tweener.add(this.object.face).
        to({ rotation: -0.1 }, 500, Tweener.ease.bounceOut).
        to({ rotation: 0 }, 200, Tweener.ease.quintOut)

    } else {
      this.object.setFace('serious')
    }
  }

  update () {
  }

  noManaWarning () {
    if (!this.warningTimeout || !this.warningTimeout.active) {
      playSound('GOD_FB__0MANAWarning')
      this.warningTimeout = clock.setTimeout(() => {}, 2000)
    }
  }

  onDetach () {
    this.interval.clear()
  }

}

