import { Behaviour } from 'behaviour.js'

export default class VillagerBehaviour extends Behaviour {

  onAttach () {
    this.object.addChild(this.object.walking)
  }

  onDetach () {
  }

}
