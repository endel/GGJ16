import { Behaviour } from 'behaviour.js'

import Prayer from '../../entities/Prayer'
import PrayerBehaviour from '../entities/PrayerBehaviour'

var waves = require('../../../config/waves.json')

export default class WaveController extends Behaviour {

  onAttach (progress) {
    this.currentWave = 1
    this.activePrayers = 0

    this.prayers = []
    this.progress = progress

    this.on('start', this.onStart.bind(this))
    this.emit('start')
  }

  onStart () {
    var numIntervals = this.waveConfig.intervals.length
    this.object.slots = this.waveConfig.slots

    for (var i=0; i<numIntervals; i++) {
      let interval = this.waveConfig.intervals[i]
      clock.setTimeout( this.spawn.bind(this, interval), interval.time * 1000 )
    }
  }

  gotoNextWave () {
    if (this.currentWave < Object.keys(waves).length-1) {
      this.currentWave++
    } else {
      // keep stuck on last level, make it more difficult
    }
    this.emit('start')
  }

  spawn (config) {
    if (typeof(config.slotIndex)==="undefined") {
      // TODO: get first random slot
    }

    for (let i=0; i<config.amount; i++) {
      let prayer = new Prayer
        , targetSlot = this.object.slots[ config.destinationSlot ]
        , angle = Math.atan2(targetSlot.y - this.object.stone.y, targetSlot.x - this.object.stone.x)
        , prayerBehaviour = new PrayerBehaviour
        // TODO: evaluate 'config.trajectory' instead of using 'angle'

      prayer.addBehaviour(prayerBehaviour, {
        type: config.prayerType,
        targetSlot: targetSlot,
        angle: angle
      }, this)
      prayerBehaviour.on('detach', this.onPrayerKilled.bind(this, prayer))

      this.activePrayers++
      this.object.addChild(prayer)
    }

    // console.log(config.comes)
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
