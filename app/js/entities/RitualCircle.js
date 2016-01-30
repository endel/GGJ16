
import Spot from './Spot'

export default class RitualCircle extends PIXI.Container {

  constructor (god) {
    super()

    var width = 150
      , height = 100
      , rad = 150

    this.god = god

    this.stone = new PIXI.Sprite.fromImage('cabine.png')
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

    if (num === 1) {
      let spot = new Spot
      spot.x = this.width / 2 + 50
      spot.y = this.height + 80
      this.slotInstances.push(spot)
      this.addChild(spot)

    } else if (num === 2) {
      let spot = new Spot
      spot.x = this.width / 2 + 230
      spot.y = this.height / 2 + 20
      this.slotInstances.push(spot)
      this.addChild(spot)

      spot = new Spot
      spot.x = this.width / 2 - 160
      spot.y = this.height / 2 + 20
      this.slotInstances.push(spot)
      this.addChild(spot)

    } else if (num === 3) {
      let spot = new Spot
      spot.x = this.width / 2 + 50
      spot.y = this.height + 80
      this.slotInstances.push(spot)
      this.addChild(spot)

      spot = new Spot
      spot.x = this.width / 2 + 230
      spot.y = this.height / 2 + 20
      this.slotInstances.push(spot)
      this.addChild(spot)

      spot = new Spot
      spot.x = this.width / 2 - 160
      spot.y = this.height / 2 + 20
      this.slotInstances.push(spot)
      this.addChild(spot)

    } else if (num === 4) {
      let spot1 = new Spot
      spot1.x = this.width / 2 + 230
      spot1.y = this.height / 2 - 10
      this.slotInstances.push(spot1)
      this.addChild(spot1)

      let spot2 = new Spot
      spot2.x = this.width / 2 - 160
      spot2.y = this.height / 2 - 10
      this.slotInstances.push(spot2)
      this.addChild(spot2)

      let spot3 = new Spot
      spot3.x = spot1.x
      spot3.y = this.height / 2 + 80
      this.slotInstances.push(spot3)
      this.addChild(spot3)

      let spot4 = new Spot
      spot4.x = spot2.x
      spot4.y = this.height / 2 + 80
      this.slotInstances.push(spot4)
      this.addChild(spot4)

    } else if (num === 5) {
      let spot1 = new Spot
      spot1.x = this.width / 2 + 230
      spot1.y = this.height / 2 - 20
      this.slotInstances.push(spot1)
      this.addChild(spot1)

      let spot2 = new Spot
      spot2.x = this.width / 2 - 160
      spot2.y = this.height / 2 - 20
      this.slotInstances.push(spot2)
      this.addChild(spot2)

      let spot3 = new Spot
      spot3.x = spot1.x
      spot3.y = this.height / 2 + 70
      this.slotInstances.push(spot3)
      this.addChild(spot3)

      let spot4 = new Spot
      spot4.x = spot2.x
      spot4.y = this.height / 2 + 70
      this.slotInstances.push(spot4)
      this.addChild(spot4)

      let spot5 = new Spot
      spot5.x = this.width / 2
      spot5.y = -10
      this.slotInstances.push(spot5)
      this.addChild(spot5)
    }

    this.slotInstances.forEach((spot) => {
      spot.on('click', this.onAction.bind(this, spot))
    })
  }

  onAction (spot, e) {
    this.god.getEntity().emit('action', spot, e.data.global)
    console.log("Action on spot!", spot)
  }

  resize () {
  }

}

