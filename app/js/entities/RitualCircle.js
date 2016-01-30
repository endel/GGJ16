import { getCircPointArray } from '../utils/circle'

import Spot from './Spot'

export default class RitualCircle extends PIXI.Container {
  constructor () {
    super()
    var width = 150
      , height = 100
      , rad = 150

    this.pointArray = getCircPointArray(width, height, rad, 1)

    this.stone = new PIXI.Sprite.fromImage('center-stone.png')
    this.stone.pivot.x = this.stone.width / 2
    this.stone.pivot.y = this.stone.height / 2

    this.slotInstances = []

    this.stone.x = width
    this.stone.y = height
    this.addChild(this.stone)
  }

  get slots () {
    return this.slotInstances
  }

  set slots (num) {
    for (var i=0; i<this.slotInstances.length; i++) {
      // remove spot from parent
      this.slotInstances[i].removeAllListeners()
      this.slotInstances[i].parent.removeChild(this.slotInstances[i])
    }
    this.slotInstances = []

    var pointArrayOffset = Math.floor(this.pointArray.length / num)

    for (var i=0; i<num; i++) {
      let position = this.pointArray[ i*pointArrayOffset ]

      let spot = new Spot
      spot.x = position.x
      spot.y = position.y
      spot.on('click', this.onAction.bind(this, spot))

      this.slotInstances.push(spot)
      this.addChild(spot)
    }
  }

  onAction (spot, e) {
    for (var i=0; i<spot.prayers.length; i++) {
      spot.prayers[i].detach()
    }

    console.log("Action!", spot)
  }

  resize () {
  }

}

