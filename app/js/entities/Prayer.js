// import PrayerBehaviour from '../behaviours/entities/PrayerBehaviour'


export default class Prayer extends PIXI.Container {

  constructor (typeId) {
    super()

    if (typeId === 1) {
      this.walking = new PIXI.extras.MovieClip([
        PIXI.Texture.fromImage('walk0001.png'), PIXI.Texture.fromImage('walk0002.png'), PIXI.Texture.fromImage('walk0003.png'), PIXI.Texture.fromImage('walk0004.png'), PIXI.Texture.fromImage('walk0005.png'), PIXI.Texture.fromImage('walk0006.png'), PIXI.Texture.fromImage('walk0007.png'), PIXI.Texture.fromImage('walk0008.png'), PIXI.Texture.fromImage('walk0009.png'), PIXI.Texture.fromImage('walk0010.png'), PIXI.Texture.fromImage('walk0011.png'), PIXI.Texture.fromImage('walk0012.png'), PIXI.Texture.fromImage('walk0013.png'), PIXI.Texture.fromImage('walk0014.png'), PIXI.Texture.fromImage('walk0015.png'), PIXI.Texture.fromImage('walk0016.png'), PIXI.Texture.fromImage('walk0017.png'), PIXI.Texture.fromImage('walk0018.png'), PIXI.Texture.fromImage('walk0019.png'), PIXI.Texture.fromImage('walk0020.png'), PIXI.Texture.fromImage('walk0021.png'), PIXI.Texture.fromImage('walk0022.png'), PIXI.Texture.fromImage('walk0023.png'), PIXI.Texture.fromImage('walk0024.png'), PIXI.Texture.fromImage('walk0025.png'), PIXI.Texture.fromImage('walk0026.png'), PIXI.Texture.fromImage('walk0027.png'), PIXI.Texture.fromImage('walk0028.png'), PIXI.Texture.fromImage('walk0029.png'), PIXI.Texture.fromImage('walk0030.png'), PIXI.Texture.fromImage('walk0031.png'), PIXI.Texture.fromImage('walk0032.png')
      ])
      this.praying = new PIXI.extras.MovieClip([
        PIXI.Texture.fromImage('Pray0001.png'), PIXI.Texture.fromImage('Pray0002.png'), PIXI.Texture.fromImage('Pray0003.png'), PIXI.Texture.fromImage('Pray0004.png'), PIXI.Texture.fromImage('Pray0005.png'), PIXI.Texture.fromImage('Pray0006.png'), PIXI.Texture.fromImage('Pray0007.png'), PIXI.Texture.fromImage('Pray0008.png'), PIXI.Texture.fromImage('Pray0009.png'), PIXI.Texture.fromImage('Pray0010.png'), PIXI.Texture.fromImage('Pray0011.png'), PIXI.Texture.fromImage('Pray0012.png'), PIXI.Texture.fromImage('Pray0013.png')
      ])

    } else if (typeId === 2) {
      this.walking = new PIXI.extras.MovieClip([
        PIXI.Texture.fromImage('skate_walk0001.png'), PIXI.Texture.fromImage('skate_walk0002.png'), PIXI.Texture.fromImage('skate_walk0003.png'), PIXI.Texture.fromImage('skate_walk0004.png'), PIXI.Texture.fromImage('skate_walk0005.png'), PIXI.Texture.fromImage('skate_walk0006.png'), PIXI.Texture.fromImage('skate_walk0007.png'), PIXI.Texture.fromImage('skate_walk0008.png'), PIXI.Texture.fromImage('skate_walk0009.png'), PIXI.Texture.fromImage('skate_walk0010.png'), PIXI.Texture.fromImage('skate_walk0011.png'), PIXI.Texture.fromImage('skate_walk0012.png'), PIXI.Texture.fromImage('skate_walk0013.png'), PIXI.Texture.fromImage('skate_walk0014.png'), PIXI.Texture.fromImage('skate_walk0015.png'), PIXI.Texture.fromImage('skate_walk0016.png'), PIXI.Texture.fromImage('skate_walk0017.png'), PIXI.Texture.fromImage('skate_walk0018.png'), PIXI.Texture.fromImage('skate_walk0019.png'), PIXI.Texture.fromImage('skate_walk0020.png'), PIXI.Texture.fromImage('skate_walk0021.png'), PIXI.Texture.fromImage('skate_walk0022.png'), PIXI.Texture.fromImage('skate_walk0023.png'), PIXI.Texture.fromImage('skate_walk0024.png'), PIXI.Texture.fromImage('skate_walk0025.png'), PIXI.Texture.fromImage('skate_walk0026.png'), PIXI.Texture.fromImage('skate_walk0027.png')
      ])
      this.praying = new PIXI.extras.MovieClip([
        PIXI.Texture.fromImage('skate_pray0001.png'), PIXI.Texture.fromImage('skate_pray0002.png'), PIXI.Texture.fromImage('skate_pray0003.png'), PIXI.Texture.fromImage('skate_pray0004.png'), PIXI.Texture.fromImage('skate_pray0005.png'), PIXI.Texture.fromImage('skate_pray0006.png'), PIXI.Texture.fromImage('skate_pray0007.png'), PIXI.Texture.fromImage('skate_pray0008.png'), PIXI.Texture.fromImage('skate_pray0009.png'), PIXI.Texture.fromImage('skate_pray0010.png'), PIXI.Texture.fromImage('skate_pray0011.png'), PIXI.Texture.fromImage('skate_pray0012.png'), PIXI.Texture.fromImage('skate_pray0013.png'), PIXI.Texture.fromImage('skate_pray0014.png'),
      ])

    } else if (typeId === 3) {
      this.walking = new PIXI.extras.MovieClip([
        PIXI.Texture.fromImage('unicorn_walk0001.png'), PIXI.Texture.fromImage('unicorn_walk0002.png'), PIXI.Texture.fromImage('unicorn_walk0003.png'), PIXI.Texture.fromImage('unicorn_walk0004.png'), PIXI.Texture.fromImage('unicorn_walk0005.png'), PIXI.Texture.fromImage('unicorn_walk0006.png'), PIXI.Texture.fromImage('unicorn_walk0007.png'), PIXI.Texture.fromImage('unicorn_walk0008.png'), PIXI.Texture.fromImage('unicorn_walk0009.png'), PIXI.Texture.fromImage('unicorn_walk0010.png'), PIXI.Texture.fromImage('unicorn_walk0011.png'), PIXI.Texture.fromImage('unicorn_walk0012.png'), PIXI.Texture.fromImage('unicorn_walk0013.png'),
      ])
      this.praying = new PIXI.extras.MovieClip([
        PIXI.Texture.fromImage('unicorn_pray0001.png'), PIXI.Texture.fromImage('unicorn_pray0002.png'), PIXI.Texture.fromImage('unicorn_pray0003.png'), PIXI.Texture.fromImage('unicorn_pray0004.png'), PIXI.Texture.fromImage('unicorn_pray0005.png'), PIXI.Texture.fromImage('unicorn_pray0006.png'), PIXI.Texture.fromImage('unicorn_pray0007.png'), PIXI.Texture.fromImage('unicorn_pray0008.png'), PIXI.Texture.fromImage('unicorn_pray0009.png'), PIXI.Texture.fromImage('unicorn_pray0010.png'), PIXI.Texture.fromImage('unicorn_pray0011.png'), PIXI.Texture.fromImage('unicorn_pray0012.png'), PIXI.Texture.fromImage('unicorn_pray0013.png'), PIXI.Texture.fromImage('unicorn_pray0014.png'), PIXI.Texture.fromImage('unicorn_pray0015.png'), PIXI.Texture.fromImage('unicorn_pray0016.png'), PIXI.Texture.fromImage('unicorn_pray0017.png'), PIXI.Texture.fromImage('unicorn_pray0018.png')
      ])

    } else if (typeId === 4) {
      this.walking = new PIXI.extras.MovieClip([
        PIXI.Texture.fromImage('unicorn_walk0001.png'), PIXI.Texture.fromImage('unicorn_walk0002.png'), PIXI.Texture.fromImage('unicorn_walk0003.png'), PIXI.Texture.fromImage('unicorn_walk0004.png'), PIXI.Texture.fromImage('unicorn_walk0005.png'), PIXI.Texture.fromImage('unicorn_walk0006.png'), PIXI.Texture.fromImage('unicorn_walk0007.png'), PIXI.Texture.fromImage('unicorn_walk0008.png'), PIXI.Texture.fromImage('unicorn_walk0009.png'), PIXI.Texture.fromImage('unicorn_walk0010.png'), PIXI.Texture.fromImage('unicorn_walk0011.png'), PIXI.Texture.fromImage('unicorn_walk0012.png'), PIXI.Texture.fromImage('unicorn_walk0013.png'),
      ])
      this.praying = new PIXI.extras.MovieClip([
        PIXI.Texture.fromImage('unicorn_pray0001.png'), PIXI.Texture.fromImage('unicorn_pray0002.png'), PIXI.Texture.fromImage('unicorn_pray0003.png'), PIXI.Texture.fromImage('unicorn_pray0004.png'), PIXI.Texture.fromImage('unicorn_pray0005.png'), PIXI.Texture.fromImage('unicorn_pray0006.png'), PIXI.Texture.fromImage('unicorn_pray0007.png'), PIXI.Texture.fromImage('unicorn_pray0008.png'), PIXI.Texture.fromImage('unicorn_pray0009.png'), PIXI.Texture.fromImage('unicorn_pray0010.png'), PIXI.Texture.fromImage('unicorn_pray0011.png'), PIXI.Texture.fromImage('unicorn_pray0012.png'), PIXI.Texture.fromImage('unicorn_pray0013.png'), PIXI.Texture.fromImage('unicorn_pray0014.png'), PIXI.Texture.fromImage('unicorn_pray0015.png'), PIXI.Texture.fromImage('unicorn_pray0016.png'), PIXI.Texture.fromImage('unicorn_pray0017.png'), PIXI.Texture.fromImage('unicorn_pray0018.png')
      ])
    }

    this.walking.pivot.x = this.walking.width / 2
    this.walking.pivot.y = this.walking.height
    this.walking.animationSpeed = 0.2
    this.walking.loop = true

    this.praying.pivot.x = this.praying.width / 2
    this.praying.pivot.y = this.praying.height
    this.praying.animationSpeed = 0.2
    this.praying.loop = true

    // this.dead = new PIXI.extras.MovieClip([
    //   PIXI.Texture.fromImage('enemy-dead.png'),
    // ])
    // this.dead.pivot.x = this.dead.width / 2
    // this.dead.pivot.y = this.dead.width / 2

    this.play()
  }

  play () {
    this.walking.play()
    this.praying.play()
  }

  stop () {
    this.walking.stop()
    this.praying.stop()
  }

}
