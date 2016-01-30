import { Behaviour } from 'behaviour.js'

import Prayer from '../../entities/Prayer'
import PrayerBehaviour from '../entities/PrayerBehaviour'

var waves = require('../../../config/waves.json')

export default class WaveController extends Behaviour {

  onAttach (options) {
    this.currentWave = 1
    this.activePrayers = 0

    this.god = options.god
    this.prayers = []

    this.progress = options.progress

    this.on('start', this.onStart.bind(this))
    this.emit('start')
  }

  onStart () {
    var numIntervals = this.waveConfig.intervals.length
    this.object.slots = this.waveConfig.slots

    for (var i=0; i<numIntervals; i++) {
      let intervalConfig = this.waveConfig.intervals[i]
        , timeouts = (this.waveConfig.intervals[i].time).toString().split(',')

      for (let i=0; i<intervalConfig.amount; i++) {
        clock.setTimeout( this.spawn.bind(this, intervalConfig), (timeouts[i] || timeouts[0]) * 1000 )
      }
    }
  }

  gotoNextWave () {
    if (this.currentWave < Object.keys(waves).length-1) {
      this.currentWave++
      playSound(['GOD_FB__NewWaveStarted', 'GOD_FB__NewWaveStarted2'])
    } else {
      // keep stuck on last level, make it more difficult
    }

    console.log("Current wave:", this.currentWave)

    this.emit('start')
  }

  spawn (config) {
    if (typeof(config.slotIndex)==="undefined") {
      // TODO: get first random slot
    }

    let prayer = new Prayer(config.prayerType)
      , targetSlot = this.object.slots[ config.destinationSlot ]
      , angle = Math.atan2(targetSlot.y - this.object.stone.y, targetSlot.x - this.object.stone.x)

      // TODO: evaluate 'config.trajectory' instead of using 'angle'
    prayer.behaviour = new PrayerBehaviour
    prayer.interactive = true

    prayer.on('click', this.onAction.bind(this, prayer))
    this.object.addChild(prayer)

    prayer.addBehaviour(prayer.behaviour, {
      type: config.prayerType,
      targetSlot: targetSlot,
      angle: angle
    }, this)
    prayer.behaviour.on('detach', this.onPrayerKilled.bind(this, prayer))

    this.activePrayers++
    // console.log(config.comes)
  }

  onAction (prayer, e) {
    // debugger
    // console.log(e.data.global.x, e.data.global.y)

    this.god.getEntity().emit('action', prayer, e.data.global)
    console.log("Action!", prayer)
  }

  onPrayerKilled () {
    this.activePrayers--
    if (this.activePrayers === 0) {
      clock.setTimeout( this.gotoNextWave.bind(this), (this.nextWaveConfig.delay || 0) * 1000 )
    }
  }

  get nextWaveConfig () {
    let index = (this.currentWave === Object.keys(waves).length-1) ? this.currentWave : this.currentWave+1
    return waves[ index ]
  }

  get waveConfig () {
    return waves[ this.currentWave ]
  }

  update () {
    var efficiency = 0

    for (var i=0; i<this.prayers.length; i++){
      efficiency += this.prayers[ i ].attributes.efficiency
    }

    if (efficiency === 0) efficiency = -0.1

    this.progress.progress += efficiency/1000
  }

  onDetach () {
  }

}
