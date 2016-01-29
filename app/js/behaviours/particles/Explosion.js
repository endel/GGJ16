import {Behaviour} from 'behaviour.js'

export default class Explosion extends Behaviour {

  onAttach () {
    this.emitter = new cloudkid.Emitter(this.object, [
      PIXI.Texture.fromImage('character-man-bottom.png')
    ], {
      "alpha": {
        "start": 0.8,
        "end": 0.1
      },
      "scale": {
        "start": 10,
        "end": 1
      },
      "color": {
        "start": "fb1010",
        "end": "f5b830"
      },
      "speed": {
        "start": 200,
        "end": 100
      },
      "startRotation": {
        "min": 0,
        "max": 360
      },
      "rotationSpeed": {
        "min": 0,
        "max": 0
      },
      "lifetime": {
        "min": 0.5,
        "max": 0.5
      },
      "frequency": 0.008,
      // "emitterLifetime": 0.31,
      "emitterLifetime": 0.5,
      "maxParticles": 1000,
      "pos": {
        "x": 0,
        "y": 0
      },
      "addAtBack": false,
      "spawnType": "circle",
      "spawnCircle": {
        "x": 0,
        "y": 0,
        "r": 10
      }
    })

    this.emitter.updateOwnerPos(window.innerWidth / 2, window.innerHeight / 2);
    clock.setTimeout(this.detach.bind(this), 1000)
  }

  update () {
    this.emitter.update(clock.deltaTime * 0.001);
  }

}
