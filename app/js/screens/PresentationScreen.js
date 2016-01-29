import TitleScreen from './TitleScreen'

import GameScreen from './GameScreen'

export default class PresentationScreen extends PIXI.Container {

  constructor () {
    super()

    this.one = new PIXI.Sprite.fromImage('presentation-1.png')
    this.one.alpha = 0
    this.addChild(this.one)

    this.two = new PIXI.Sprite.fromImage('presentation-2.png')
    this.two.alpha = 0
    this.addChild(this.two)

    this.three = new PIXI.Sprite.fromImage('presentation-3.png')
    this.three.alpha = 0
    this.addChild(this.three)

    this.four = new PIXI.Sprite.fromImage('presentation-4.png')
    this.four.alpha = 0
    this.addChild(this.four)

    tweener.add(this.one).to({ alpha: 1 }, 1000, Tweener.ease.quintOut).then( () => {
      tweener.add(this.one).to({ alpha: 0 }, 500, Tweener.ease.quintOut)

      tweener.add(this.two).to({ alpha: 1 }, 1000, Tweener.ease.quintOut).then( () => {
        tweener.add(this.two).to({ alpha: 0 }, 500, Tweener.ease.quintOut)

        tweener.add(this.three).to({ alpha: 1 }, 1000, Tweener.ease.quintOut).then( () => {
          tweener.add(this.three).to({ alpha: 0 }, 500, Tweener.ease.quintOut)

          tweener.add(this.four).to({ alpha: 1 }, 1000, Tweener.ease.quintOut).then( () => {
            tweener.add(this.four).to({ alpha: 0 }, 500, Tweener.ease.quintOut)

            tweener.add(this.four).to({ alpha: 1 }, 1000, Tweener.ease.quintOut).then( () => {
              this.emit('goto', GameScreen)
            })
          } )
        } )
      } )

    } )

    this.on('dispose', this.onDispose.bind(this))
  }

  onDispose () {
  }

}


