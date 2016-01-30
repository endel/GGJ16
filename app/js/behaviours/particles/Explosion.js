import {Behaviour} from 'behaviour.js'

export default class Explosion extends Behaviour {

  onAttach () {
    this.emitter = new cloudkid.Emitter(this.object, [
      PIXI.Texture.fromImage('blood.png'),
    ], {
      "alpha": {
        "start": 0.8,
        "end": 0.1
      },
      // "scale": {
      //   "start": 1,
      //   "end": 1
      // },
      "color": {
        "start": "fb1010",
        "end": "f5b830"
      },
      "speed": {
        "start": 150,
        "end": 90
      },
      "startRotation": {
        "min": 45,
        "max": 135
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
      "emitterLifetime": 0.2,
      "maxParticles": 1000,
      "pos": {
        "x": 0,
        "y": -45
      },
      "addAtBack": false,
      "spawnType": "circle",
      "spawnCircle": {
        "x": 0,
        "y": 0,
        "r": 10
      }
    })

    // this.emitter.updateOwnerPos(this.object.x, this.object.y);
    clock.setTimeout(this.detach.bind(this), 1000)
  }

  update () {
    this.emitter.update(clock.deltaTime * 0.001);
  }

}
