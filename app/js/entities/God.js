// import PrayerBehaviour from '../behaviours/entities/PrayerBehaviour'

export default class God extends PIXI.Container {

  constructor () {
    super()

    this.rotation = 0

    this.serious = new PIXI.Sprite.fromImage('jesus1.png')
    this.serious.y -= 70
    // this.addChild(this.serious)

    this.attack = new PIXI.Sprite.fromImage('jesus2.png')
    this.attack.x -= 70
    this.attack.y -= 70
    // this.addChild(this.attack)

    this.damage = new PIXI.Sprite.fromImage('jesus3.png')
    this.damage.x -= 40
    this.damage.y -= 110
    // this.addChild(this.damage)

    this.lost = new PIXI.Sprite.fromImage('jesus4.png')
    this.lost.x -= 40
    this.lost.y -= 110
    // this.addChild(this.lost)

    this.sleeping = new PIXI.Sprite.fromImage('jesus5.png')
    this.sleeping.x -= 40
    this.sleeping.y -= 110
    // this.addChild(this.sleeping)

    this.setFace('serious')
  }

  setFace (face) {
    if (this.currentFace === face) return

    if (this.currentFace) {
      this.removeChild(this[ this.currentFace ])
    }

    this.currentFace = face
    this.addChild(this[ this.currentFace ])
  }

}

