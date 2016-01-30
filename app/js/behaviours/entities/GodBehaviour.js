import { Behaviour } from 'behaviour.js'

import Prayer from '../../entities/Prayer'
import Thunder from '../../entities/Thunder'

export default class GodBehaviour extends Behaviour {

  onAttach (options) {
    this.thunderSounds = ['GOD_Attack1_alt1', 'GOD_Attack1_alt2', 'GOD_Attack1_alt3']
    this.killSounds = ['GOD_KilledHuman_01', 'GOD_KilledHuman_02', 'GOD_KilledHuman_03', 'GOD_KilledHuman_04', 'GOD_KilledHuman_05', 'GOD_KilledHuman_06', 'GOD_KilledHuman_07', 'GOD_KilledHuman_08', 'GOD_KilledHuman_09', 'GOD_KilledHuman_10', 'GOD_KilledHuman_11', 'GOD_KilledHuman_12', 'GOD_KilledHuman_13', 'GOD_KilledHuman_14' ]
    this.hitSounds = ['GOD_HitHuman_01', 'GOD_HitHuman_02', 'GOD_HitHuman_03', 'GOD_HitHuman_04', 'GOD_HitHuman_05', 'GOD_HitHuman_06', 'GOD_HitHuman_07' ]

    this.waveController = options.waveController

    this.thunderAction = options.thunderAction
    this.punchAction = options.punchAction
    this.frozenAction = options.frozenAction

    this.killCounter = options.killCounter

    this.interval = clock.setInterval(this.checkStatus.bind(this), 1000)
    this.on('action', this.onAction.bind(this))
  }

  onAction (target, clickPoint) {
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
      } else {
        playSound(this.hitSounds)
      }

      thunder.x = target.x
      thunder.y = target.y
      this.object.parent.addChild(thunder)

      this.object.rotation = 0
      this.object.setFace('attack')
      this.interval.elapsedTime = 0

      tweener.remove(this.object)
      tweener.add(this.object).
        to({ rotation: 0.1 }, 500, Tweener.ease.quintOut).
        to({ rotation: 0 }, 200, Tweener.ease.quintOut)

    } else {
      playSound('GOD_FB__0MANAWarning')

      var originX = parseInt(this.thunderAction.x)

      // shake
      tweener.add(this.thunderAction).
        to({ x: originX + 10 }, 80, Tweener.ease.quintOut).
        to({ x: originX - 10 }, 80, Tweener.ease.quintOut).
        to({ x: originX + 10 }, 80, Tweener.ease.quintOut).
        to({ x: originX - 10 }, 80, Tweener.ease.quintOut).
        to({ x: originX }, 80, Tweener.ease.quintOut)

    }

  }

  checkStatus () {
    if (this.waveController.prayers.length > 0 && this.object.currentFace !== 'attack') {
      this.object.setFace('damage')
      tweener.add(this.object).
        to({ rotation: -0.1 }, 500, Tweener.ease.bounceOut).
        to({ rotation: 0 }, 200, Tweener.ease.quintOut)

    } else {
      this.object.setFace('serious')
    }
  }

  update () {
  }

  onDetach () {
    this.interval.clear()
  }

}

