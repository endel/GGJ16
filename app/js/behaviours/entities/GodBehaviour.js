import { Behaviour } from 'behaviour.js'

import Prayer from '../../entities/Prayer'
import Thunder from '../../entities/Thunder'

export default class GodBehaviour extends Behaviour {

  onAttach (options) {
    this.waveController = options.waveController
    this.action1 = options.action1
    this.action2 = options.action2

    this.interval = clock.setInterval(this.checkStatus.bind(this), 1000)
    this.on('action', this.onAction.bind(this))
  }

  onAction (target, clickPoint) {
    if (this.action1.isAvailable) {
      playSound(['GOD_Attack1_alt1', 'GOD_Attack1_alt2', 'GOD_Attack1_alt3'])
      // playSound(['GOD_HitHuman_01', 'GOD_HitHuman_02', 'GOD_HitHuman_03', 'GOD_HitHuman_04', 'GOD_HitHuman_05', 'GOD_HitHuman_06', 'GOD_HitHuman_07' ])
      playSound(['GOD_KilledHuman_01', 'GOD_KilledHuman_02', 'GOD_KilledHuman_03', 'GOD_KilledHuman_04', 'GOD_KilledHuman_05', 'GOD_KilledHuman_06', 'GOD_KilledHuman_07', 'GOD_KilledHuman_08', 'GOD_KilledHuman_09', 'GOD_KilledHuman_10', 'GOD_KilledHuman_11', 'GOD_KilledHuman_12', 'GOD_KilledHuman_13', 'GOD_KilledHuman_14' ])

      this.action1.getEntity().emit('use')

      var thunder = new Thunder

      if (target instanceof Prayer) {
        target.behaviour.detach()
        thunder.x = target.x
        thunder.y = target.y

      } else {
        for (var i=0; i<target.prayers.length; i++) {
          target.prayers[i].detach()
          thunder.x = target.prayers[i].x
          thunder.y = target.prayers[i].y
        }
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

      var originX = parseInt(this.action1.x)

      // shake
      tweener.add(this.action1).
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

