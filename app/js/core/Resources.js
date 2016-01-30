export default class Resources {

  static load (onLoadComplete) {
    this.onLoadComplete = onLoadComplete

    this.loader = new PIXI.loaders.Loader();
    this.loader.add('spritesheet', "images/spritesheet.json")
    this.loader.add('background', "images/background.png")
    this.loader.on('complete', this.incrementLoader.bind(this))
    this.loader.load();
  }

  // static get () {
  //   this.loader.get
  // }

  static incrementLoader () {
    document.body.className = "loaded"
    clock.setTimeout(() => {
      document.querySelector('.loading').style.display = 'none'
    }, 500)
    this.onLoadComplete()
  }

}

