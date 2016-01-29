import VillagerBehaviour from '../behaviours/entities/VillagerBehaviour'

export default class Villager extends PIXI.extras.MovieClip {
  constructor () {
    super()

    this.walking = new PIXI.extras.MovieClip([
      PIXI.Texture.fromImage('enemy-step-0'),
      PIXI.Texture.fromImage('enemy-step-1'),
    ])

    this.praying = new PIXI.extras.MovieClip([
      PIXI.Texture.fromImage('enemy-praying-0'),
      PIXI.Texture.fromImage('enemy-praying-1'),
    ])

    this.addBehaviour(new VillagerBehaviour)
  }
}
