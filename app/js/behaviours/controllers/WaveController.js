import { Behaviour } from 'behaviour.js'

import Prayer from '../../entities/Prayer'
import PrayerBehaviour from '../entities/PrayerBehaviour'

var waves = require('../../../config/waves.json')

export default class WaveController extends Behaviour {

  onAttach (progress) {
    this.currentWave = 1
    this.prayers = []
    this.progress = progress

    this.on('start', this.onStart.bind(this))
    this.emit('start')
  }

  onStart () {
    var numIntervals = this.waveConfig.intervals.length
      , waveTimeDelay = this.waveConfig.intervals.sort((a,b) => b.time - a.time)[0].time + (this.nextWaveConfig.delay || 0)

    this.object.slots = this.waveConfig.slots
    for (var i=0; i<numIntervals; i++) {
      let interval = this.waveConfig.intervals[i]
      clock.setTimeout( this.spawn.bind(this, interval), interval.time * 1000 )
    }

    clock.setTimeout( this.gotoNextWave.bind(this), waveTimeDelay * 1000 )
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
        // TODO: evaluate 'config.trajectory' instead of using 'angle'

        prayer.addBehaviour(new PrayerBehaviour, {
          type: config.prayerType,
          targetSlot: targetSlot,
          angle: angle
        }, this)

      this.object.addChild(prayer)
    }

    // console.log(config.comes)
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

