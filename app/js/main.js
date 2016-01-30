require('pixi-particles')

import Resources from './core/Resources'
import Application from './Application'

// Screens
import TitleScreen from './screens/TitleScreen'
import GameScreen from './screens/GameScreen'

Resources.load(() => {
  window.APP = new Application()
  APP.gotoScene(GameScreen)
  // APP.gotoScene(TitleScreen)
  APP.update()
})
