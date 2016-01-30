require('pixi-particles')

import Resources from './core/Resources'
import Application from './Application'
import { Howl, Howler } from 'howler'

// Screens
import TitleScreen from './screens/TitleScreen'
import GameScreen from './screens/GameScreen'

console.log(require('../config/sound_effects.json'))
window.sounds = new Howl(require('../config/sound_effects.json'));
window.music = new Howl(require('../config/music.json'));

sounds.on('load', () => {
  console.log("Effects loaded")
})
music.on('load', () => {
  console.log("Music loaded")
})

window.playSound = function(alternatives) {
  if (typeof(alternatives)==="string") {
    sounds.play(alternatives)

  } else {
    var i = Math.floor(Math.random() * alternatives.length)
    sounds.play(alternatives[i])
  }
}

Resources.load(() => {
  window.APP = new Application()
  APP.gotoScene(GameScreen)
  // APP.gotoScene(TitleScreen)
  APP.update()
})
