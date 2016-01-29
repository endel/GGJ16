require('pixi-particles')

import Resources from './core/Resources'
import Application from './Application'

// Screens
// import TitleScreen from './screens/TitleScreen'
import GameScreen from './screens/GameScreen'

Resources.load(() => {
  var app = new Application()
  app.gotoScene(GameScreen)
  app.update()
})
