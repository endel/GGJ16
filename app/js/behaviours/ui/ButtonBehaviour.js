import { Behaviour } from 'behaviour.js'

export default class ButtonBehaviour extends Behaviour {

  onAttach () {
    this.object.interactive = true
    this.object.on('mouseover', this.onMouseOver.bind(this))
    this.object.on('mouseout', this.onMouseOut.bind(this))
  }

  onMouseOver () {
    this.object.scale.set(1.1, 1.1)
  }

  onMouseOut () {
    this.object.scale.set(1, 1)
  }

  update () {
    this.object.rotation += 0.01
  }

  onDetach () {
  }

}
