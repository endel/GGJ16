// import PrayerBehaviour from '../behaviours/entities/PrayerBehaviour'

export default class Prayer extends PIXI.Container {

  constructor () {
    super()

    this.walking = new PIXI.extras.MovieClip([
      PIXI.Texture.fromImage('enemy-step-0.png'),
      PIXI.Texture.fromImage('enemy-step-1.png'),
    ])
    this.walking.pivot.x = this.walking.width / 2
    this.walking.pivot.y = this.walking.width / 2
    this.walking.animationSpeed = 0.1
    this.walking.loop = true
    this.walking.play()

    this.praying = new PIXI.extras.MovieClip([
      PIXI.Texture.fromImage('enemy-praying-0.png'),
      PIXI.Texture.fromImage('enemy-praying-1.png'),
    ])
    this.praying.pivot.x = this.praying.width / 2
    this.praying.pivot.y = this.praying.width / 2
    this.praying.animationSpeed = 0.1
    this.praying.loop = true
    this.praying.play()

    this.dead = new PIXI.extras.MovieClip([
      PIXI.Texture.fromImage('enemy-dead.png'),
    ])
    this.dead.pivot.x = this.dead.width / 2
    this.dead.pivot.y = this.dead.width / 2
  }

}
