// import PrayerBehaviour from '../behaviours/entities/PrayerBehaviour'

export default class God extends PIXI.Container {

  constructor () {
    super()

    this.face = new PIXI.Container()
    this.face.rotation = 0
    this.face.pivot.x = this.face.width / 2
    this.face.pivot.y = this.face.height / 2
    this.face.x = -180
    this.face.y = -170
    this.addChild(this.face)

    this.rotation = 0

    this.serious = new PIXI.Sprite.fromImage('jesus1.png')
    this.serious.y -= 70
    // this.face.addChild(this.serious)

    this.attack = new PIXI.Sprite.fromImage('jesus2.png')
    this.attack.x -= 70
    this.attack.y -= 70
    // this.face.addChild(this.attack)

    this.attack2 = new PIXI.Sprite.fromImage('jesus7.png')
    this.attack2.x -= 20
    this.attack2.y -= 90
    // this.face.addChild(this.attack2)

    this.attack3 = new PIXI.Sprite.fromImage('jesus8.png')
    this.attack3.x -= 20
    this.attack3.y -= 90
    // this.face.addChild(this.attack3)

    this.attack4 = new PIXI.Sprite.fromImage('jesus10.png')
    this.attack4.x -= 20
    this.attack4.y -= 90
    // this.face.addChild(this.attack4)

    this.damage = new PIXI.Sprite.fromImage('jesus3.png')
    this.damage.x -= 40
    this.damage.y -= 110
    // this.face.addChild(this.damage)

    this.damage2 = new PIXI.Sprite.fromImage('jesus9.png')
    this.damage2.x -= 40
    this.damage2.y -= 110
    // this.face.addChild(this.damage2)

    this.lost = new PIXI.Sprite.fromImage('jesus4.png')
    this.lost.x -= 40
    this.lost.y -= 110
    // this.face.addChild(this.lost)

    this.sleeping = new PIXI.Sprite.fromImage('jesus5.png')
    this.sleeping.x -= 5
    this.sleeping.y -= 60
    // this.face.addChild(this.sleeping)

    this.retard = new PIXI.Sprite.fromImage('jesus6.png')
    this.retard.x -= 40
    this.retard.y -= 110
    // this.face.addChild(this.retard)

    this.punch = new PIXI.Sprite.fromImage('fist.png')
    this.punch.x = -this.punch.width/2
    this.punch.y = -this.punch.height

    var punchMaskMargin = 70
    this.punchMask = new PIXI.Graphics()
    this.punchMask.beginFill(0x000000)
    this.punchMask.drawRect(0, 0, this.punch.width, this.punch.height-punchMaskMargin)
    this.punchMask.x = -this.punch.width/2
    this.punchMask.y = punchMaskMargin
    this.punch.mask = this.punchMask

    this.punchShadow = new PIXI.Sprite.fromImage('fist-shadow.png')
    this.punchShadow.pivot.x = this.punchShadow.width/2
    this.punchShadow.pivot.y = this.punchShadow.height/2
    this.punchShadow.x = 0
    this.punchShadow.y = 540
    this.punchShadow.alpha = 0

    // clock.setTimeout(() => {
    //   this.addChild(this.punchShadow)
    // }, 100)

    this.setFace('serious')
  }

  showPreviewPunch () {
    this.addChild(this.punchShadow)
    tweener.remove(this.punchShadow)
    tweener.add(this.punchShadow).
      to({ alpha: 0.5 }, 500, Tweener.ease.quartOut)
  }

  hidePreviewPunch() {
    if (this.punchShadow.parent) {
      tweener.remove(this.punchShadow)
      tweener.add(this.punchShadow).
        to({ alpha: 0 }, 100, Tweener.ease.quartOut).
        then( () => {
          this.removeChild(this.punchShadow)
        } )
    }
  }

  animatePunch (callback) {
    this.addChild(this.punchShadow)
    this.addChild(this.punch)
    this.addChild(this.punchMask)

    this.punchShadow.scale.set(0.1, 0.1)

    tweener.remove(this.punchShadow.scale)
    tweener.add(this.punchShadow.scale).
      to({ x: 1, y: 1 }, 500, Tweener.ease.quartOut)

    tweener.remove(this.punchShadow)
    tweener.add(this.punchShadow).
      to({ alpha: 1 }, 500, Tweener.ease.quartOut)

    tweener.add(this.punch).
      wait(200).
      to({y: -160}, 400, Tweener.ease.quintOut).
      then(() => {
        callback()

        tweener.add(this.punchShadow).
          wait(200).
          to({ alpha: 0 }, 1200, Tweener.ease.quartOut)

        tweener.add(this.punchShadow.scale).
          wait(200).
          to({ x: 0.1, y: 0.1 }, 800, Tweener.ease.quartOut)

        tweener.add(this.punch).
          wait(100).
          to({y: -this.punch.height}, 300, Tweener.ease.quintOut).then(() => {
            this.removeChild(this.punch)
            this.removeChild(this.punchMask)
          })
      })
  }

  setFace (face) {
    if (this.currentFace === face) return

    if (this.currentFace) {
      this.face.removeChild(this[ this.currentFace ])
    }

    this.currentFace = face
    this.face.addChild(this[ this.currentFace ])
  }

}

