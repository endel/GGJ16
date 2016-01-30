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
      this.action1.getEntity().emit('use')

      if (target instanceof Prayer) {
        target.behaviour.detach()

      } else {
        for (var i=0; i<target.prayers.length; i++) {
          target.prayers[i].detach()
        }
      }

      var thunder = new Thunder
      thunder.x = clickPoint.x
      thunder.y = clickPoint.y
      this.object.parent.addChild(thunder)

      this.object.rotation = 0
      this.object.setFace('attack')
      this.interval.elapsedTime = 0

      tweener.remove(this.object)
      tweener.add(this.object).
        to({ rotation: 0.1 }, 500, Tweener.ease.quintOut).
        to({ rotation: 0 }, 200, Tweener.ease.quintOut)

    } else {
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

