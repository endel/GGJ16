require('pixi-particles')

import Resources from './core/Resources'
import Application from './Application'
import { Howl, Howler } from 'howler'

// Screens
import GameScreen from './screens/GameScreen'
import SplashScreen from './screens/SplashScreen'
import GameOverScreen from './screens/GameOverScreen'

console.log(require('../config/sound_effects.json'))
window.sounds = new Howl(require('../config/sound_effects.json'));
window.music = new Howl(require('../config/music.json'));

window.currentMusic = null

var lastSoundPlayed = {}
window.playSound = function(alternatives) {
  if (typeof(alternatives)==="string") {
    return sounds.play(alternatives)

  } else {
    // play a different sound every time it's called
    var i = 999;
    do {
      i = Math.floor(Math.random() * alternatives.length)
    } while (i === lastSoundPlayed[ alternatives ])

    lastSoundPlayed[ alternatives ] = i
    return sounds.play(alternatives[i])
  }
}

Resources.load(() => {
  window.APP = new Application()
  APP.gotoScene(SplashScreen)

  // APP.gotoScene(GameOverScreen)
  // APP.gotoScene(GameScreen)
  // APP.gotoScene(TitleScreen)
  APP.update()
})
