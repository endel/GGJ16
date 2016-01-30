export default class Blood extends PIXI.Sprite {

  constructor () {
    super(PIXI.Texture.fromImage('blood.png'))
    this.alpha = 0

    this.pivot.x = this.width / 2
    this.pivot.y = this.height / 2

    this.scale.x = 0.1
    this.scale.y = 0.1

    this.on('added', this.onAdded.bind(this))
  }

  onAdded () {
    tweener.add(this.scale).
      to({ x: 2, y: 2 }, 1500, Tweener.ease.quintOut)

    tweener.add(this).
      to({ alpha: 1 }, 500, Tweener.ease.quintOut).
      wait(3000).
      to({ alpha: 0 }, 5000, Tweener.ease.quintOut).then( () => {
        this.parent.removeChild(this)
      })
  }

}


