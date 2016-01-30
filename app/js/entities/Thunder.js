export default class Thunder extends PIXI.Container {

  constructor () {
    super()

    // if (Math.random() > 0.5) {
    if (true) {
      this.thunder1 = new PIXI.Sprite.fromImage('ray1.png')
      this.thunder1.pivot.x = 125 * SCALE_RATIO
      this.thunder1.pivot.y = this.thunder1.height - 100
      this.addChild(this.thunder1)

    } else {
      this.thunder2 = new PIXI.Sprite.fromImage('ray2.png')
      this.thunder2.pivot.x = 380
      this.thunder2.pivot.y = this.thunder2.height - 100
      this.addChild(this.thunder2)
    }

    tweener.add(this).wait(500).to({ alpha: 0 }, 300, Tweener.ease.quintOut).then(() => {
      this.parent.removeChild(this)
    })

  }

}

