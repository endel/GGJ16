export default class Blood extends PIXI.Sprite {

  constructor () {
    super(PIXI.Texture.fromImage('blood.png'))
    this.alpha = 0

    this.pivot.x = this.width / 2
    this.pivot.y = 0

    this.scale.x = 0.4
    this.scale.y = 0.4

    this.on('added', this.onAdded.bind(this))
  }

  onAdded () {
    tweener.add(this.scale).
      to({ x: 2, y: 2 }, 1500, Tweener.ease.quintOut)

    tweener.add(this).
      to({ alpha: 1 }, 500, Tweener.ease.quintOut).
      wait(3000).
      to({ alpha: 0 }, 10000, Tweener.ease.quintOut).then( () => {
        this.parent.removeChild(this)
      })
  }

}


