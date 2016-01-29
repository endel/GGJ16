import { getCircPointArray } from '../utils/circle'

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

    this.spotInstances = []
    this.spots = 4

    this.stone.x = width
    this.stone.y = height
    this.addChild(this.stone)
  }

  set spots (num) {
    for (var i=0; i<this.spotInstances.length; i++) {
      // remove spot from parent
      this.spotInstances[i].parent.removeChild(this.spotInstances[i])
    }

    var pointArrayOffset = Math.floor(this.pointArray.length / num)

    for (var i=0; i<num; i++) {
      let position = this.pointArray[ i*pointArrayOffset ]

      let spot = new PIXI.Sprite.fromImage('enemy-spot.png')
      spot.pivot.x = spot.width / 2
      spot.pivot.y = spot.height / 2
      spot.x = position.x
      spot.y = position.y
      this.addChild(spot)
    }
  }

  resize () {
  }

}

