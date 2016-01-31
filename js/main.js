(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
  "urls": [
    "sound/music.ogg",
    "sound/music.m4a",
    "sound/music.mp3",
    "sound/music.ac3"
  ],
  "sprite": {
    "loop": [
      0,
      59112.01814058957,
      true
    ],
    "title_screen": [
      61000,
      59112.01814058957,
      true
    ]
  }
}
},{}],2:[function(require,module,exports){
module.exports={
  1: {
    "velocity": 1,
    "efficiency": 1,
    "hp": 1
  },
  2: {
    "velocity": 1,
    "efficiency": 1.2,
    "stuck_time": 0.8,
    "hp": 2
  },
  3: {
    "velocity": 1,
    "efficiency": 1.5,
    "stuck_time": 0.5,
    "hp": 3
  },
  4: {
    "velocity": 1,
    "efficiency": 2,
    "stuck_time": 0.6,
    "hp": 4
  }
}

},{}],3:[function(require,module,exports){
module.exports={
  "urls": [
    "sound/sound_effects.ogg",
    "sound/sound_effects.m4a",
    "sound/sound_effects.mp3",
    "sound/sound_effects.ac3"
  ],
  "sprite": {
    "GOD_Attack1_alt1": [
      0,
      987.437641723356
    ],
    "GOD_Attack1_alt2": [
      2000,
      876.1678004535147
    ],
    "GOD_Attack1_alt3": [
      4000,
      1972.2675736961453
    ],
    "GOD_Attack2_FINISH": [
      7000,
      964.512471655329
    ],
    "GOD_Attack2_START": [
      9000,
      855.8503401360547
    ],
    "GOD_FB__0MANAWarning": [
      11000,
      869.5918367346937
    ],
    "GOD_FB__5PlusKillsAtOnce": [
      13000,
      1837.7777777777774
    ],
    "GOD_FB__7PlusKillsAtOnce": [
      16000,
      1498.9569160997717
    ],
    "GOD_FB__HighscoreObtained": [
      19000,
      1213.922902494332
    ],
    "GOD_FB__NewPowerUnlocked": [
      22000,
      1293.9909297052168
    ],
    "GOD_FB__NewWaveStarted": [
      25000,
      950.181405895691
    ],
    "GOD_FB__NewWaveStarted2": [
      27000,
      531.0204081632648
    ],
    "GOD_HitHuman_01": [
      29000,
      644.1043083900233
    ],
    "GOD_HitHuman_02": [
      31000,
      783.5374149659878
    ],
    "GOD_HitHuman_03": [
      33000,
      336.7346938775526
    ],
    "GOD_HitHuman_04": [
      35000,
      385.1247165532854
    ],
    "GOD_HitHuman_05": [
      37000,
      1140.5668934240366
    ],
    "GOD_HitHuman_06": [
      40000,
      377.50566893424065
    ],
    "GOD_HitHuman_07": [
      42000,
      597.8911564625876
    ],
    "GOD_KilledHuman_01": [
      44000,
      791.972789115647
    ],
    "GOD_KilledHuman_02": [
      46000,
      517.4829931972766
    ],
    "GOD_KilledHuman_03": [
      48000,
      790.0453514739212
    ],
    "GOD_KilledHuman_04": [
      50000,
      594.5804988662146
    ],
    "GOD_KilledHuman_05": [
      52000,
      734.8072562358254
    ],
    "GOD_KilledHuman_06": [
      54000,
      830.544217687077
    ],
    "GOD_KilledHuman_07": [
      56000,
      1352.9024943310687
    ],
    "GOD_KilledHuman_08": [
      59000,
      888.684807256233
    ],
    "GOD_KilledHuman_09": [
      61000,
      885.0113378684839
    ],
    "GOD_KilledHuman_10": [
      63000,
      405.71428571428214
    ],
    "GOD_KilledHuman_11": [
      65000,
      553.6281179138314
    ],
    "GOD_KilledHuman_12": [
      67000,
      396.30385487528486
    ],
    "GOD_KilledHuman_13": [
      69000,
      0
    ],
    "GOD_KilledHuman_14": [
      70000,
      1064.6712018140647
    ],
    "God_IntroScreen_Snoring": [
      73000,
      3200.4988662131523,
      true
    ],
    "Human_All_Walking_loop": [
      78000,
      5008.707482993203
    ],
    "Human_Fem_HIT_01": [
      85000,
      338.775510204087
    ],
    "Human_Fem_HIT_02": [
      87000,
      858.1405895691603
    ],
    "Human_Fem_HIT_03": [
      89000,
      1349.5011337868448
    ],
    "Human_Fem_HIT_04": [
      92000,
      698.7301587301573
    ],
    "Human_Fem_ScreenEntrance": [
      94000,
      975.2380952380975
    ],
    "Human_Man_HIT_01": [
      96000,
      406.16780045351675
    ],
    "Human_Man_HIT_02": [
      98000,
      473.3786848072583
    ],
    "Human_Man_HIT_03": [
      100000,
      426.5079365079316
    ],
    "Human_Man_HIT_04": [
      102000,
      1090.1360544217623
    ],
    "Human_Man_HIT_05": [
      105000,
      1036.5759637188175
    ],
    "Human_Man_HIT_06": [
      108000,
      333.65079365079
    ],
    "Human_Man_HIT_07": [
      110000,
      355.4875283446677
    ],
    "Human_Man_HIT_08": [
      112000,
      313.65079365079396
    ],
    "Human_Man_HIT_09": [
      114000,
      424.9433106575964
    ],
    "Human_Man_KILL_01": [
      116000,
      1058.0272108843474
    ],
    "Human_Man_KILL_02": [
      119000,
      627.5510204081627
    ],
    "Human_Man_KILL_03": [
      121000,
      594.5351473922926
    ],
    "Humans_Ennemy2_Skate": [
      123000,
      848.5260770975032
    ],
    "Humans_Ennemy3_Bike": [
      125000,
      1064.036281179142
    ],
    "Humans_EnnemyMale_PrayStart": [
      128000,
      1242.0634920634939
    ],
    "UI_Button": [
      131000,
      357.1428571428612
    ],
    "gameover": [
      133000,
      3496.780045351471
    ]
  }
}
},{}],4:[function(require,module,exports){
module.exports={
1: {
"slots": 1,
"delay": 0,
"intervals": [
{ prayerType:1,destinationSlot:0,time:"0",amount:1,trajectory:6},
{ prayerType:1,destinationSlot:1,time:"0",amount:0,trajectory:0},
{ prayerType:1,destinationSlot:2,time:"0",amount:0,trajectory:0},
{ prayerType:1,destinationSlot:3,time:"0",amount:0,trajectory:0},
{ prayerType:1,destinationSlot:4,time:"0",amount:0,trajectory:0},
]
},
2: {
"slots": 1,
"delay": 1,
"intervals": [
{ prayerType:2,destinationSlot:0,time:"0",amount:1,trajectory:2},
{ prayerType:2,destinationSlot:1,time:"0",amount:0,trajectory:0},
{ prayerType:2,destinationSlot:2,time:"0",amount:0,trajectory:0},
{ prayerType:2,destinationSlot:3,time:"0",amount:0,trajectory:0},
{ prayerType:2,destinationSlot:4,time:"0",amount:0,trajectory:0},
]
},
3: {
"slots": 1,
"delay": 1,
"intervals": [
{ prayerType:1,destinationSlot:0,time:"0",amount:1,trajectory:6},
{ prayerType:1,destinationSlot:1,time:"0",amount:0,trajectory:0},
{ prayerType:1,destinationSlot:2,time:"0",amount:0,trajectory:0},
{ prayerType:1,destinationSlot:3,time:"0",amount:0,trajectory:0},
{ prayerType:1,destinationSlot:4,time:"0",amount:0,trajectory:0},
]
},
4: {
"slots": 2,
"delay": 1,
"intervals": [
{ prayerType:1,destinationSlot:0,time:"0",amount:1,trajectory:6},
{ prayerType:2,destinationSlot:1,time:"0",amount:1,trajectory:2},
{ prayerType:1,destinationSlot:2,time:"0",amount:0,trajectory:0},
{ prayerType:1,destinationSlot:3,time:"0",amount:0,trajectory:0},
{ prayerType:1,destinationSlot:4,time:"0",amount:0,trajectory:0},
]
},
5: {
"slots": 2,
"delay": 1,
"intervals": [
{ prayerType:2,destinationSlot:0,time:"0",amount:1,trajectory:7},
{ prayerType:1,destinationSlot:1,time:"0",amount:1,trajectory:3},
{ prayerType:1,destinationSlot:2,time:"0",amount:0,trajectory:0},
{ prayerType:1,destinationSlot:3,time:"0",amount:0,trajectory:0},
{ prayerType:1,destinationSlot:4,time:"0",amount:0,trajectory:0},
]
},
6: {
"slots": 2,
"delay": 1,
"intervals": [
{ prayerType:2,destinationSlot:0,time:"0",amount:1,trajectory:4},
{ prayerType:2,destinationSlot:1,time:"0",amount:1,trajectory:0},
{ prayerType:1,destinationSlot:2,time:"0",amount:0,trajectory:0},
{ prayerType:1,destinationSlot:3,time:"0",amount:0,trajectory:0},
{ prayerType:1,destinationSlot:4,time:"0",amount:0,trajectory:0},
]
},
7: {
"slots": 3,
"delay": 1,
"intervals": [
{ prayerType:2,destinationSlot:0,time:"0",amount:1,trajectory:7},
{ prayerType:1,destinationSlot:1,time:"0",amount:1,trajectory:4},
{ prayerType:2,destinationSlot:2,time:"0",amount:1,trajectory:1},
{ prayerType:1,destinationSlot:3,time:"0",amount:0,trajectory:0},
{ prayerType:1,destinationSlot:4,time:"0",amount:0,trajectory:0},
]
},
8: {
"slots": 3,
"delay": 1,
"intervals": [
{ prayerType:3,destinationSlot:0,time:"0",amount:1,trajectory:4},
{ prayerType:1,destinationSlot:1,time:"0",amount:1,trajectory:4},
{ prayerType:3,destinationSlot:2,time:"0",amount:1,trajectory:4},
{ prayerType:1,destinationSlot:3,time:"0",amount:0,trajectory:0},
{ prayerType:1,destinationSlot:4,time:"0",amount:0,trajectory:0},
]
},
9: {
"slots": 3,
"delay": 1,
"intervals": [
{ prayerType:3,destinationSlot:0,time:"0",amount:1,trajectory:5},
{ prayerType:2,destinationSlot:1,time:"0",amount:1,trajectory:4},
{ prayerType:3,destinationSlot:2,time:"0",amount:1,trajectory:3},
{ prayerType:1,destinationSlot:3,time:"0",amount:0,trajectory:0},
{ prayerType:1,destinationSlot:4,time:"0",amount:0,trajectory:0},
]
},
10: {
"slots": 4,
"delay": 1,
"intervals": [
{ prayerType:3,destinationSlot:0,time:"0",amount:1,trajectory:7},
{ prayerType:1,destinationSlot:1,time:"0",amount:1,trajectory:5},
{ prayerType:3,destinationSlot:2,time:"0",amount:1,trajectory:3},
{ prayerType:2,destinationSlot:3,time:"0",amount:1,trajectory:1},
{ prayerType:1,destinationSlot:4,time:"0",amount:0,trajectory:0},
]
},
11: {
"slots": 4,
"delay": 1,
"intervals": [
{ prayerType:2,destinationSlot:0,time:"0",amount:1,trajectory:6},
{ prayerType:2,destinationSlot:1,time:"0",amount:1,trajectory:3},
{ prayerType:2,destinationSlot:2,time:"0",amount:1,trajectory:5},
{ prayerType:2,destinationSlot:3,time:"0",amount:1,trajectory:2},
{ prayerType:1,destinationSlot:4,time:"0",amount:0,trajectory:0},
]
},
12: {
"slots": 4,
"delay": 1,
"intervals": [
{ prayerType:3,destinationSlot:0,time:"0",amount:1,trajectory:7},
{ prayerType:3,destinationSlot:1,time:"0",amount:1,trajectory:6},
{ prayerType:3,destinationSlot:2,time:"0",amount:1,trajectory:3},
{ prayerType:3,destinationSlot:3,time:"0",amount:1,trajectory:2},
{ prayerType:1,destinationSlot:4,time:"0",amount:0,trajectory:0},
]
},
13: {
"slots": 4,
"delay": 1,
"intervals": [
{ prayerType:1,destinationSlot:0,time:"0",amount:1,trajectory:6},
{ prayerType:1,destinationSlot:1,time:"0",amount:1,trajectory:5},
{ prayerType:1,destinationSlot:2,time:"0",amount:1,trajectory:2},
{ prayerType:1,destinationSlot:3,time:"0",amount:1,trajectory:1},
{ prayerType:1,destinationSlot:4,time:"0",amount:0,trajectory:0},
]
},
14: {
"slots": 5,
"delay": 1,
"intervals": [
{ prayerType:3,destinationSlot:0,time:"0",amount:1,trajectory:6},
{ prayerType:2,destinationSlot:1,time:"0",amount:1,trajectory:3},
{ prayerType:1,destinationSlot:2,time:"0",amount:1,trajectory:4},
{ prayerType:2,destinationSlot:3,time:"0",amount:1,trajectory:5},
{ prayerType:3,destinationSlot:4,time:"0",amount:1,trajectory:2},
]
},
15: {
"slots": 5,
"delay": 1,
"intervals": [
{ prayerType:2,destinationSlot:0,time:"0",amount:1,trajectory:7},
{ prayerType:1,destinationSlot:1,time:"0",amount:1,trajectory:5},
{ prayerType:3,destinationSlot:2,time:"0",amount:1,trajectory:4},
{ prayerType:1,destinationSlot:3,time:"0",amount:1,trajectory:3},
{ prayerType:2,destinationSlot:4,time:"0",amount:1,trajectory:1},
]
},
16: {
"slots": 5,
"delay": 1,
"intervals": [
{ prayerType:1,destinationSlot:0,time:"0,1000",amount:2,trajectory:7},
{ prayerType:1,destinationSlot:1,time:"0,1000",amount:2,trajectory:5},
{ prayerType:1,destinationSlot:2,time:"0,1000",amount:2,trajectory:4},
{ prayerType:1,destinationSlot:3,time:"0,1000",amount:2,trajectory:3},
{ prayerType:1,destinationSlot:4,time:"0,1000",amount:2,trajectory:1},
]
},
17: {
"slots": 5,
"delay": 1,
"intervals": [
{ prayerType:2,destinationSlot:0,time:"0,1000,2000",amount:3,trajectory:7},
{ prayerType:2,destinationSlot:1,time:"0,1000,2000",amount:3,trajectory:5},
{ prayerType:2,destinationSlot:2,time:"0,1000,2000",amount:3,trajectory:4},
{ prayerType:2,destinationSlot:3,time:"0,1000,2000",amount:3,trajectory:3},
{ prayerType:2,destinationSlot:4,time:"0,1000,2000",amount:3,trajectory:1},
]
},
18: {
"slots": 5,
"delay": 1,
"intervals": [
{ prayerType:3,destinationSlot:0,time:"0,1000,2000,3000",amount:4,trajectory:7},
{ prayerType:3,destinationSlot:1,time:"0,1000,2000,3000",amount:4,trajectory:5},
{ prayerType:3,destinationSlot:2,time:"0,1000,2000,3000",amount:4,trajectory:4},
{ prayerType:3,destinationSlot:3,time:"0,1000,2000,3000",amount:4,trajectory:3},
{ prayerType:3,destinationSlot:4,time:"0,1000,2000,3000",amount:4,trajectory:1},
]
},
19: {
"slots": 5,
"delay": 1,
"intervals": [
{ prayerType:1,destinationSlot:0,time:"0,500,1000,1500,2000",amount:5,trajectory:7},
{ prayerType:2,destinationSlot:1,time:"0,500,1000,1500,2000",amount:5,trajectory:5},
{ prayerType:1,destinationSlot:2,time:"0,500,1000,1500,2000",amount:5,trajectory:4},
{ prayerType:2,destinationSlot:3,time:"0,500,1000,1500,2000",amount:5,trajectory:3},
{ prayerType:1,destinationSlot:4,time:"0,500,1000,1500,2000",amount:5,trajectory:1},
]
},
20: {
"slots": 5,
"delay": 1,
"intervals": [
{ prayerType:3,destinationSlot:0,time:"0,300,600,900,1000,1200",amount:6,trajectory:7},
{ prayerType:2,destinationSlot:1,time:"0,300,600,900,1000,1200",amount:6,trajectory:5},
{ prayerType:3,destinationSlot:2,time:"0,300,600,900,1000,1200",amount:6,trajectory:4},
{ prayerType:2,destinationSlot:3,time:"0,300,600,900,1000,1200",amount:6,trajectory:3},
{ prayerType:1,destinationSlot:4,time:"0,300,600,900,1000,1200",amount:6,trajectory:1},
]
}
}

},{}],5:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _behaviour = require('behaviour.js');

var _SceneManager = require('./core/SceneManager');

var _SceneManager2 = _interopRequireDefault(_SceneManager);

var _clockTimer = require('clock-timer.js');

var _clockTimer2 = _interopRequireDefault(_clockTimer);

var _tweener = require('tweener');

var _tweener2 = _interopRequireDefault(_tweener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.clock = new _clockTimer2.default();

window.Tweener = _tweener2.default;
window.tweener = new _tweener2.default();

window.SCALE_RATIO = 1;

var Application = function () {
  function Application() {
    _classCallCheck(this, Application);

    this.tmpBackground = new PIXI.Sprite.fromImage('images/background.jpg');

    var ratio = window.innerHeight / this.tmpBackground.height,
        width = this.tmpBackground.width * ratio,
        height = this.tmpBackground.height * ratio;

    SCALE_RATIO = ratio;

    this.renderer = new PIXI.WebGLRenderer(width, height, {
      // resolution: window.devicePixelRatio,
      // antialias: false,
    });
    this.renderer.backgroundColor = 0xffffff;
    document.body.appendChild(this.renderer.view);

    this.sceneManager = new _SceneManager2.default(ratio);

    this.renderer.view.width = width;
    this.renderer.view.height = height;

    if (this.renderer.view.width > window.innerWidth) {
      this.renderer.view.style.position = "absolute";
      this.sceneManager.x = (window.innerWidth - this.renderer.view.width) / 2;
    }

    window.addEventListener('blur', this.pauseGame.bind(this));
    window.addEventListener('focus', this.unpauseGame.bind(this));
    document.addEventListener('visibilitychange', this.onVisibilityChange.bind(this));

    this.componentSystem = (0, _behaviour.createComponentSystem)(PIXI.DisplayObject);
  }

  _createClass(Application, [{
    key: 'gotoScene',
    value: function gotoScene(sceneClass) {
      this.sceneManager.goTo(sceneClass);
    }
  }, {
    key: 'onVisibilityChange',
    value: function onVisibilityChange() {
      if (document.hidden) {
        this.pauseGame();
      } else {
        this.unpauseGame();
      }
    }
  }, {
    key: 'pauseGame',
    value: function pauseGame() {
      clock.stop();
    }
  }, {
    key: 'unpauseGame',
    value: function unpauseGame() {
      clock.start();
    }
  }, {
    key: 'update',
    value: function update() {
      window.requestAnimationFrame(this.update.bind(this));
      clock.tick();

      tweener.update(clock.deltaTime);
      this.componentSystem.update();

      this.renderer.render(this.sceneManager);
    }
  }, {
    key: 'width',
    get: function get() {
      return this.tmpBackground.width;
    }
  }, {
    key: 'height',
    get: function get() {
      return this.tmpBackground.height;
    }
  }]);

  return Application;
}();

exports.default = Application;

},{"./core/SceneManager":12,"behaviour.js":34,"clock-timer.js":35,"tweener":40}],6:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _behaviour = require('behaviour.js');

var _Prayer = require('../../entities/Prayer');

var _Prayer2 = _interopRequireDefault(_Prayer);

var _PrayerBehaviour = require('../entities/PrayerBehaviour');

var _PrayerBehaviour2 = _interopRequireDefault(_PrayerBehaviour);

var _Textbox = require('../../entities/hud/Textbox');

var _Textbox2 = _interopRequireDefault(_Textbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var waves = require('../../../config/waves.json');
var prayerTypes = require('../../../config/prayers.json');

var WaveController = function (_Behaviour) {
  _inherits(WaveController, _Behaviour);

  function WaveController() {
    _classCallCheck(this, WaveController);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(WaveController).apply(this, arguments));
  }

  _createClass(WaveController, [{
    key: 'onAttach',
    value: function onAttach(options) {
      this.currentWave = 1;
      this.activePrayers = 0;

      this.newWaveSounds = ['GOD_FB__NewWaveStarted', 'GOD_FB__NewWaveStarted2'];

      this.god = options.god;
      this.prayers = [];

      this.notification = options.notification;
      this.lifebar = options.lifebar;

      this.on('start', this.onStart.bind(this));
    }
  }, {
    key: 'onStart',
    value: function onStart() {
      playSound(this.newWaveSounds);

      var numIntervals = this.waveConfig.intervals.length;
      this.object.slots = this.waveConfig.slots;

      for (var i = 0; i < numIntervals; i++) {
        var intervalConfig = this.waveConfig.intervals[i],
            timeouts = this.waveConfig.intervals[i].time.toString().split(',');

        this.activePrayers += intervalConfig.amount;
        for (var _i = 0; _i < intervalConfig.amount; _i++) {
          clock.setTimeout(this.spawn.bind(this, intervalConfig), timeouts[_i] || timeouts[0]);
        }
      }
      console.log(this.activePrayers);
    }
  }, {
    key: 'gotoNextWave',
    value: function gotoNextWave() {
      var _this2 = this;

      if (this.currentWave < Object.keys(waves).length - 1) {
        this.currentWave++;
      } else {
        // keep stuck on last level, make it more difficult
      }

      console.log("Current wave:", this.currentWave);

      var textbox = new _Textbox2.default('Wave ' + this.currentWave);
      textbox.x = APP.width / 2;
      textbox.y = textbox.height / 2;
      this.object.parent.addChild(textbox);

      tweener.add(textbox).from({ alpha: 0 }, 500, Tweener.ease.quintOut).wait(1000).to({ alpha: 0 }, 500, Tweener.ease.quintOut).then(function () {
        console.log("Current wave:", _this2.currentWave);
        _this2.emit('start');

        _this2.god.getEntity().emit('face', 'retard');
      });
    }
  }, {
    key: 'spawn',
    value: function spawn(config) {
      if (typeof config.slotIndex === "undefined") {
        // TODO: get first random slot
      }

      var prayerType = prayerTypes[config.prayerType],
          prayer = new _Prayer2.default(config.prayerType),
          targetSlot = this.object.slots[config.destinationSlot],
          angle = Math.atan2(targetSlot.y - this.object.stone.y, targetSlot.x - this.object.stone.x);

      // TODO: evaluate 'config.trajectory' instead of using 'angle'
      prayer.behaviour = new _PrayerBehaviour2.default();
      prayer.interactive = true;

      prayer.on('click', this.onAction.bind(this, prayer));
      prayer.on('touchstart', this.onAction.bind(this, prayer));

      this.object.addChild(prayer);

      prayer.addBehaviour(prayer.behaviour, {
        type: config.prayerType,
        targetSlot: targetSlot,
        angle: angle
      }, this);
      prayer.behaviour.once('detach', this.onPrayerKilled.bind(this, prayer));

      //
      // sort ritual container children
      //
      prayer.parent.sortChildren();

      return prayer;
    }
  }, {
    key: 'onAction',
    value: function onAction(prayer, e) {
      this.god.getEntity().emit('action', prayer, e.data.global);
    }
  }, {
    key: 'onPrayerKilled',
    value: function onPrayerKilled() {
      this.activePrayers--;
      if (this.activePrayers === 0) {
        clock.setTimeout(this.gotoNextWave.bind(this), (this.nextWaveConfig.delay || 0) * 1000);
      }
    }
  }, {
    key: 'update',
    value: function update() {
      var efficiency = 0;

      for (var i = 0; i < this.prayers.length; i++) {
        efficiency += this.prayers[i].attributes.efficiency;
      }

      if (efficiency === 0) efficiency = -0.1;

      this.lifebar.progress += efficiency / 1000;
    }
  }, {
    key: 'onDetach',
    value: function onDetach() {}
  }, {
    key: 'nextWaveConfig',
    get: function get() {
      var index = this.currentWave === Object.keys(waves).length - 1 ? this.currentWave : this.currentWave + 1;
      return waves[index];
    }
  }, {
    key: 'waveConfig',
    get: function get() {
      return waves[this.currentWave];
    }
  }]);

  return WaveController;
}(_behaviour.Behaviour);

exports.default = WaveController;

},{"../../../config/prayers.json":2,"../../../config/waves.json":4,"../../entities/Prayer":14,"../../entities/hud/Textbox":24,"../entities/PrayerBehaviour":8,"behaviour.js":34}],7:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _behaviour = require('behaviour.js');

var _Prayer = require('../../entities/Prayer');

var _Prayer2 = _interopRequireDefault(_Prayer);

var _Thunder = require('../../entities/Thunder');

var _Thunder2 = _interopRequireDefault(_Thunder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GodBehaviour = function (_Behaviour) {
  _inherits(GodBehaviour, _Behaviour);

  function GodBehaviour() {
    _classCallCheck(this, GodBehaviour);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(GodBehaviour).apply(this, arguments));
  }

  _createClass(GodBehaviour, [{
    key: 'onAttach',
    value: function onAttach(options) {
      this.thunderSounds = ['GOD_Attack1_alt1', 'GOD_Attack1_alt2', 'GOD_Attack1_alt3'];
      this.killSounds = ['GOD_KilledHuman_01', 'GOD_KilledHuman_02', 'GOD_KilledHuman_03', 'GOD_KilledHuman_04', 'GOD_KilledHuman_05', 'GOD_KilledHuman_06', 'GOD_KilledHuman_07', 'GOD_KilledHuman_08', 'GOD_KilledHuman_09', 'GOD_KilledHuman_10', 'GOD_KilledHuman_11', 'GOD_KilledHuman_12', 'GOD_KilledHuman_13', 'GOD_KilledHuman_14'];
      this.hitSounds = ['GOD_HitHuman_01', 'GOD_HitHuman_02', 'GOD_HitHuman_03', 'GOD_HitHuman_04', 'GOD_HitHuman_05', 'GOD_HitHuman_06', 'GOD_HitHuman_07'];
      this.killSmashSounds = ['Human_Man_KILL_01', 'Human_Man_KILL_02', 'Human_Man_KILL_03'];

      this.waveController = options.waveController;

      this.thunderAction = options.thunderAction;
      this.thunderAction.init();
      this.punchAction = options.punchAction;
      this.punchAction.init();
      this.frozenAction = options.frozenAction;
      this.frozenAction.init();

      this.notification = options.notification;

      this.punchAction.interactive = true;
      this.punchAction.on('mouseover', this.onPunchMouseOver.bind(this));
      this.punchAction.on('mouseout', this.onPunchMouseOut.bind(this));
      this.punchAction.on('click', this.onPunchAction.bind(this));
      this.punchAction.on('touchstart', this.onPunchAction.bind(this));

      this.interval = clock.setInterval(this.checkStatus.bind(this), 1000);
      this.on('action', this.onThunderAction.bind(this));
      this.on('face', this.setFace.bind(this));
    }
  }, {
    key: 'setFace',
    value: function setFace(face) {
      this.object.setFace(face);
      this.interval.elapsedTime = 0;
    }
  }, {
    key: 'onThunderAction',
    value: function onThunderAction(target, clickPoint) {
      if (this.thunderAction.isAvailable) {
        playSound(this.thunderSounds);

        this.thunderAction.getEntity().emit('use');

        var thunder = new _Thunder2.default(),
            killed = false;

        if (target instanceof _Prayer2.default) {
          target.behaviour.hp--;
          if (target.behaviour.hp <= 0) {
            this.notification.incrementKill();
            target.behaviour.detach();
            killed = true;
          }
          thunder.x = target.x;
          thunder.y = target.y;
        } else {
          for (var i = 0; i < target.prayers.length; i++) {
            var prayerBehaviour = target.prayers[i];
            prayerBehaviour.hp--;

            if (prayerBehaviour.hp <= 0) {
              this.notification.incrementKill();
              prayerBehaviour.detach();
              killed = true;
            }

            thunder.x = prayerBehaviour.x;
            thunder.y = prayerBehaviour.y;
          }
        }

        if (killed) {
          playSound(this.killSounds);
          playSound(this.killSmashSounds);
        } else {
          playSound(this.hitSounds);
        }

        thunder.x = target.x;
        thunder.y = target.y;
        this.object.parent.addChild(thunder);

        //
        // Update attack face
        //
        this.object.face.rotation = 0;
        var attackVariations = ['attack', 'attack2', 'attack3', 'attack4'];
        do {
          i = Math.floor(Math.random() * attackVariations.length);
        } while (i === this.lastAttackVariation);
        this.lastAttackVariation = i;
        this.object.setFace(attackVariations[i]);
        this.interval.elapsedTime = 0;

        tweener.remove(this.object.face);
        tweener.add(this.object.face).to({ rotation: 0.1 }, 500, Tweener.ease.quintOut).to({ rotation: 0 }, 200, Tweener.ease.quintOut);
      } else {
        this.noManaWarning();

        if (!this.thunderActionOriginX) {
          this.thunderActionOriginX = this.thunderAction.x;
        }

        // shake
        tweener.remove(this.thunderAction);
        tweener.add(this.thunderAction).to({ x: this.thunderActionOriginX + 10 }, 80, Tweener.ease.quintOut).to({ x: this.thunderActionOriginX - 10 }, 80, Tweener.ease.quintOut).to({ x: this.thunderActionOriginX + 10 }, 80, Tweener.ease.quintOut).to({ x: this.thunderActionOriginX - 10 }, 80, Tweener.ease.quintOut).to({ x: this.thunderActionOriginX }, 80, Tweener.ease.quintOut);
      }
    }
  }, {
    key: 'onPunchAction',
    value: function onPunchAction() {
      var _this2 = this;

      if (this.punchAction.isAvailable) {
        playSound('GOD_Attack2_START');

        this.punchAction.getEntity().emit('use');
        this.object.animatePunch(function () {
          var killed = false;
          for (var i = 0; i < _this2.waveController.object.slots.length; i++) {
            var slot = _this2.waveController.object.slots[i];
            slot.prayers.forEach(function (prayer) {
              prayer.hp -= 5;
              if (prayer.hp <= 0) {
                killed = true;
                _this2.notification.incrementKill();
                prayer.detach();
              }
            });
          }

          if (killed) {
            playSound('GOD_Attack2_FINISH');
            playSound(_this2.killSmashSounds);
          }
        });
      } else {
        this.noManaWarning();

        if (!this.punchActionOriginX) {
          this.punchActionOriginX = this.punchAction.x;
        }

        // shake
        tweener.remove(this.punchAction);
        tweener.add(this.punchAction).to({ x: this.punchActionOriginX + 10 }, 80, Tweener.ease.quintOut).to({ x: this.punchActionOriginX - 10 }, 80, Tweener.ease.quintOut).to({ x: this.punchActionOriginX + 10 }, 80, Tweener.ease.quintOut).to({ x: this.punchActionOriginX - 10 }, 80, Tweener.ease.quintOut).to({ x: this.punchActionOriginX }, 80, Tweener.ease.quintOut);
      }
    }
  }, {
    key: 'onPunchMouseOver',
    value: function onPunchMouseOver() {
      if (this.punchAction.isAvailable) {
        this.object.showPreviewPunch();
      }
    }
  }, {
    key: 'onPunchMouseOut',
    value: function onPunchMouseOut() {
      this.object.hidePreviewPunch();
    }
  }, {
    key: 'checkStatus',
    value: function checkStatus() {
      if (this.waveController.prayers.length > 0 && this.object.currentFace !== 'attack') {

        // set damage face
        var damageVariations = ['damage', 'damage2'],
            i = null;
        do {
          i = Math.floor(Math.random() * damageVariations.length);
        } while (i === this.lastDamageVariation);
        this.lastDamageVariation = i;
        this.object.setFace(damageVariations[i]);

        this.object.setFace('damage');
        tweener.add(this.object.face).to({ rotation: -0.1 }, 500, Tweener.ease.bounceOut).to({ rotation: 0 }, 200, Tweener.ease.quintOut);
      } else {
        this.object.setFace('serious');
      }
    }
  }, {
    key: 'update',
    value: function update() {
      this.thunderAction.alpha = this.thunderAction.isAvailable ? 1 : 0.4;
      this.punchAction.alpha = this.punchAction.isAvailable ? 1 : 0.4;
    }
  }, {
    key: 'noManaWarning',
    value: function noManaWarning() {
      if (!this.warningTimeout || !this.warningTimeout.active) {
        playSound('GOD_FB__0MANAWarning');
        this.warningTimeout = clock.setTimeout(function () {}, 2000);
      }
    }
  }, {
    key: 'onDetach',
    value: function onDetach() {
      this.interval.clear();
    }
  }]);

  return GodBehaviour;
}(_behaviour.Behaviour);

exports.default = GodBehaviour;

},{"../../entities/Prayer":14,"../../entities/Thunder":17,"behaviour.js":34}],8:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _behaviour = require('behaviour.js');

var _Explosion = require('../particles/Explosion');

var _Explosion2 = _interopRequireDefault(_Explosion);

var _Blood = require('../../entities/effects/Blood');

var _Blood2 = _interopRequireDefault(_Blood);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var prayerTypes = require('../../../config/prayers.json');

var PrayerBehaviour = function (_Behaviour) {
  _inherits(PrayerBehaviour, _Behaviour);

  function PrayerBehaviour() {
    _classCallCheck(this, PrayerBehaviour);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(PrayerBehaviour).apply(this, arguments));
  }

  _createClass(PrayerBehaviour, [{
    key: 'onAttach',
    value: function onAttach(config, waveController) {
      playSound('Human_All_Walking_loop');

      this.waveController = waveController;
      this.attributes = prayerTypes[config.type];
      this.baseVelocity = 5;

      this._hp = parseInt(this.attributes.hp);

      this.targetSlot = config.targetSlot;
      this.angle = config.angle;

      this.stopped = false;
      this.praying = false;

      this.originPoint = {
        x: this.targetSlot.x + Math.cos(this.angle) * 200,
        y: this.targetSlot.y + Math.sin(this.angle) * 200
      };

      this.object.x = this.originPoint.x;
      this.object.y = this.originPoint.y;

      tweener.add(this.object).from({ alpha: 0 }, 600, Tweener.ease.quintOut);

      this.object.addChild(this.object.walking);
    }
  }, {
    key: 'update',
    value: function update() {
      if (this.stopped) return false;

      if (!this.praying) {
        this.move();
      } else {
        this.pray();
      }
    }
  }, {
    key: 'move',
    value: function move() {
      var nextPoint = {
        x: Math.cos(this.angle) * 0.01 * clock.deltaTime * (this.baseVelocity * this.attributes.velocity),
        y: Math.sin(this.angle) * 0.01 * clock.deltaTime * (this.baseVelocity * this.attributes.velocity)
      };

      if (nextPoint.x > 0) {
        this.object.scale.x = -1;
      }

      this.object.x -= nextPoint.x;
      this.object.y -= nextPoint.y;

      var distance = Math.sqrt(Math.pow(this.object.x - this.targetSlot.x, 2) + Math.pow(this.object.y - this.targetSlot.y, 2));

      if (distance < 8) {
        playSound('Human_Fem_ScreenEntrance');

        this.praying = true;

        if (this.targetSlot.prayers.length) {
          this.object.x += 20 * this.targetSlot.prayers.length;
        }
        this.targetSlot.prayers.push(this);
        this.waveController.prayers.push(this);

        this.object.removeChild(this.object.walking);
        this.object.addChild(this.object.praying);
      }
    }
  }, {
    key: 'pray',
    value: function pray() {}
  }, {
    key: 'onDetach',
    value: function onDetach() {
      var _this2 = this;

      this.object.removeAllListeners();

      // remove prayer from slot
      var prayerSlotIndex = this.targetSlot.prayers.indexOf(this);
      if (prayerSlotIndex >= 0) {
        this.targetSlot.prayers.splice(this.targetSlot.prayers.indexOf(this), 1);
      }

      // remove prayer from wave
      var prayerWaveIndex = this.waveController.prayers.indexOf(this);
      if (prayerWaveIndex >= 0) {
        this.waveController.prayers.splice(this.waveController.prayers.indexOf(this), 1);
      }

      // this.object.addChild(this.object.dead)
      tweener.add(this.object).to({ alpha: 0 }, 300, Tweener.ease.quintOut).then(function () {
        clock.setTimeout(function () {
          _this2.object.parent.removeChild(_this2.object);
        }, 1000);
      });

      // blood effect
      var blood = new _Blood2.default();
      blood.position.copy(this.object.position);
      this.object.parent.addChild(blood);

      console.log("Detached! Destroy this entity!");
    }
  }, {
    key: 'hp',
    get: function get() {
      return this._hp;
    },
    set: function set(value) {
      var _this3 = this;

      if (value !== this._hp) {
        this._hp = value;
        this.stopped = true;
        this.object.stop();

        this.object.addBehaviour(new _Explosion2.default());

        clock.setTimeout(function () {
          _this3.stopped = false;
          _this3.object.play();
        }, this.attributes.stuck_time * 1000);
      }
    }
  }]);

  return PrayerBehaviour;
}(_behaviour.Behaviour);

exports.default = PrayerBehaviour;

},{"../../../config/prayers.json":2,"../../entities/effects/Blood":18,"../particles/Explosion":10,"behaviour.js":34}],9:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _behaviour = require('behaviour.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpellButtonBehaviour = function (_Behaviour) {
  _inherits(SpellButtonBehaviour, _Behaviour);

  function SpellButtonBehaviour() {
    _classCallCheck(this, SpellButtonBehaviour);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SpellButtonBehaviour).apply(this, arguments));
  }

  _createClass(SpellButtonBehaviour, [{
    key: 'onAttach',
    value: function onAttach() {
      var fillVelocity = arguments.length <= 0 || arguments[0] === undefined ? 0.009 : arguments[0];
      var usageBurn = arguments.length <= 1 || arguments[1] === undefined ? 30 : arguments[1];

      this.fillVelocity = fillVelocity;
      this.usageBurn = usageBurn;

      this.on('use', this.onUse.bind(this));
    }
  }, {
    key: 'onUse',
    value: function onUse() {
      var _this2 = this;

      this.object.cooldownMask.y += this.usageBurn;

      tweener.remove(this.object.scale);
      tweener.add(this.object.scale).to({ x: 1.2, y: 1.2 }, 200, Tweener.ease.quintOut).then(function () {
        tweener.add(_this2.object.scale).to({ x: 1, y: 1 }, 200, Tweener.ease.quintOut);
      });
    }
  }, {
    key: 'update',
    value: function update() {
      this.object.cooldownMask.y = Math.max(this.object.cooldownMask.targetY, this.object.cooldownMask.y - this.fillVelocity * clock.deltaTime);
    }
  }, {
    key: 'onDetach',
    value: function onDetach() {}
  }]);

  return SpellButtonBehaviour;
}(_behaviour.Behaviour);

exports.default = SpellButtonBehaviour;

},{"behaviour.js":34}],10:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _behaviour = require('behaviour.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Explosion = function (_Behaviour) {
  _inherits(Explosion, _Behaviour);

  function Explosion() {
    _classCallCheck(this, Explosion);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Explosion).apply(this, arguments));
  }

  _createClass(Explosion, [{
    key: 'onAttach',
    value: function onAttach() {
      this.emitter = new cloudkid.Emitter(this.object, [PIXI.Texture.fromImage('blood.png')], {
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
      });

      // this.emitter.updateOwnerPos(this.object.x, this.object.y);
      clock.setTimeout(this.detach.bind(this), 1000);
    }
  }, {
    key: 'update',
    value: function update() {
      this.emitter.update(clock.deltaTime * 0.001);
    }
  }]);

  return Explosion;
}(_behaviour.Behaviour);

exports.default = Explosion;

},{"behaviour.js":34}],11:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Resources = function () {
  function Resources() {
    _classCallCheck(this, Resources);
  }

  _createClass(Resources, null, [{
    key: 'load',
    value: function load(onLoadComplete) {
      this.onLoadComplete = onLoadComplete;

      this.numLoads = 0;
      this.filesToLoad = 3;

      sounds.on('load', this.incrementLoader.bind(this));
      music.on('load', this.incrementLoader.bind(this));

      this.loader = new PIXI.loaders.Loader();
      this.loader.add('spritesheet', "images/spritesheet.json");
      this.loader.add('background', "images/background.jpg");
      this.loader.add('splash_screen', "images/splash_screen.jpg");
      this.loader.on('complete', this.incrementLoader.bind(this));
      this.loader.load();
    }

    // static get () {
    //   this.loader.get
    // }

  }, {
    key: 'incrementLoader',
    value: function incrementLoader() {
      this.numLoads++;
      if (this.numLoads === this.filesToLoad) {
        document.body.className = "loaded";
        clock.setTimeout(function () {
          document.querySelector('.loading').style.display = 'none';
        }, 500);
        this.onLoadComplete();
      }
    }
  }]);

  return Resources;
}();

exports.default = Resources;

},{}],12:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SceneManager = function (_PIXI$Container) {
  _inherits(SceneManager, _PIXI$Container);

  function SceneManager(ratio) {
    _classCallCheck(this, SceneManager);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SceneManager).call(this));

    _this.scale.x = ratio;
    _this.scale.y = ratio;

    _this.currentScene = null;
    _this.nextScene = null;

    _this.sceneInstanceMap = {};
    return _this;
  }

  _createClass(SceneManager, [{
    key: 'goTo',
    value: function goTo(screenClass) {
      var _this2 = this;

      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var screenName = screenClass.name;

      if (!this.sceneInstanceMap[screenName]) {
        this.sceneInstanceMap[screenName] = new screenClass();

        this.bindEvents(this.sceneInstanceMap[screenName]);
      }

      if (this.currentScene) {
        this.nextScene = this.sceneInstanceMap[screenName];

        this.defaultTransitionOut(this.currentScene);
        this.defaultTransitionIn(this.nextScene).then(function () {
          _this2.currentScene = _this2.nextScene;
          _this2.nextScene = null;
        });

        // this.defaultTransitionIn.bind(this, this.nextScene)
        //   then(this.defaultTransitionIn.bind(this, this.nextScene))
      } else {
          this.currentScene = this.sceneInstanceMap[screenName];
          this.addChild(this.currentScene);
        }
    }
  }, {
    key: 'bindEvents',
    value: function bindEvents(scene) {
      var _this3 = this;

      scene.on('goto', function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _this3.goTo.apply(_this3, args);
      });
    }
  }, {
    key: 'defaultTransitionIn',
    value: function defaultTransitionIn(scene) {
      scene.alpha = 0;
      this.addChild(scene);
      return tweener.add(scene).to({ alpha: 1 }, 800, Tweener.ease.easeQuintOut);
    }
  }, {
    key: 'defaultTransitionOut',
    value: function defaultTransitionOut(scene) {
      var _this4 = this;

      return tweener.add(scene).to({ alpha: 0 }, 800, Tweener.ease.easeQuintOut).then(function () {
        // dispose & remove all scene references on transition-out
        scene.emit('dispose');
        scene.off();

        _this4.removeChild(scene);
        delete _this4.sceneInstanceMap[scene.constructor.name];
      });
    }
  }]);

  return SceneManager;
}(PIXI.Container);

exports.default = SceneManager;

},{}],13:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import PrayerBehaviour from '../behaviours/entities/PrayerBehaviour'

var God = function (_PIXI$Container) {
  _inherits(God, _PIXI$Container);

  function God() {
    _classCallCheck(this, God);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(God).call(this));

    _this.face = new PIXI.Container();
    _this.face.rotation = 0;
    _this.face.pivot.x = _this.face.width / 2;
    _this.face.pivot.y = _this.face.height / 2;
    _this.face.x = -180;
    _this.face.y = -170;
    _this.addChild(_this.face);

    _this.rotation = 0;

    _this.serious = new PIXI.Sprite.fromImage('jesus1.png');
    _this.serious.y -= 70;
    // this.face.addChild(this.serious)

    _this.attack = new PIXI.Sprite.fromImage('jesus2.png');
    _this.attack.x -= 70;
    _this.attack.y -= 70;
    // this.face.addChild(this.attack)

    _this.attack2 = new PIXI.Sprite.fromImage('jesus7.png');
    _this.attack2.x -= 20;
    _this.attack2.y -= 90;
    // this.face.addChild(this.attack2)

    _this.attack3 = new PIXI.Sprite.fromImage('jesus8.png');
    _this.attack3.x -= 20;
    _this.attack3.y -= 90;
    // this.face.addChild(this.attack3)

    _this.attack4 = new PIXI.Sprite.fromImage('jesus10.png');
    _this.attack4.x -= 20;
    _this.attack4.y -= 90;
    // this.face.addChild(this.attack4)

    _this.damage = new PIXI.Sprite.fromImage('jesus3.png');
    _this.damage.x -= 40;
    _this.damage.y -= 110;
    // this.face.addChild(this.damage)

    _this.damage2 = new PIXI.Sprite.fromImage('jesus9.png');
    _this.damage2.x -= 40;
    _this.damage2.y -= 110;
    // this.face.addChild(this.damage2)

    _this.lost = new PIXI.Sprite.fromImage('jesus4.png');
    _this.lost.x -= 40;
    _this.lost.y -= 110;
    // this.face.addChild(this.lost)

    _this.sleeping = new PIXI.Sprite.fromImage('jesus5.png');
    _this.sleeping.x -= 5;
    _this.sleeping.y -= 60;
    // this.face.addChild(this.sleeping)

    _this.retard = new PIXI.Sprite.fromImage('jesus6.png');
    _this.retard.x -= 40;
    _this.retard.y -= 110;
    // this.face.addChild(this.retard)

    _this.punch = new PIXI.Sprite.fromImage('fist.png');
    _this.punch.x = -_this.punch.width / 2;
    _this.punch.y = -_this.punch.height;

    var punchMaskMargin = 70;
    _this.punchMask = new PIXI.Graphics();
    _this.punchMask.beginFill(0x000000);
    _this.punchMask.drawRect(0, 0, _this.punch.width, _this.punch.height - punchMaskMargin);
    _this.punchMask.x = -_this.punch.width / 2;
    _this.punchMask.y = punchMaskMargin;
    _this.punch.mask = _this.punchMask;

    _this.punchShadow = new PIXI.Sprite.fromImage('fist-shadow.png');
    _this.punchShadow.pivot.x = _this.punchShadow.width / 2;
    _this.punchShadow.pivot.y = _this.punchShadow.height / 2;
    _this.punchShadow.x = 0;
    _this.punchShadow.y = 540;
    _this.punchShadow.alpha = 0;

    // clock.setTimeout(() => {
    //   this.addChild(this.punchShadow)
    // }, 100)

    _this.setFace('serious');
    return _this;
  }

  _createClass(God, [{
    key: 'showPreviewPunch',
    value: function showPreviewPunch() {
      this.addChild(this.punchShadow);
      tweener.remove(this.punchShadow);
      tweener.add(this.punchShadow).to({ alpha: 0.5 }, 500, Tweener.ease.quartOut);
    }
  }, {
    key: 'hidePreviewPunch',
    value: function hidePreviewPunch() {
      var _this2 = this;

      if (this.punchShadow.parent) {
        tweener.remove(this.punchShadow);
        tweener.add(this.punchShadow).to({ alpha: 0 }, 100, Tweener.ease.quartOut).then(function () {
          _this2.removeChild(_this2.punchShadow);
        });
      }
    }
  }, {
    key: 'animatePunch',
    value: function animatePunch(callback) {
      var _this3 = this;

      this.addChild(this.punchShadow);
      this.addChild(this.punch);
      this.addChild(this.punchMask);

      this.punchShadow.scale.set(0.1, 0.1);

      tweener.remove(this.punchShadow.scale);
      tweener.add(this.punchShadow.scale).to({ x: 1, y: 1 }, 500, Tweener.ease.quartOut);

      tweener.remove(this.punchShadow);
      tweener.add(this.punchShadow).to({ alpha: 1 }, 500, Tweener.ease.quartOut);

      tweener.add(this.punch).wait(200).to({ y: -160 }, 400, Tweener.ease.quintOut).then(function () {
        callback();

        tweener.add(_this3.punchShadow).wait(200).to({ alpha: 0 }, 1200, Tweener.ease.quartOut);

        tweener.add(_this3.punchShadow.scale).wait(200).to({ x: 0.1, y: 0.1 }, 800, Tweener.ease.quartOut);

        tweener.add(_this3.punch).wait(100).to({ y: -_this3.punch.height }, 300, Tweener.ease.quintOut).then(function () {
          _this3.removeChild(_this3.punch);
          _this3.removeChild(_this3.punchMask);
        });
      });
    }
  }, {
    key: 'setFace',
    value: function setFace(face) {
      if (this.currentFace === face) return;

      if (this.currentFace) {
        this.face.removeChild(this[this.currentFace]);
      }

      this.currentFace = face;
      this.face.addChild(this[this.currentFace]);
    }
  }]);

  return God;
}(PIXI.Container);

exports.default = God;

},{}],14:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import PrayerBehaviour from '../behaviours/entities/PrayerBehaviour'

var Prayer = function (_PIXI$Container) {
  _inherits(Prayer, _PIXI$Container);

  function Prayer(typeId) {
    _classCallCheck(this, Prayer);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Prayer).call(this));

    if (typeId === 1) {
      _this.walking = new PIXI.extras.MovieClip([PIXI.Texture.fromImage('walk0001.png'), PIXI.Texture.fromImage('walk0002.png'), PIXI.Texture.fromImage('walk0003.png'), PIXI.Texture.fromImage('walk0004.png'), PIXI.Texture.fromImage('walk0005.png'), PIXI.Texture.fromImage('walk0006.png'), PIXI.Texture.fromImage('walk0007.png'), PIXI.Texture.fromImage('walk0008.png'), PIXI.Texture.fromImage('walk0009.png'), PIXI.Texture.fromImage('walk0010.png'), PIXI.Texture.fromImage('walk0011.png'), PIXI.Texture.fromImage('walk0012.png'), PIXI.Texture.fromImage('walk0013.png'), PIXI.Texture.fromImage('walk0014.png'), PIXI.Texture.fromImage('walk0015.png'), PIXI.Texture.fromImage('walk0016.png'), PIXI.Texture.fromImage('walk0017.png'), PIXI.Texture.fromImage('walk0018.png'), PIXI.Texture.fromImage('walk0019.png'), PIXI.Texture.fromImage('walk0020.png'), PIXI.Texture.fromImage('walk0021.png'), PIXI.Texture.fromImage('walk0022.png'), PIXI.Texture.fromImage('walk0023.png'), PIXI.Texture.fromImage('walk0024.png'), PIXI.Texture.fromImage('walk0025.png'), PIXI.Texture.fromImage('walk0026.png'), PIXI.Texture.fromImage('walk0027.png'), PIXI.Texture.fromImage('walk0028.png'), PIXI.Texture.fromImage('walk0029.png'), PIXI.Texture.fromImage('walk0030.png'), PIXI.Texture.fromImage('walk0031.png'), PIXI.Texture.fromImage('walk0032.png')]);
      _this.praying = new PIXI.extras.MovieClip([PIXI.Texture.fromImage('Pray0001.png'), PIXI.Texture.fromImage('Pray0002.png'), PIXI.Texture.fromImage('Pray0003.png'), PIXI.Texture.fromImage('Pray0004.png'), PIXI.Texture.fromImage('Pray0005.png'), PIXI.Texture.fromImage('Pray0006.png'), PIXI.Texture.fromImage('Pray0007.png'), PIXI.Texture.fromImage('Pray0008.png'), PIXI.Texture.fromImage('Pray0009.png'), PIXI.Texture.fromImage('Pray0010.png'), PIXI.Texture.fromImage('Pray0011.png'), PIXI.Texture.fromImage('Pray0012.png'), PIXI.Texture.fromImage('Pray0013.png')]);
    } else if (typeId === 2) {
      _this.walking = new PIXI.extras.MovieClip([PIXI.Texture.fromImage('skate_walk0001.png'), PIXI.Texture.fromImage('skate_walk0002.png'), PIXI.Texture.fromImage('skate_walk0003.png'), PIXI.Texture.fromImage('skate_walk0004.png'), PIXI.Texture.fromImage('skate_walk0005.png'), PIXI.Texture.fromImage('skate_walk0006.png'), PIXI.Texture.fromImage('skate_walk0007.png'), PIXI.Texture.fromImage('skate_walk0008.png'), PIXI.Texture.fromImage('skate_walk0009.png'), PIXI.Texture.fromImage('skate_walk0010.png'), PIXI.Texture.fromImage('skate_walk0011.png'), PIXI.Texture.fromImage('skate_walk0012.png'), PIXI.Texture.fromImage('skate_walk0013.png'), PIXI.Texture.fromImage('skate_walk0014.png'), PIXI.Texture.fromImage('skate_walk0015.png'), PIXI.Texture.fromImage('skate_walk0016.png'), PIXI.Texture.fromImage('skate_walk0017.png'), PIXI.Texture.fromImage('skate_walk0018.png'), PIXI.Texture.fromImage('skate_walk0019.png'), PIXI.Texture.fromImage('skate_walk0020.png'), PIXI.Texture.fromImage('skate_walk0021.png'), PIXI.Texture.fromImage('skate_walk0022.png'), PIXI.Texture.fromImage('skate_walk0023.png'), PIXI.Texture.fromImage('skate_walk0024.png'), PIXI.Texture.fromImage('skate_walk0025.png'), PIXI.Texture.fromImage('skate_walk0026.png'), PIXI.Texture.fromImage('skate_walk0027.png')]);
      _this.praying = new PIXI.extras.MovieClip([PIXI.Texture.fromImage('skate_pray0001.png'), PIXI.Texture.fromImage('skate_pray0002.png'), PIXI.Texture.fromImage('skate_pray0003.png'), PIXI.Texture.fromImage('skate_pray0004.png'), PIXI.Texture.fromImage('skate_pray0005.png'), PIXI.Texture.fromImage('skate_pray0006.png'), PIXI.Texture.fromImage('skate_pray0007.png'), PIXI.Texture.fromImage('skate_pray0008.png'), PIXI.Texture.fromImage('skate_pray0009.png'), PIXI.Texture.fromImage('skate_pray0010.png'), PIXI.Texture.fromImage('skate_pray0011.png'), PIXI.Texture.fromImage('skate_pray0012.png'), PIXI.Texture.fromImage('skate_pray0013.png'), PIXI.Texture.fromImage('skate_pray0014.png')]);
    } else if (typeId === 3) {
      _this.walking = new PIXI.extras.MovieClip([PIXI.Texture.fromImage('unicorn_walk0001.png'), PIXI.Texture.fromImage('unicorn_walk0002.png'), PIXI.Texture.fromImage('unicorn_walk0003.png'), PIXI.Texture.fromImage('unicorn_walk0004.png'), PIXI.Texture.fromImage('unicorn_walk0005.png'), PIXI.Texture.fromImage('unicorn_walk0006.png'), PIXI.Texture.fromImage('unicorn_walk0007.png'), PIXI.Texture.fromImage('unicorn_walk0008.png'), PIXI.Texture.fromImage('unicorn_walk0009.png'), PIXI.Texture.fromImage('unicorn_walk0010.png'), PIXI.Texture.fromImage('unicorn_walk0011.png'), PIXI.Texture.fromImage('unicorn_walk0012.png'), PIXI.Texture.fromImage('unicorn_walk0013.png')]);
      _this.praying = new PIXI.extras.MovieClip([PIXI.Texture.fromImage('unicorn_pray0001.png'), PIXI.Texture.fromImage('unicorn_pray0002.png'), PIXI.Texture.fromImage('unicorn_pray0003.png'), PIXI.Texture.fromImage('unicorn_pray0004.png'), PIXI.Texture.fromImage('unicorn_pray0005.png'), PIXI.Texture.fromImage('unicorn_pray0006.png'), PIXI.Texture.fromImage('unicorn_pray0007.png'), PIXI.Texture.fromImage('unicorn_pray0008.png'), PIXI.Texture.fromImage('unicorn_pray0009.png'), PIXI.Texture.fromImage('unicorn_pray0010.png'), PIXI.Texture.fromImage('unicorn_pray0011.png'), PIXI.Texture.fromImage('unicorn_pray0012.png'), PIXI.Texture.fromImage('unicorn_pray0013.png'), PIXI.Texture.fromImage('unicorn_pray0014.png'), PIXI.Texture.fromImage('unicorn_pray0015.png'), PIXI.Texture.fromImage('unicorn_pray0016.png'), PIXI.Texture.fromImage('unicorn_pray0017.png'), PIXI.Texture.fromImage('unicorn_pray0018.png')]);
    } else if (typeId === 4) {
      _this.walking = new PIXI.extras.MovieClip([PIXI.Texture.fromImage('unicorn_walk0001.png'), PIXI.Texture.fromImage('unicorn_walk0002.png'), PIXI.Texture.fromImage('unicorn_walk0003.png'), PIXI.Texture.fromImage('unicorn_walk0004.png'), PIXI.Texture.fromImage('unicorn_walk0005.png'), PIXI.Texture.fromImage('unicorn_walk0006.png'), PIXI.Texture.fromImage('unicorn_walk0007.png'), PIXI.Texture.fromImage('unicorn_walk0008.png'), PIXI.Texture.fromImage('unicorn_walk0009.png'), PIXI.Texture.fromImage('unicorn_walk0010.png'), PIXI.Texture.fromImage('unicorn_walk0011.png'), PIXI.Texture.fromImage('unicorn_walk0012.png'), PIXI.Texture.fromImage('unicorn_walk0013.png')]);
      _this.praying = new PIXI.extras.MovieClip([PIXI.Texture.fromImage('unicorn_pray0001.png'), PIXI.Texture.fromImage('unicorn_pray0002.png'), PIXI.Texture.fromImage('unicorn_pray0003.png'), PIXI.Texture.fromImage('unicorn_pray0004.png'), PIXI.Texture.fromImage('unicorn_pray0005.png'), PIXI.Texture.fromImage('unicorn_pray0006.png'), PIXI.Texture.fromImage('unicorn_pray0007.png'), PIXI.Texture.fromImage('unicorn_pray0008.png'), PIXI.Texture.fromImage('unicorn_pray0009.png'), PIXI.Texture.fromImage('unicorn_pray0010.png'), PIXI.Texture.fromImage('unicorn_pray0011.png'), PIXI.Texture.fromImage('unicorn_pray0012.png'), PIXI.Texture.fromImage('unicorn_pray0013.png'), PIXI.Texture.fromImage('unicorn_pray0014.png'), PIXI.Texture.fromImage('unicorn_pray0015.png'), PIXI.Texture.fromImage('unicorn_pray0016.png'), PIXI.Texture.fromImage('unicorn_pray0017.png'), PIXI.Texture.fromImage('unicorn_pray0018.png')]);
    }

    _this.walking.pivot.x = _this.walking.width / 2;
    _this.walking.pivot.y = _this.walking.height;
    _this.walking.animationSpeed = 0.2;
    _this.walking.loop = true;

    _this.praying.pivot.x = _this.praying.width / 2;
    _this.praying.pivot.y = _this.praying.height;
    _this.praying.animationSpeed = 0.2;
    _this.praying.loop = true;

    // this.dead = new PIXI.extras.MovieClip([
    //   PIXI.Texture.fromImage('enemy-dead.png'),
    // ])
    // this.dead.pivot.x = this.dead.width / 2
    // this.dead.pivot.y = this.dead.width / 2

    _this.play();
    return _this;
  }

  _createClass(Prayer, [{
    key: 'play',
    value: function play() {
      this.walking.play();
      this.praying.play();
    }
  }, {
    key: 'stop',
    value: function stop() {
      this.walking.stop();
      this.praying.stop();
    }
  }]);

  return Prayer;
}(PIXI.Container);

exports.default = Prayer;

},{}],15:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Spot = require('./Spot');

var _Spot2 = _interopRequireDefault(_Spot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RitualCircle = function (_PIXI$Container) {
  _inherits(RitualCircle, _PIXI$Container);

  function RitualCircle(god) {
    _classCallCheck(this, RitualCircle);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RitualCircle).call(this));

    var width = 150,
        height = 100,
        rad = 150;

    _this.god = god;

    _this.stone = new PIXI.Sprite.fromImage('cabine.png');
    _this.stone.pivot.x = _this.stone.width / 2;
    _this.stone.pivot.y = _this.stone.height / 2;

    _this.slotInstances = [];

    _this.stone.x = width;
    _this.stone.y = height;

    _this.addChild(_this.stone);
    return _this;
  }

  _createClass(RitualCircle, [{
    key: 'onAction',

    // this.slotInstances.forEach((spot) => {
    //   spot.on('click', this.onAction.bind(this, spot))
    // })
    value: function onAction(spot, e) {
      this.god.getEntity().emit('action', spot, e.data.global);
      console.log("Action on spot!", spot);
    }
  }, {
    key: 'sortChildren',
    value: function sortChildren() {
      this.children.sort(function (a, b) {
        if (a.y < b.y) return -1;
        if (a.y > b.y) return 1;
        return 0;
      });
    }
  }, {
    key: 'resize',
    value: function resize() {}
  }, {
    key: 'slots',
    get: function get() {
      return this.slotInstances;
    },
    set: function set(num) {
      for (var i = 0; i < this.slotInstances.length; i++) {
        // remove spot from parent
        this.slotInstances[i].removeAllListeners();
        this.slotInstances[i].parent.removeChild(this.slotInstances[i]);
      }
      this.slotInstances = [];

      if (num === 1) {
        var spot = new _Spot2.default();
        spot.x = this.stone.width / 2 + 50;
        spot.y = this.stone.height + 10;
        this.slotInstances.push(spot);
        this.addChild(spot);
      } else if (num === 2) {
        var spot = new _Spot2.default();
        spot.x = this.stone.width / 2 + 230;
        spot.y = this.stone.height / 2 + 20;
        this.slotInstances.push(spot);
        this.addChild(spot);

        spot = new _Spot2.default();
        spot.x = this.stone.width / 2 - 160;
        spot.y = this.stone.height / 2 + 20;
        this.slotInstances.push(spot);
        this.addChild(spot);
      } else if (num === 3) {
        var spot = new _Spot2.default();
        spot.x = this.stone.width / 2 + 50;
        spot.y = this.stone.height + 10;
        this.slotInstances.push(spot);
        this.addChild(spot);

        spot = new _Spot2.default();
        spot.x = this.stone.width / 2 + 230;
        spot.y = this.stone.height / 2 + 20;
        this.slotInstances.push(spot);
        this.addChild(spot);

        spot = new _Spot2.default();
        spot.x = this.stone.width / 2 - 160;
        spot.y = this.stone.height / 2 + 20;
        this.slotInstances.push(spot);
        this.addChild(spot);
      } else if (num === 4) {
        var spot1 = new _Spot2.default();
        spot1.x = this.stone.width / 2 + 230;
        spot1.y = this.stone.height / 2 - 20;
        this.slotInstances.push(spot1);
        this.addChild(spot1);

        var spot2 = new _Spot2.default();
        spot2.x = this.stone.width / 2 - 160;
        spot2.y = this.stone.height / 2 - 20;
        this.slotInstances.push(spot2);
        this.addChild(spot2);

        var spot3 = new _Spot2.default();
        spot3.x = spot1.x;
        spot3.y = this.stone.height / 2 + 70;
        this.slotInstances.push(spot3);
        this.addChild(spot3);

        var spot4 = new _Spot2.default();
        spot4.x = spot2.x;
        spot4.y = this.stone.height / 2 + 70;
        this.slotInstances.push(spot4);
        this.addChild(spot4);
      } else if (num === 5) {
        var spot1 = new _Spot2.default();
        spot1.x = this.stone.width / 2 + 230;
        spot1.y = this.stone.height / 2 - 20;
        this.slotInstances.push(spot1);
        this.addChild(spot1);

        var spot2 = new _Spot2.default();
        spot2.x = this.stone.width / 2 - 160;
        spot2.y = this.stone.height / 2 - 20;
        this.slotInstances.push(spot2);
        this.addChild(spot2);

        var spot3 = new _Spot2.default();
        spot3.x = spot1.x;
        spot3.y = this.stone.height / 2 + 70;
        this.slotInstances.push(spot3);
        this.addChild(spot3);

        var spot4 = new _Spot2.default();
        spot4.x = spot2.x;
        spot4.y = this.stone.height / 2 + 70;
        this.slotInstances.push(spot4);
        this.addChild(spot4);

        var spot = new _Spot2.default();
        spot.x = this.stone.width / 2 + 50;
        spot.y = this.stone.height + 10;
        this.slotInstances.push(spot);
        this.addChild(spot);
      }
    }
  }]);

  return RitualCircle;
}(PIXI.Container);

exports.default = RitualCircle;

},{"./Spot":16}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Spot = function (_PIXI$Container) {
  _inherits(Spot, _PIXI$Container);

  function Spot() {
    _classCallCheck(this, Spot);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Spot).call(this));

    var graphics = new PIXI.Graphics();
    graphics.beginFill(0x000000, 0.3);
    graphics.drawEllipse(0, 0, 40, 12);
    graphics.x = 14;
    graphics.y = 26;
    _this.addChild(graphics);

    // this.pivot.x = this.width / 2
    _this.pivot.y = _this.height;

    _this.prayers = [];
    return _this;
  }

  return Spot;
}(PIXI.Container);

exports.default = Spot;

},{}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Thunder = function (_PIXI$Container) {
  _inherits(Thunder, _PIXI$Container);

  function Thunder() {
    _classCallCheck(this, Thunder);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Thunder).call(this));

    if (Math.random() > 0.5) {
      _this.thunder1 = new PIXI.Sprite.fromImage('ray1.png');
      _this.thunder1.pivot.x = -180;
      _this.thunder1.pivot.y = _this.thunder1.height / 6;
      _this.addChild(_this.thunder1);
    } else {
      _this.thunder2 = new PIXI.Sprite.fromImage('ray2.png');
      _this.thunder2.pivot.x = -20;
      _this.thunder2.pivot.y = _this.thunder2.height / 6;
      _this.addChild(_this.thunder2);
    }

    tweener.add(_this).wait(500).to({ alpha: 0 }, 300, Tweener.ease.quintOut).then(function () {
      _this.parent.removeChild(_this);
    });

    return _this;
  }

  return Thunder;
}(PIXI.Container);

exports.default = Thunder;

},{}],18:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Blood = function (_PIXI$Sprite) {
  _inherits(Blood, _PIXI$Sprite);

  function Blood() {
    _classCallCheck(this, Blood);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Blood).call(this, PIXI.Texture.fromImage('blood.png')));

    _this.alpha = 0;

    _this.pivot.x = _this.width / 2;
    _this.pivot.y = 0;

    _this.scale.x = 0.4;
    _this.scale.y = 0.4;

    _this.on('added', _this.onAdded.bind(_this));
    return _this;
  }

  _createClass(Blood, [{
    key: 'onAdded',
    value: function onAdded() {
      var _this2 = this;

      tweener.add(this.scale).to({ x: 2, y: 2 }, 1500, Tweener.ease.quintOut);

      tweener.add(this).to({ alpha: 1 }, 500, Tweener.ease.quintOut).wait(3000).to({ alpha: 0 }, 5000, Tweener.ease.quintOut).then(function () {
        _this2.parent.removeChild(_this2);
      });
    }
  }]);

  return Blood;
}(PIXI.Sprite);

exports.default = Blood;

},{}],19:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SpellButtonBehaviour = require('../../behaviours/entities/SpellButtonBehaviour');

var _SpellButtonBehaviour2 = _interopRequireDefault(_SpellButtonBehaviour);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FrozenSpellButton = function (_PIXI$Container) {
  _inherits(FrozenSpellButton, _PIXI$Container);

  function FrozenSpellButton(id) {
    _classCallCheck(this, FrozenSpellButton);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FrozenSpellButton).call(this));

    _this.active = new PIXI.Sprite.fromImage('button-snow-inactive.png');
    _this.addChild(_this.active);

    _this.cooldown = new PIXI.Sprite.fromImage('button-snow.png');
    _this.addChild(_this.cooldown);

    _this.initY = _this.cooldown.height * 2;

    _this.cooldownMask = new PIXI.Graphics();
    _this.cooldownMask.lineStyle(2, 0x000000, 0.8);
    _this.cooldownMask.beginFill(0x000000);
    _this.cooldownMask.drawCircle(0, 0, _this.cooldown.height);
    _this.cooldownMask.x = _this.cooldownMask.width / 3;
    _this.cooldownMask.targetY = _this.cooldownMask.height / 2.1;
    _this.cooldownMask.y = _this.initY;
    _this.addChild(_this.cooldownMask);

    _this.cooldown.mask = _this.cooldownMask;

    _this.fillVelocity = 0.009;
    _this.usageBurn = 30;
    return _this;
  }

  _createClass(FrozenSpellButton, [{
    key: 'init',
    value: function init() {
      this.addBehaviour(new _SpellButtonBehaviour2.default(), this.fillVelocity, this.usageBurn);
    }
  }, {
    key: 'width',
    get: function get() {
      return this.active.width;
    }
  }, {
    key: 'height',
    get: function get() {
      return this.active.height;
    }
  }, {
    key: 'isAvailable',
    get: function get() {
      return this.cooldownMask.y + this.usageBurn <= this.initY;
    }
  }]);

  return FrozenSpellButton;
}(PIXI.Container);

exports.default = FrozenSpellButton;

},{"../../behaviours/entities/SpellButtonBehaviour":9}],20:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KillCounter = function (_PIXI$Container) {
  _inherits(KillCounter, _PIXI$Container);

  function KillCounter(text) {
    _classCallCheck(this, KillCounter);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(KillCounter).call(this));

    _this.bg = new PIXI.Sprite.fromImage('deathcounter.png');
    _this.bg.pivot.x = _this.bg.width / 2;
    _this.addChild(_this.bg);

    _this.text = new PIXI.Text(text, { font: "48px Berry_Rotunda", fill: 0xffffff, textAlign: 'center' });
    _this.text.pivot.x = _this.text.width / 2;
    _this.text.x = 18;
    _this.text.y = 6;
    _this.addChild(_this.text);
    return _this;
  }

  _createClass(KillCounter, [{
    key: 'increment',
    value: function increment() {
      this.text.text = parseInt(this.text.text) + 1;

      var fillPerKill = 5;

      this.punchAction.cooldownMask.y = Math.max(this.punchAction.cooldownMask.targetY, this.punchAction.cooldownMask.y - fillPerKill);
    }
  }]);

  return KillCounter;
}(PIXI.Container);

exports.default = KillCounter;

},{}],21:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lifebar = function (_PIXI$Container) {
  _inherits(Lifebar, _PIXI$Container);

  function Lifebar() {
    _classCallCheck(this, Lifebar);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Lifebar).call(this));

    _this.lifebar = new PIXI.Sprite.fromImage('lifelight.png');
    _this.addChild(_this.lifebar);

    _this.lifebarMask = new PIXI.Graphics();
    _this.lifebarMask.beginFill(0x000000);
    _this.lifebarMask.drawRect(0, 0, _this.lifebar.width, _this.lifebar.height);
    _this.lifebarMask.pivot.y = _this.lifebarMask.height;
    _this.lifebarMask.y = _this.lifebarMask.height;
    _this.addChild(_this.lifebarMask);

    _this.lifebar.mask = _this.lifebarMask;

    _this.progress = 0;
    return _this;
  }

  _createClass(Lifebar, [{
    key: 'progress',
    get: function get() {
      return this.lifebarMask.scale.y;
    },
    set: function set(percent) {
      this.lifebarMask.scale.y = Math.min(Math.max(percent, 0), 1);

      if (this.lifebarMask.scale.y === 1) {
        this.emit('gameover');
      }
    }
  }]);

  return Lifebar;
}(PIXI.Container);

exports.default = Lifebar;

},{}],22:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Notification = function (_PIXI$Container) {
  _inherits(Notification, _PIXI$Container);

  function Notification() {
    _classCallCheck(this, Notification);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Notification).call(this));

    _this.container = new PIXI.Container();
    _this.addChild(_this.container);

    _this.bg = new PIXI.Sprite.fromImage('faixa1.png');
    _this.container.addChild(_this.bg);

    _this.killAmount = 0;

    _this.text = new PIXI.Text("Play", { font: "38px Berry_Rotunda", fill: 0x663910, textAlign: 'center' });
    _this.text.pivot.x = _this.text.width / 2;
    _this.text.x = _this.bg.width / 2;
    _this.text.y = 60;
    _this.container.addChild(_this.text);

    _this.kills = new PIXI.Text("0 kills", { font: "38px Berry_Rotunda", fill: 0x663910, textAlign: 'center' });
    _this.kills.pivot.x = _this.kills.width / 2;
    _this.kills.x = _this.bg.width / 2;
    _this.kills.y = 60;
    _this.kills.alpha = 0;
    _this.container.addChild(_this.kills);
    return _this;
  }

  _createClass(Notification, [{
    key: "incrementKill",
    value: function incrementKill() {
      this.killAmount++;
      this.label = this.killAmount.toString() + " kills";

      var fillPerKill = 5;

      this.punchAction.cooldownMask.y = Math.max(this.punchAction.cooldownMask.targetY, this.punchAction.cooldownMask.y - fillPerKill);
    }
  }, {
    key: "goUp",
    value: function goUp() {
      tweener.add(this.container).to({ y: this.container.y - 8 }, 1000, Tweener.ease.quadInOut).then(this.goDown.bind(this));
    }
  }, {
    key: "goDown",
    value: function goDown() {
      tweener.add(this.container).to({ y: this.container.y + 8 }, 1000, Tweener.ease.quadInOut).then(this.goUp.bind(this));
    }
  }, {
    key: "label",
    set: function set(text) {
      this.kills.text = text;
      this.kills.pivot.x = this.kills.width / 2;
    }
  }]);

  return Notification;
}(PIXI.Container);

exports.default = Notification;

},{}],23:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SpellButtonBehaviour = require('../../behaviours/entities/SpellButtonBehaviour');

var _SpellButtonBehaviour2 = _interopRequireDefault(_SpellButtonBehaviour);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PunchSpellButton = function (_PIXI$Container) {
  _inherits(PunchSpellButton, _PIXI$Container);

  function PunchSpellButton(id) {
    _classCallCheck(this, PunchSpellButton);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PunchSpellButton).call(this));

    _this.active = new PIXI.Sprite.fromImage('button-fist-inactive.png');
    _this.addChild(_this.active);

    _this.cooldown = new PIXI.Sprite.fromImage('button-fist.png');
    _this.addChild(_this.cooldown);

    _this.initY = _this.cooldown.height * 2;

    _this.cooldownMask = new PIXI.Graphics();
    _this.cooldownMask.lineStyle(2, 0x000000, 0.8);
    _this.cooldownMask.beginFill(0x000000);
    _this.cooldownMask.drawCircle(0, 0, _this.cooldown.height);
    _this.cooldownMask.x = _this.cooldownMask.width / 3;
    _this.cooldownMask.targetY = _this.cooldownMask.height / 2.5;
    _this.cooldownMask.y = _this.initY;
    _this.addChild(_this.cooldownMask);

    _this.cooldown.mask = _this.cooldownMask;

    // this.fillVelocity = 0.1
    _this.fillVelocity = 0.004;
    _this.usageBurn = 210;
    return _this;
  }

  _createClass(PunchSpellButton, [{
    key: 'init',
    value: function init() {
      this.addBehaviour(new _SpellButtonBehaviour2.default(), this.fillVelocity, this.usageBurn);
    }
  }, {
    key: 'width',
    get: function get() {
      return this.active.width;
    }
  }, {
    key: 'height',
    get: function get() {
      return this.active.height;
    }
  }, {
    key: 'isAvailable',
    get: function get() {
      return this.cooldownMask.y + this.usageBurn <= this.initY;
    }
  }]);

  return PunchSpellButton;
}(PIXI.Container);

exports.default = PunchSpellButton;

},{"../../behaviours/entities/SpellButtonBehaviour":9}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Textbox = function (_PIXI$Container) {
  _inherits(Textbox, _PIXI$Container);

  function Textbox(text) {
    _classCallCheck(this, Textbox);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Textbox).call(this));

    _this.bg = new PIXI.Sprite.fromImage('textbox.png');
    _this.bg.pivot.x = _this.bg.width / 2;
    _this.addChild(_this.bg);

    _this.text = new PIXI.Text(text, { font: "48px Berry_Rotunda", fill: 0xffffff, textAlign: 'center' });
    _this.text.pivot.x = _this.text.width / 2;
    _this.text.y = 6;
    _this.addChild(_this.text);
    return _this;
  }

  return Textbox;
}(PIXI.Container);

exports.default = Textbox;

},{}],25:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SpellButtonBehaviour = require('../../behaviours/entities/SpellButtonBehaviour');

var _SpellButtonBehaviour2 = _interopRequireDefault(_SpellButtonBehaviour);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ThunderSpellButton = function (_PIXI$Container) {
  _inherits(ThunderSpellButton, _PIXI$Container);

  function ThunderSpellButton(id) {
    _classCallCheck(this, ThunderSpellButton);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ThunderSpellButton).call(this));

    _this.active = new PIXI.Sprite.fromImage('button-thunder-inactive.png');
    _this.addChild(_this.active);

    _this.cooldown = new PIXI.Sprite.fromImage('button-thunder.png');
    _this.addChild(_this.cooldown);

    _this.initY = _this.cooldown.height * 2;

    _this.cooldownMask = new PIXI.Graphics();
    _this.cooldownMask.lineStyle(2, 0x000000, 0.8);
    _this.cooldownMask.beginFill(0x000000);
    _this.cooldownMask.drawCircle(0, 0, _this.cooldown.height);
    _this.cooldownMask.x = _this.cooldownMask.width / 3;
    _this.cooldownMask.targetY = _this.cooldownMask.height / 2.1;
    _this.cooldownMask.y = _this.cooldownMask.targetY;
    // this.cooldownMask.y = this.initY
    _this.addChild(_this.cooldownMask);

    _this.cooldown.mask = _this.cooldownMask;

    _this.fillVelocity = 0.02;
    _this.usageBurn = 15;
    return _this;
  }

  _createClass(ThunderSpellButton, [{
    key: 'init',
    value: function init() {
      this.addBehaviour(new _SpellButtonBehaviour2.default(), this.fillVelocity, this.usageBurn);
    }
  }, {
    key: 'width',
    get: function get() {
      return this.active.width;
    }
  }, {
    key: 'height',
    get: function get() {
      return this.active.height;
    }
  }, {
    key: 'isAvailable',
    get: function get() {
      return this.cooldownMask.y + this.usageBurn <= this.initY;
    }
  }]);

  return ThunderSpellButton;
}(PIXI.Container);

exports.default = ThunderSpellButton;

},{"../../behaviours/entities/SpellButtonBehaviour":9}],26:[function(require,module,exports){
'use strict';

var _Resources = require('./core/Resources');

var _Resources2 = _interopRequireDefault(_Resources);

var _Application = require('./Application');

var _Application2 = _interopRequireDefault(_Application);

var _howler = require('howler');

var _TitleScreen = require('./screens/TitleScreen');

var _TitleScreen2 = _interopRequireDefault(_TitleScreen);

var _GameScreen = require('./screens/GameScreen');

var _GameScreen2 = _interopRequireDefault(_GameScreen);

var _SplashScreen = require('./screens/SplashScreen');

var _SplashScreen2 = _interopRequireDefault(_SplashScreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('pixi-particles');

// Screens

console.log(require('../config/sound_effects.json'));
window.sounds = new _howler.Howl(require('../config/sound_effects.json'));
window.music = new _howler.Howl(require('../config/music.json'));

window.currentMusic = null;

var lastSoundPlayed = {};
window.playSound = function (alternatives) {
  if (typeof alternatives === "string") {
    return sounds.play(alternatives);
  } else {
    // play a different sound every time it's called
    var i = 999;
    do {
      i = Math.floor(Math.random() * alternatives.length);
    } while (i === lastSoundPlayed[alternatives]);

    lastSoundPlayed[alternatives] = i;
    return sounds.play(alternatives[i]);
  }
};

_Resources2.default.load(function () {
  window.APP = new _Application2.default();
  APP.gotoScene(_SplashScreen2.default);
  // APP.gotoScene(GameScreen)
  // APP.gotoScene(TitleScreen)
  APP.update();
});

},{"../config/music.json":1,"../config/sound_effects.json":3,"./Application":5,"./core/Resources":11,"./screens/GameScreen":28,"./screens/SplashScreen":29,"./screens/TitleScreen":30,"howler":37,"pixi-particles":38}],27:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GameScreen = require('./GameScreen');

var _GameScreen2 = _interopRequireDefault(_GameScreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameOverScreen = function (_PIXI$Container) {
  _inherits(GameOverScreen, _PIXI$Container);

  function GameOverScreen() {
    _classCallCheck(this, GameOverScreen);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GameOverScreen).call(this));

    music.stop();
    playSound('gameover');

    var gameover = PIXI.Sprite.fromImage('game-over.png');

    gameover.pivot.x = gameover.width / 2;
    gameover.pivot.y = gameover.height / 2;

    gameover.x = APP.width / 2;
    gameover.y = APP.height / 2;
    _this.addChild(gameover);

    var retry = new PIXI.Text("Try again", { font: '24px Arial', fill: 0xff1010, align: 'center' });
    retry.interactive = true;
    retry.x = APP.width / 2;
    retry.y = APP.height / 2 + 200;
    retry.pivot.set(retry.width / 2, retry.height / 2);
    retry.on('click', function () {
      return _this.emit('goto', _GameScreen2.default);
    });
    retry.on('touchstart', function () {
      return _this.emit('goto', _GameScreen2.default);
    });
    _this.addChild(retry);
    return _this;
  }

  _createClass(GameOverScreen, [{
    key: 'onDispose',
    value: function onDispose() {}
  }]);

  return GameOverScreen;
}(PIXI.Container);

exports.default = GameOverScreen;

},{"./GameScreen":28}],28:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TitleScreen = require('./TitleScreen');

var _TitleScreen2 = _interopRequireDefault(_TitleScreen);

var _GameOverScreen = require('./GameOverScreen');

var _GameOverScreen2 = _interopRequireDefault(_GameOverScreen);

var _KillCounter = require('../entities/hud/KillCounter');

var _KillCounter2 = _interopRequireDefault(_KillCounter);

var _ThunderSpellButton = require('../entities/hud/ThunderSpellButton');

var _ThunderSpellButton2 = _interopRequireDefault(_ThunderSpellButton);

var _PunchSpellButton = require('../entities/hud/PunchSpellButton');

var _PunchSpellButton2 = _interopRequireDefault(_PunchSpellButton);

var _FrozenSpellButton = require('../entities/hud/FrozenSpellButton');

var _FrozenSpellButton2 = _interopRequireDefault(_FrozenSpellButton);

var _RitualCircle = require('../entities/RitualCircle');

var _RitualCircle2 = _interopRequireDefault(_RitualCircle);

var _WaveController = require('../behaviours/controllers/WaveController');

var _WaveController2 = _interopRequireDefault(_WaveController);

var _Notification = require('../entities/hud/Notification');

var _Notification2 = _interopRequireDefault(_Notification);

var _Lifebar = require('../entities/hud/Lifebar');

var _Lifebar2 = _interopRequireDefault(_Lifebar);

var _God = require('../entities/God');

var _God2 = _interopRequireDefault(_God);

var _GodBehaviour = require('../behaviours/entities/GodBehaviour');

var _GodBehaviour2 = _interopRequireDefault(_GodBehaviour);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

window.HUD_MARGIN = 8;

var GameScreen = function (_PIXI$Container) {
  _inherits(GameScreen, _PIXI$Container);

  function GameScreen() {
    _classCallCheck(this, GameScreen);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GameScreen).call(this));

    currentMusic = music.play('title_screen').loop(true).volume(0.25);

    _this.waveController = new _WaveController2.default();

    _this.bg = new PIXI.Sprite.fromImage('images/background.jpg');
    _this.addChild(_this.bg);

    sounds.play('God_IntroScreen_Snoring').volume(0.5);

    //
    // Actions
    //

    _this.actionsContainer = new PIXI.Container();

    // gradients
    _this.bottomGradient = new PIXI.Sprite.fromImage('gradientbase.png');
    _this.bottomGradient.y = APP.height;
    _this.addChild(_this.bottomGradient);

    _this.topGradient = new PIXI.Sprite.fromImage('gradientbase.png');
    _this.topGradient.scale.y *= -1;
    _this.topGradient.y = -_this.topGradient.height;
    _this.addChild(_this.topGradient);

    _this.punchAction = new _PunchSpellButton2.default();
    _this.punchAction.pivot.x = _this.punchAction.width / 2;
    _this.punchAction.pivot.y = _this.punchAction.height / 2;
    _this.punchAction.x = APP.width / 2 + _this.punchAction.width / 5.7;
    _this.punchAction.y = _this.punchAction.height / 4;
    _this.actionsContainer.addChild(_this.punchAction);

    _this.thunderAction = new _ThunderSpellButton2.default();
    _this.thunderAction.pivot.x = _this.thunderAction.width / 2;
    _this.thunderAction.pivot.y = _this.thunderAction.height / 2;
    _this.thunderAction.x = APP.width / 2 - _this.thunderAction.width - HUD_MARGIN;
    _this.thunderAction.y = _this.punchAction.height - _this.thunderAction.height;
    _this.actionsContainer.addChild(_this.thunderAction);

    _this.frozenAction = new _FrozenSpellButton2.default();
    _this.frozenAction.alpha = 0.1;
    _this.frozenAction.pivot.x = _this.frozenAction.width / 2;
    _this.frozenAction.pivot.y = _this.frozenAction.height / 2;
    _this.frozenAction.x = APP.width / 2 + _this.punchAction.width + HUD_MARGIN;
    _this.frozenAction.y = _this.punchAction.height - _this.frozenAction.height;
    _this.actionsContainer.addChild(_this.frozenAction);

    _this.actionsContainer.pivot.x = _this.actionsContainer.width / 2;
    _this.actionsContainer.x = APP.width / 2 - _this.actionsContainer.width / 5;
    _this.actionsContainer.alpha = 0;
    _this.actionsContainer.y = APP.height;

    //
    // God
    //
    _this.god = new _God2.default();
    _this.god.x = APP.width / 2;

    _this.ritualCircle = new _RitualCircle2.default(_this.god);
    _this.ritualCircle.pivot.x = _this.ritualCircle.width / 2;
    _this.ritualCircle.pivot.y = _this.ritualCircle.height / 2;
    _this.ritualCircle.x = APP.width / 2 - 50;
    _this.ritualCircle.y = APP.height / 2 + _this.ritualCircle.height - 10;
    _this.addChild(_this.ritualCircle);

    _this.lifebar = new _Lifebar2.default();
    _this.lifebar.pivot.x = _this.lifebar.width / 2;
    _this.lifebar.pivot.y = _this.lifebar.height / 2;
    _this.lifebar.x = APP.width / 2;
    _this.lifebar.y = APP.height / 2 + 30;
    _this.lifebar.once('gameover', function () {
      return _this.emit('goto', _GameOverScreen2.default);
    });
    _this.addChild(_this.lifebar);

    _this.addChild(_this.god);

    _this.addChild(_this.actionsContainer);

    //
    // "HUD"
    //

    _this.notification = new _Notification2.default();
    _this.notification.pivot.x = _this.notification.bg.width / 2;
    _this.notification.pivot.y = _this.notification.bg.height / 2;
    _this.notification.x = APP.width / 2;
    _this.notification.y = APP.height - _this.notification.height - 80;
    _this.notification.punchAction = _this.punchAction; // TODO: move me to elsewhere
    _this.notification.goUp();
    _this.addChild(_this.notification);

    // add wave controller to ritual circle
    _this.ritualCircle.addBehaviour(_this.waveController, {
      notification: _this.notification,
      lifebar: _this.lifebar,
      god: _this.god
    });

    //
    // Intro
    //
    _this.god.y = _this.god.height + HUD_MARGIN;
    _this.god.setFace('sleeping');
    console.log(_this.god.currentFace);

    _this.introUfoLight = new PIXI.Sprite.fromImage('UFOLight.png');
    _this.introUfoLight.pivot.x = _this.introUfoLight.width / 2;
    _this.introUfoLight.pivot.y = 0;
    _this.introUfoLight.x = APP.width / 2 + 50;
    _this.introUfoLight.y = _this.god.y + _this.god.height / 3;
    _this.addChild(_this.introUfoLight);

    _this.introUfo = new PIXI.Sprite.fromImage('UFO.png');
    _this.introUfo.pivot.x = _this.introUfo.width / 2;
    _this.introUfo.pivot.y = _this.introUfo.height / 2;
    _this.introUfo.x = APP.width / 2;
    _this.introUfo.y = _this.god.y + _this.god.height / 4;
    _this.addChild(_this.introUfo);

    // notification / events
    _this.notification.on('click', _this.startGame.bind(_this));
    _this.notification.on('touchstart', _this.startGame.bind(_this));
    _this.notification.interactive = true;
    _this.notification.buttonMode = true;

    _this.introGoDown();
    _this.scaleXUp();

    window.addEventListener('resize', _this.onResize.bind(_this));

    _this.on('touchstart', _this.onTouchStart.bind(_this));
    _this.on('touchend', _this.onTouchEnd.bind(_this));

    _this.on('dispose', _this.onDispose.bind(_this));
    return _this;
  }

  _createClass(GameScreen, [{
    key: 'init',
    value: function init() {
      // bottomGradient.y = APP.height - bottomGradient.height
      // this.actionsContainer.y = APP.height - this.actionsContainer.height - 30
      // this.topGradient.y = 0
      // this.actionsContainer.alpha = 1
      // currentMusic = music.play('loop').loop(true)
      // this.notification.y = this.god.y + this.god.height / 3

      // this.emit('start')
    }
  }, {
    key: 'startGame',
    value: function startGame() {
      var _this2 = this;

      sounds.stop('God_IntroScreen_Snoring');
      playSound('UI_Button');
      this.god.setFace('serious');

      this.notification.removeAllListeners();
      this.notification.buttonMode = this.notification.interactive = false;

      // tweener.add(this.god.punchShadow).
      //   to({ alpha: 0 }, 200, Tweener.ease.quintInOut).then(() => {
      //     this.god.removeChild(this.god.punchShadow)
      //   })

      tweener.add(this.bottomGradient).wait(1500).to({ y: APP.height - this.bottomGradient.height }, 1000, Tweener.ease.quintInOut);
      tweener.add(this.actionsContainer).wait(1500).to({ y: APP.height - this.actionsContainer.height - 30, alpha: 1 }, 1000, Tweener.ease.quintInOut);
      tweener.add(this.topGradient).wait(1500).to({ y: 0 }, 1000, Tweener.ease.quintInOut).then(function () {
        currentMusic.stop();
        currentMusic = music.play('loop').loop(true);

        _this2.god.addBehaviour(new _GodBehaviour2.default(), {
          waveController: _this2.waveController,
          thunderAction: _this2.thunderAction,
          punchAction: _this2.punchAction,
          frozenAction: _this2.frozenAction,
          notification: _this2.notification,
          killCounter: _this2.killCounter
        });

        _this2.waveController.emit('start');
      });

      var destGodY = this.god.height + HUD_MARGIN * 8;

      // move ufo light
      tweener.add(this.introUfoLight).to({ alpha: 0 }, 1000, Tweener.ease.quintInOut);

      // remove "play" from notification, show kills
      tweener.add(this.notification.text).to({ alpha: 0 }, 2000, Tweener.ease.quintInOut);
      tweener.add(this.notification.kills).to({ alpha: 1 }, 2000, Tweener.ease.quintInOut);

      // move notification to god
      tweener.add(this.notification).to({ y: destGodY + this.god.height / 3 }, 2500, Tweener.ease.quintInOut);

      // move notification to god
      tweener.add(this.notification).to({ y: destGodY + this.god.height / 3 }, 2500, Tweener.ease.quintInOut);

      tweener.add(this.introUfoLight.scale).to({ y: 0.6 }, 1000, Tweener.ease.quintInOut).then(function () {
        _this2.introUfoLight.parent.removeChild(_this2.introUfoLight);
      });

      // move god
      tweener.add(this.god).wait(600).to({ y: destGodY }, 1000, Tweener.ease.quadInOut);

      // move ufo
      tweener.add(this.introUfo).wait(1000).to({ y: this.introUfo.y + 50, alpha: 0 }, 1600, Tweener.ease.quintOut).then(function () {
        _this2.introUfo.parent.removeChild(_this2.introUfo);
      });
    }
  }, {
    key: 'introGoUp',
    value: function introGoUp() {
      tweener.add(this.introUfo).to({ y: this.introUfo.y - 8 }, 1000, Tweener.ease.quadInOut).then(this.introGoDown.bind(this));
    }
  }, {
    key: 'introGoDown',
    value: function introGoDown() {
      if (!this.introUfoLight.parent) return;

      tweener.add(this.introUfo).to({ y: this.introUfo.y + 8 }, 1000, Tweener.ease.quadInOut).then(this.introGoUp.bind(this));
    }

    // introScaleShadowUp () {
    //   tweener.add(this.god.punchShadow.scale).
    //     to({ x: 1.02, y: 1.02 }, 1000, Tweener.ease.quadInOut).
    //     then(this.introScaleShadowDown.bind(this))
    // }

    // introScaleShadowDown () {
    //   if (!this.introUfoLight.parent) return
    //   tweener.add(this.god.punchShadow.scale).
    //     to({ x: 0.98, y: 0.98 }, 1000, Tweener.ease.quadInOut).
    //     then(this.introScaleShadowUp.bind(this))
    // }

  }, {
    key: 'scaleXUp',
    value: function scaleXUp() {
      tweener.add(this.introUfoLight.scale).to({ x: 1.05 }, 1500, Tweener.ease.quadInOut).then(this.scaleXDown.bind(this));
    }
  }, {
    key: 'scaleXDown',
    value: function scaleXDown() {
      if (!this.introUfoLight.parent) return;

      tweener.add(this.introUfoLight.scale).to({ x: 0.95 }, 1500, Tweener.ease.quadInOut).then(this.scaleXUp.bind(this));
    }
  }, {
    key: 'onTouchStart',
    value: function onTouchStart(e) {}
  }, {
    key: 'onTouchEnd',
    value: function onTouchEnd(e) {}
  }, {
    key: 'onResize',
    value: function onResize() {}
  }, {
    key: 'onDispose',
    value: function onDispose() {}
  }]);

  return GameScreen;
}(PIXI.Container);

exports.default = GameScreen;

},{"../behaviours/controllers/WaveController":6,"../behaviours/entities/GodBehaviour":7,"../entities/God":13,"../entities/RitualCircle":15,"../entities/hud/FrozenSpellButton":19,"../entities/hud/KillCounter":20,"../entities/hud/Lifebar":21,"../entities/hud/Notification":22,"../entities/hud/PunchSpellButton":23,"../entities/hud/ThunderSpellButton":25,"./GameOverScreen":27,"./TitleScreen":30}],29:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GameScreen = require('./GameScreen');

var _GameScreen2 = _interopRequireDefault(_GameScreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SplashScreen = function (_PIXI$Container) {
  _inherits(SplashScreen, _PIXI$Container);

  function SplashScreen() {
    _classCallCheck(this, SplashScreen);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SplashScreen).call(this));

    _this.bg = new PIXI.Sprite.fromImage('images/splash_screen.jpg');
    _this.addChild(_this.bg);

    tweener.add(_this.bg).from({ alpha: 0 }, 800, Tweener.quartInOut).then(function () {
      clock.setTimeout(function () {
        _this.emit('goto', _GameScreen2.default);
      }, 1000);
    });

    _this.on('dispose', _this.onDispose.bind(_this));
    return _this;
  }

  _createClass(SplashScreen, [{
    key: 'onDispose',
    value: function onDispose() {}
  }]);

  return SplashScreen;
}(PIXI.Container);

exports.default = SplashScreen;

},{"./GameScreen":28}],30:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GameScreen = require('./GameScreen');

var _GameScreen2 = _interopRequireDefault(_GameScreen);

var _Explosion = require('../behaviours/particles/Explosion');

var _Explosion2 = _interopRequireDefault(_Explosion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TitleScreen = function (_PIXI$Container) {
  _inherits(TitleScreen, _PIXI$Container);

  function TitleScreen() {
    _classCallCheck(this, TitleScreen);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TitleScreen).call(this));

    var title = new PIXI.Text("GGJ16", { font: '24px Arial', fill: 0xff1010, align: 'center' });
    title.pivot.set(title.width / 2, title.height / 2);
    title.y = 40;
    title.x = APP.width / 2;
    _this.addChild(title);

    var start = new PIXI.Text("START", { font: '24px Arial', fill: 0xff1010, align: 'center' });
    start.interactive = true;
    start.x = APP.width / 2;
    start.pivot.set(start.width / 2, start.height / 2);
    start.y += 100;
    // start.on('click', this.onStartClick.bind(this))
    // start.on('touchstart', this.onStartClick.bind(this))
    _this.addChild(start);

    _this.addBehaviour(new _Explosion2.default());

    _this.on('dispose', _this.onDispose.bind(_this));
    return _this;
  }

  _createClass(TitleScreen, [{
    key: 'onDispose',
    value: function onDispose() {}
  }]);

  return TitleScreen;
}(PIXI.Container);

exports.default = TitleScreen;

},{"../behaviours/particles/Explosion":10,"./GameScreen":28}],31:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Behaviour = (function () {
  function Behaviour() {
    _classCallCheck(this, Behaviour);

    this.entity = null;
    this.object = null;

    this._callbacks = [];
  }

  _createClass(Behaviour, [{
    key: 'attach',
    value: function attach(entity) {
      this.entity = entity;
      this.object = entity.object;
    }
  }, {
    key: 'onAttach',
    value: function onAttach(options) {}
  }, {
    key: 'onDetach',
    value: function onDetach() {}
  }, {
    key: 'detach',
    value: function detach() {
      this.emit('detach', this);

      // clear all callbacks this behaviour registered
      for (var i = 0; i < this._callbacks.length; i++) {
        this.off.apply(this, this._callbacks[i]);
      }
    }

    // delegate EventEmitter events from it's Entity

  }, {
    key: 'on',
    value: function on() {
      this._callbacks.push(arguments);
      this.entity.on.apply(this.entity, arguments);
    }
  }, {
    key: 'once',
    value: function once() {
      this._callbacks.push(arguments);
      this.entity.once.apply(this.entity, arguments);
    }
  }, {
    key: 'off',
    value: function off() {
      this.entity.off.apply(this.entity, arguments);
    }
  }, {
    key: 'emit',
    value: function emit() {
      this.entity.emit.apply(this.entity, arguments);
    }
  }]);

  return Behaviour;
})();

module.exports = Behaviour;
},{}],32:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventEmitter = require('tiny-emitter');

var Entity = (function (_EventEmitter) {
  _inherits(Entity, _EventEmitter);

  function Entity(object, id) {
    _classCallCheck(this, Entity);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Entity).call(this));

    _this.id = id;
    _this.object = object;

    _this.behaviours = [];
    _this.on('detach', _this.detach.bind(_this));
    return _this;
  }

  _createClass(Entity, [{
    key: 'attach',
    value: function attach(behaviour, args) {
      this.behaviours.push(behaviour);

      behaviour.attach(this);
      behaviour.onAttach.apply(behaviour, args);
    }
  }, {
    key: 'detach',
    value: function detach(behaviour) {
      var index = this.behaviours.indexOf(behaviour);

      if (index !== -1) {
        this.behaviours.splice(index, 1);
        behaviour.onDetach();
      }
    }
  }, {
    key: 'detachAll',
    value: function detachAll() {
      var i = this.behaviours.length;
      while (i--) {
        this.detach(this.behaviours[i]);
      }
    }
  }, {
    key: 'update',
    value: function update() {
      var i = this.behaviours.length;
      while (i--) {
        if (this.behaviours[i].update) {
          this.behaviours[i].update();
        }
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.detachAll();
      this.emit('destroy');
    }
  }]);

  return Entity;
})(EventEmitter);

module.exports = Entity;
},{"tiny-emitter":39}],33:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Entity = require('./Entity');

var System = (function () {
  function System() {
    _classCallCheck(this, System);

    this.objectId = 0;
    this.entities = {};
  }

  _createClass(System, [{
    key: 'add',
    value: function add(entity) {
      this.entities[entity.id] = entity;
      entity.on('destroy', this.onEntityDestroy.bind(this, entity));
    }
  }, {
    key: 'update',
    value: function update() {
      for (var id in this.entities) {
        this.entities[id].update();
      }
    }
  }, {
    key: 'mount',
    value: function mount(baseClass) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      if (!options.addBehaviour) options.addBehaviour = 'addBehaviour';
      if (!options.getEntity) options.getEntity = 'getEntity';

      this.baseClass = baseClass;
      this.mountOptions = options;

      var system = this;

      this.baseClass.prototype[options.getEntity] = function () {
        if (!this.__ENTITY__) {
          this.__ENTITY__ = new Entity(this, system.objectId++);
          system.add(this.__ENTITY__);
        }
        return this.__ENTITY__;
      };

      this.baseClass.prototype[options.addBehaviour] = function (behaviourClass) {
        var entity = this[options.getEntity]();

        var args = Array.prototype.splice.apply(arguments, [1]);
        entity.attach(behaviourClass, args);

        return entity;
      };
    }
  }, {
    key: 'onEntityDestroy',
    value: function onEntityDestroy(entity) {
      delete this.entities[entity.id];
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      delete this.baseClass.prototype[this.mountOptions.addBehaviour];
      delete this.baseClass.prototype[this.mountOptions.getEntity];
    }
  }]);

  return System;
})();

module.exports = System;
},{"./Entity":32}],34:[function(require,module,exports){
'use strict';

var Behaviour = require('./Behaviour'),
    System = require('./System');

module.exports.createComponentSystem = function createComponentSystem(klass) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var system = new System();
  system.mount(klass, options);
  return system;
};

module.exports.Behaviour = Behaviour;
},{"./Behaviour":31,"./System":33}],35:[function(require,module,exports){
'use strict';var _get=function get(object,property,receiver){if(object===null)object=Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc===undefined){var parent=Object.getPrototypeOf(object);if(parent===null){return undefined}else {return get(parent,property,receiver)}}else if("value" in desc){return desc.value}else {var getter=desc.get;if(getter===undefined){return undefined}return getter.call(receiver)}};var _createClass=(function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}})();var _clock=require('clock.js');var _clock2=_interopRequireDefault(_clock);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}var TYPE_INTERVAL=0,TYPE_TIMEOUT=1;var Delayed=(function(){function Delayed(handler,args,time,type){_classCallCheck(this,Delayed);this.active=true;this.handler=handler;this.args=args;this.time=time;this.elapsedTime=0;this.type=type}_createClass(Delayed,[{key:'tick',value:function tick(deltaTime){this.elapsedTime+=deltaTime;if(this.elapsedTime>=this.time){this.execute()}}},{key:'execute',value:function execute(){this.handler.apply(this,this.args);if(this.type===TYPE_TIMEOUT){this.active=false}else {this.elapsedTime-=this.time}}},{key:'clear',value:function clear(){this.active=false}}]);return Delayed})();var ClockTimer=(function(_Clock){_inherits(ClockTimer,_Clock);function ClockTimer(autoStart){_classCallCheck(this,ClockTimer);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(ClockTimer).call(this,autoStart));_this.delayed=[];return _this}_createClass(ClockTimer,[{key:'tick',value:function tick(){_get(Object.getPrototypeOf(ClockTimer.prototype),'tick',this).call(this);var i=this.delayed.length;while(i--){this.delayed[i].tick(this.deltaTime);if(!this.delayed[i].active){this.delayed.splice(i,1)}}}},{key:'setInterval',value:function setInterval(handler,time){for(var _len=arguments.length,args=Array(_len>2?_len-2:0),_key=2;_key<_len;_key++){args[_key-2]=arguments[_key]}var delayed=new Delayed(handler,args,time,TYPE_INTERVAL);this.delayed.push(delayed);return delayed}},{key:'setTimeout',value:function setTimeout(handler,time){for(var _len2=arguments.length,args=Array(_len2>2?_len2-2:0),_key2=2;_key2<_len2;_key2++){args[_key2-2]=arguments[_key2]}var delayed=new Delayed(handler,args,time,TYPE_TIMEOUT);this.delayed.push(delayed);return delayed}}]);return ClockTimer})(_clock2.default);module.exports=ClockTimer;
},{"clock.js":36}],36:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Clock = (function () {
  function Clock() {
    var autoStart = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

    _classCallCheck(this, Clock);

    this.running = false;

    this.deltaTime = 0;
    this.currentTime = 0;
    this.elapsedTime = 0;

    this.now = typeof window !== "undefined" && window.performance && window.performance.now.bind(window.performance) || Date.now;

    // auto-start
    if (autoStart) {
      this.start();
    }
  }

  _createClass(Clock, [{
    key: "start",
    value: function start() {
      this.deltaTime = 0;
      this.currentTime = this.now();
      this.elapsedTime = 0;
      this.running = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      this.running = false;
    }
  }, {
    key: "tick",
    value: function tick() {
      var newTime = arguments.length <= 0 || arguments[0] === undefined ? this.now() : arguments[0];

      this.deltaTime = newTime - this.currentTime;
      this.currentTime = newTime;
      this.elapsedTime += this.deltaTime;
    }
  }]);

  return Clock;
})();

module.exports = Clock;
},{}],37:[function(require,module,exports){
/*!
 *  howler.js v1.1.29
 *  howlerjs.com
 *
 *  (c) 2013-2016, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

(function() {
  // setup
  var cache = {};

  // setup the audio context
  var ctx = null,
    usingWebAudio = true,
    noAudio = false;
  try {
    if (typeof AudioContext !== 'undefined') {
      ctx = new AudioContext();
    } else if (typeof webkitAudioContext !== 'undefined') {
      ctx = new webkitAudioContext();
    } else {
      usingWebAudio = false;
    }
  } catch(e) {
    usingWebAudio = false;
  }

  if (!usingWebAudio) {
    if (typeof Audio !== 'undefined') {
      try {
        new Audio();
      } catch(e) {
        noAudio = true;
      }
    } else {
      noAudio = true;
    }
  }

  // create a master gain node
  if (usingWebAudio) {
    var masterGain = (typeof ctx.createGain === 'undefined') ? ctx.createGainNode() : ctx.createGain();
    masterGain.gain.value = 1;
    masterGain.connect(ctx.destination);
  }

  // create global controller
  var HowlerGlobal = function(codecs) {
    this._volume = 1;
    this._muted = false;
    this.usingWebAudio = usingWebAudio;
    this.ctx = ctx;
    this.noAudio = noAudio;
    this._howls = [];
    this._codecs = codecs;
    this.iOSAutoEnable = true;
  };
  HowlerGlobal.prototype = {
    /**
     * Get/set the global volume for all sounds.
     * @param  {Float} vol Volume from 0.0 to 1.0.
     * @return {Howler/Float}     Returns self or current volume.
     */
    volume: function(vol) {
      var self = this;

      // make sure volume is a number
      vol = parseFloat(vol);

      if (vol >= 0 && vol <= 1) {
        self._volume = vol;

        if (usingWebAudio) {
          masterGain.gain.value = vol;
        }

        // loop through cache and change volume of all nodes that are using HTML5 Audio
        for (var key in self._howls) {
          if (self._howls.hasOwnProperty(key) && self._howls[key]._webAudio === false) {
            // loop through the audio nodes
            for (var i=0; i<self._howls[key]._audioNode.length; i++) {
              self._howls[key]._audioNode[i].volume = self._howls[key]._volume * self._volume;
            }
          }
        }

        return self;
      }

      // return the current global volume
      return (usingWebAudio) ? masterGain.gain.value : self._volume;
    },

    /**
     * Mute all sounds.
     * @return {Howler}
     */
    mute: function() {
      this._setMuted(true);

      return this;
    },

    /**
     * Unmute all sounds.
     * @return {Howler}
     */
    unmute: function() {
      this._setMuted(false);

      return this;
    },

    /**
     * Handle muting and unmuting globally.
     * @param  {Boolean} muted Is muted or not.
     */
    _setMuted: function(muted) {
      var self = this;

      self._muted = muted;

      if (usingWebAudio) {
        masterGain.gain.value = muted ? 0 : self._volume;
      }

      for (var key in self._howls) {
        if (self._howls.hasOwnProperty(key) && self._howls[key]._webAudio === false) {
          // loop through the audio nodes
          for (var i=0; i<self._howls[key]._audioNode.length; i++) {
            self._howls[key]._audioNode[i].muted = muted;
          }
        }
      }
    },

    /**
     * Check for codec support.
     * @param  {String} ext Audio file extension.
     * @return {Boolean}
     */
    codecs: function(ext) {
      return this._codecs[ext];
    },

    /**
     * iOS will only allow audio to be played after a user interaction.
     * Attempt to automatically unlock audio on the first user interaction.
     * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
     * @return {Howler}
     */
    _enableiOSAudio: function() {
      var self = this;

      // only run this on iOS if audio isn't already eanbled
      if (ctx && (self._iOSEnabled || !/iPhone|iPad|iPod/i.test(navigator.userAgent))) {
        return;
      }

      self._iOSEnabled = false;

      // call this method on touch start to create and play a buffer,
      // then check if the audio actually played to determine if
      // audio has now been unlocked on iOS
      var unlock = function() {
        // create an empty buffer
        var buffer = ctx.createBuffer(1, 1, 22050);
        var source = ctx.createBufferSource();
        source.buffer = buffer;
        source.connect(ctx.destination);

        // play the empty buffer
        if (typeof source.start === 'undefined') {
          source.noteOn(0);
        } else {
          source.start(0);
        }

        // setup a timeout to check that we are unlocked on the next event loop
        setTimeout(function() {
          if ((source.playbackState === source.PLAYING_STATE || source.playbackState === source.FINISHED_STATE)) {
            // update the unlocked state and prevent this check from happening again
            self._iOSEnabled = true;
            self.iOSAutoEnable = false;

            // remove the touch start listener
            window.removeEventListener('touchend', unlock, false);
          }
        }, 0);
      };

      // setup a touch start listener to attempt an unlock in
      window.addEventListener('touchend', unlock, false);

      return self;
    }
  };

  // check for browser codec support
  var audioTest = null;
  var codecs = {};
  if (!noAudio) {
    audioTest = new Audio();
    codecs = {
      mp3: !!audioTest.canPlayType('audio/mpeg;').replace(/^no$/, ''),
      opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
      ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
      wav: !!audioTest.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''),
      aac: !!audioTest.canPlayType('audio/aac;').replace(/^no$/, ''),
      m4a: !!(audioTest.canPlayType('audio/x-m4a;') || audioTest.canPlayType('audio/m4a;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
      mp4: !!(audioTest.canPlayType('audio/x-mp4;') || audioTest.canPlayType('audio/mp4;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
      weba: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '')
    };
  }

  // allow access to the global audio controls
  var Howler = new HowlerGlobal(codecs);

  // setup the audio object
  var Howl = function(o) {
    var self = this;

    // setup the defaults
    self._autoplay = o.autoplay || false;
    self._buffer = o.buffer || false;
    self._duration = o.duration || 0;
    self._format = o.format || null;
    self._loop = o.loop || false;
    self._loaded = false;
    self._sprite = o.sprite || {};
    self._src = o.src || '';
    self._pos3d = o.pos3d || [0, 0, -0.5];
    self._volume = o.volume !== undefined ? o.volume : 1;
    self._urls = o.urls || [];
    self._rate = o.rate || 1;

    // allow forcing of a specific panningModel ('equalpower' or 'HRTF'),
    // if none is specified, defaults to 'equalpower' and switches to 'HRTF'
    // if 3d sound is used
    self._model = o.model || null;

    // setup event functions
    self._onload = [o.onload || function() {}];
    self._onloaderror = [o.onloaderror || function() {}];
    self._onend = [o.onend || function() {}];
    self._onpause = [o.onpause || function() {}];
    self._onplay = [o.onplay || function() {}];

    self._onendTimer = [];

    // Web Audio or HTML5 Audio?
    self._webAudio = usingWebAudio && !self._buffer;

    // check if we need to fall back to HTML5 Audio
    self._audioNode = [];
    if (self._webAudio) {
      self._setupAudioNode();
    }

    // automatically try to enable audio on iOS
    if (typeof ctx !== 'undefined' && ctx && Howler.iOSAutoEnable) {
      Howler._enableiOSAudio();
    }

    // add this to an array of Howl's to allow global control
    Howler._howls.push(self);

    // load the track
    self.load();
  };

  // setup all of the methods
  Howl.prototype = {
    /**
     * Load an audio file.
     * @return {Howl}
     */
    load: function() {
      var self = this,
        url = null;

      // if no audio is available, quit immediately
      if (noAudio) {
        self.on('loaderror', new Error('No audio support.'));
        return;
      }

      // loop through source URLs and pick the first one that is compatible
      for (var i=0; i<self._urls.length; i++) {
        var ext, urlItem;

        if (self._format) {
          // use specified audio format if available
          ext = self._format;
        } else {
          // figure out the filetype (whether an extension or base64 data)
          urlItem = self._urls[i];
          ext = /^data:audio\/([^;,]+);/i.exec(urlItem);
          if (!ext) {
            ext = /\.([^.]+)$/.exec(urlItem.split('?', 1)[0]);
          }

          if (ext) {
            ext = ext[1].toLowerCase();
          } else {
            self.on('loaderror', new Error('Could not extract format from passed URLs, please add format parameter.'));
            return;
          }
        }

        if (codecs[ext]) {
          url = self._urls[i];
          break;
        }
      }

      if (!url) {
        self.on('loaderror', new Error('No codec support for selected audio sources.'));
        return;
      }

      self._src = url;

      if (self._webAudio) {
        loadBuffer(self, url);
      } else {
        var newNode = new Audio();

        // listen for errors with HTML5 audio (http://dev.w3.org/html5/spec-author-view/spec.html#mediaerror)
        newNode.addEventListener('error', function () {
          if (newNode.error && newNode.error.code === 4) {
            HowlerGlobal.noAudio = true;
          }

          self.on('loaderror', {type: newNode.error ? newNode.error.code : 0});
        }, false);

        self._audioNode.push(newNode);

        // setup the new audio node
        newNode.src = url;
        newNode._pos = 0;
        newNode.preload = 'auto';
        newNode.volume = (Howler._muted) ? 0 : self._volume * Howler.volume();

        // setup the event listener to start playing the sound
        // as soon as it has buffered enough
        var listener = function() {
          // round up the duration when using HTML5 Audio to account for the lower precision
          self._duration = Math.ceil(newNode.duration * 10) / 10;

          // setup a sprite if none is defined
          if (Object.getOwnPropertyNames(self._sprite).length === 0) {
            self._sprite = {_default: [0, self._duration * 1000]};
          }

          if (!self._loaded) {
            self._loaded = true;
            self.on('load');
          }

          if (self._autoplay) {
            self.play();
          }

          // clear the event listener
          newNode.removeEventListener('canplaythrough', listener, false);
        };
        newNode.addEventListener('canplaythrough', listener, false);
        newNode.load();
      }

      return self;
    },

    /**
     * Get/set the URLs to be pulled from to play in this source.
     * @param  {Array} urls  Arry of URLs to load from
     * @return {Howl}        Returns self or the current URLs
     */
    urls: function(urls) {
      var self = this;

      if (urls) {
        self.stop();
        self._urls = (typeof urls === 'string') ? [urls] : urls;
        self._loaded = false;
        self.load();

        return self;
      } else {
        return self._urls;
      }
    },

    /**
     * Play a sound from the current time (0 by default).
     * @param  {String}   sprite   (optional) Plays from the specified position in the sound sprite definition.
     * @param  {Function} callback (optional) Returns the unique playback id for this sound instance.
     * @return {Howl}
     */
    play: function(sprite, callback) {
      var self = this;

      // if no sprite was passed but a callback was, update the variables
      if (typeof sprite === 'function') {
        callback = sprite;
      }

      // use the default sprite if none is passed
      if (!sprite || typeof sprite === 'function') {
        sprite = '_default';
      }

      // if the sound hasn't been loaded, add it to the event queue
      if (!self._loaded) {
        self.on('load', function() {
          self.play(sprite, callback);
        });

        return self;
      }

      // if the sprite doesn't exist, play nothing
      if (!self._sprite[sprite]) {
        if (typeof callback === 'function') callback();
        return self;
      }

      // get the node to playback
      self._inactiveNode(function(node) {
        // persist the sprite being played
        node._sprite = sprite;

        // determine where to start playing from
        var pos = (node._pos > 0) ? node._pos : self._sprite[sprite][0] / 1000;

        // determine how long to play for
        var duration = 0;
        if (self._webAudio) {
          duration = self._sprite[sprite][1] / 1000 - node._pos;
          if (node._pos > 0) {
            pos = self._sprite[sprite][0] / 1000 + pos;
          }
        } else {
          duration = self._sprite[sprite][1] / 1000 - (pos - self._sprite[sprite][0] / 1000);
        }

        // determine if this sound should be looped
        var loop = !!(self._loop || self._sprite[sprite][2]);

        // set timer to fire the 'onend' event
        var soundId = (typeof callback === 'string') ? callback : Math.round(Date.now() * Math.random()) + '',
          timerId;
        (function() {
          var data = {
            id: soundId,
            sprite: sprite,
            loop: loop
          };
          timerId = setTimeout(function() {
            // if looping, restart the track
            if (!self._webAudio && loop) {
              self.stop(data.id).play(sprite, data.id);
            }

            // set web audio node to paused at end
            if (self._webAudio && !loop) {
              self._nodeById(data.id).paused = true;
              self._nodeById(data.id)._pos = 0;

              // clear the end timer
              self._clearEndTimer(data.id);
            }

            // end the track if it is HTML audio and a sprite
            if (!self._webAudio && !loop) {
              self.stop(data.id);
            }

            // fire ended event
            self.on('end', soundId);
          }, (duration / self._rate) * 1000);

          // store the reference to the timer
          self._onendTimer.push({timer: timerId, id: data.id});
        })();

        if (self._webAudio) {
          var loopStart = self._sprite[sprite][0] / 1000,
            loopEnd = self._sprite[sprite][1] / 1000;

          // set the play id to this node and load into context
          node.id = soundId;
          node.paused = false;
          refreshBuffer(self, [loop, loopStart, loopEnd], soundId);
          self._playStart = ctx.currentTime;
          node.gain.value = self._volume;

          if (typeof node.bufferSource.start === 'undefined') {
            loop ? node.bufferSource.noteGrainOn(0, pos, 86400) : node.bufferSource.noteGrainOn(0, pos, duration);
          } else {
            loop ? node.bufferSource.start(0, pos, 86400) : node.bufferSource.start(0, pos, duration);
          }
        } else {
          if (node.readyState === 4 || !node.readyState && navigator.isCocoonJS) {
            node.readyState = 4;
            node.id = soundId;
            node.currentTime = pos;
            node.muted = Howler._muted || node.muted;
            node.volume = self._volume * Howler.volume();
            setTimeout(function() { node.play(); }, 0);
          } else {
            self._clearEndTimer(soundId);

            (function(){
              var sound = self,
                playSprite = sprite,
                fn = callback,
                newNode = node;
              var listener = function() {
                sound.play(playSprite, fn);

                // clear the event listener
                newNode.removeEventListener('canplaythrough', listener, false);
              };
              newNode.addEventListener('canplaythrough', listener, false);
            })();

            return self;
          }
        }

        // fire the play event and send the soundId back in the callback
        self.on('play');
        if (typeof callback === 'function') callback(soundId);

        return self;
      });

      return self;
    },

    /**
     * Pause playback and save the current position.
     * @param {String} id (optional) The play instance ID.
     * @return {Howl}
     */
    pause: function(id) {
      var self = this;

      // if the sound hasn't been loaded, add it to the event queue
      if (!self._loaded) {
        self.on('play', function() {
          self.pause(id);
        });

        return self;
      }

      // clear 'onend' timer
      self._clearEndTimer(id);

      var activeNode = (id) ? self._nodeById(id) : self._activeNode();
      if (activeNode) {
        activeNode._pos = self.pos(null, id);

        if (self._webAudio) {
          // make sure the sound has been created
          if (!activeNode.bufferSource || activeNode.paused) {
            return self;
          }

          activeNode.paused = true;
          if (typeof activeNode.bufferSource.stop === 'undefined') {
            activeNode.bufferSource.noteOff(0);
          } else {
            activeNode.bufferSource.stop(0);
          }
        } else {
          activeNode.pause();
        }
      }

      self.on('pause');

      return self;
    },

    /**
     * Stop playback and reset to start.
     * @param  {String} id  (optional) The play instance ID.
     * @return {Howl}
     */
    stop: function(id) {
      var self = this;

      // if the sound hasn't been loaded, add it to the event queue
      if (!self._loaded) {
        self.on('play', function() {
          self.stop(id);
        });

        return self;
      }

      // clear 'onend' timer
      self._clearEndTimer(id);

      var activeNode = (id) ? self._nodeById(id) : self._activeNode();
      if (activeNode) {
        activeNode._pos = 0;

        if (self._webAudio) {
          // make sure the sound has been created
          if (!activeNode.bufferSource || activeNode.paused) {
            return self;
          }

          activeNode.paused = true;

          if (typeof activeNode.bufferSource.stop === 'undefined') {
            activeNode.bufferSource.noteOff(0);
          } else {
            activeNode.bufferSource.stop(0);
          }
        } else if (!isNaN(activeNode.duration)) {
          activeNode.pause();
          activeNode.currentTime = 0;
        }
      }

      return self;
    },

    /**
     * Mute this sound.
     * @param  {String} id (optional) The play instance ID.
     * @return {Howl}
     */
    mute: function(id) {
      var self = this;

      // if the sound hasn't been loaded, add it to the event queue
      if (!self._loaded) {
        self.on('play', function() {
          self.mute(id);
        });

        return self;
      }

      var activeNode = (id) ? self._nodeById(id) : self._activeNode();
      if (activeNode) {
        if (self._webAudio) {
          activeNode.gain.value = 0;
        } else {
          activeNode.muted = true;
        }
      }

      return self;
    },

    /**
     * Unmute this sound.
     * @param  {String} id (optional) The play instance ID.
     * @return {Howl}
     */
    unmute: function(id) {
      var self = this;

      // if the sound hasn't been loaded, add it to the event queue
      if (!self._loaded) {
        self.on('play', function() {
          self.unmute(id);
        });

        return self;
      }

      var activeNode = (id) ? self._nodeById(id) : self._activeNode();
      if (activeNode) {
        if (self._webAudio) {
          activeNode.gain.value = self._volume;
        } else {
          activeNode.muted = false;
        }
      }

      return self;
    },

    /**
     * Get/set volume of this sound.
     * @param  {Float}  vol Volume from 0.0 to 1.0.
     * @param  {String} id  (optional) The play instance ID.
     * @return {Howl/Float}     Returns self or current volume.
     */
    volume: function(vol, id) {
      var self = this;

      // make sure volume is a number
      vol = parseFloat(vol);

      if (vol >= 0 && vol <= 1) {
        self._volume = vol;

        // if the sound hasn't been loaded, add it to the event queue
        if (!self._loaded) {
          self.on('play', function() {
            self.volume(vol, id);
          });

          return self;
        }

        var activeNode = (id) ? self._nodeById(id) : self._activeNode();
        if (activeNode) {
          if (self._webAudio) {
            activeNode.gain.value = vol;
          } else {
            activeNode.volume = vol * Howler.volume();
          }
        }

        return self;
      } else {
        return self._volume;
      }
    },

    /**
     * Get/set whether to loop the sound.
     * @param  {Boolean} loop To loop or not to loop, that is the question.
     * @return {Howl/Boolean}      Returns self or current looping value.
     */
    loop: function(loop) {
      var self = this;

      if (typeof loop === 'boolean') {
        self._loop = loop;

        return self;
      } else {
        return self._loop;
      }
    },

    /**
     * Get/set sound sprite definition.
     * @param  {Object} sprite Example: {spriteName: [offset, duration, loop]}
     *                @param {Integer} offset   Where to begin playback in milliseconds
     *                @param {Integer} duration How long to play in milliseconds
     *                @param {Boolean} loop     (optional) Set true to loop this sprite
     * @return {Howl}        Returns current sprite sheet or self.
     */
    sprite: function(sprite) {
      var self = this;

      if (typeof sprite === 'object') {
        self._sprite = sprite;

        return self;
      } else {
        return self._sprite;
      }
    },

    /**
     * Get/set the position of playback.
     * @param  {Float}  pos The position to move current playback to.
     * @param  {String} id  (optional) The play instance ID.
     * @return {Howl/Float}      Returns self or current playback position.
     */
    pos: function(pos, id) {
      var self = this;

      // if the sound hasn't been loaded, add it to the event queue
      if (!self._loaded) {
        self.on('load', function() {
          self.pos(pos);
        });

        return typeof pos === 'number' ? self : self._pos || 0;
      }

      // make sure we are dealing with a number for pos
      pos = parseFloat(pos);

      var activeNode = (id) ? self._nodeById(id) : self._activeNode();
      if (activeNode) {
        if (pos >= 0) {
          self.pause(id);
          activeNode._pos = pos;
          self.play(activeNode._sprite, id);

          return self;
        } else {
          return self._webAudio ? activeNode._pos + (ctx.currentTime - self._playStart) : activeNode.currentTime;
        }
      } else if (pos >= 0) {
        return self;
      } else {
        // find the first inactive node to return the pos for
        for (var i=0; i<self._audioNode.length; i++) {
          if (self._audioNode[i].paused && self._audioNode[i].readyState === 4) {
            return (self._webAudio) ? self._audioNode[i]._pos : self._audioNode[i].currentTime;
          }
        }
      }
    },

    /**
     * Get/set the 3D position of the audio source.
     * The most common usage is to set the 'x' position
     * to affect the left/right ear panning. Setting any value higher than
     * 1.0 will begin to decrease the volume of the sound as it moves further away.
     * NOTE: This only works with Web Audio API, HTML5 Audio playback
     * will not be affected.
     * @param  {Float}  x  The x-position of the playback from -1000.0 to 1000.0
     * @param  {Float}  y  The y-position of the playback from -1000.0 to 1000.0
     * @param  {Float}  z  The z-position of the playback from -1000.0 to 1000.0
     * @param  {String} id (optional) The play instance ID.
     * @return {Howl/Array}   Returns self or the current 3D position: [x, y, z]
     */
    pos3d: function(x, y, z, id) {
      var self = this;

      // set a default for the optional 'y' & 'z'
      y = (typeof y === 'undefined' || !y) ? 0 : y;
      z = (typeof z === 'undefined' || !z) ? -0.5 : z;

      // if the sound hasn't been loaded, add it to the event queue
      if (!self._loaded) {
        self.on('play', function() {
          self.pos3d(x, y, z, id);
        });

        return self;
      }

      if (x >= 0 || x < 0) {
        if (self._webAudio) {
          var activeNode = (id) ? self._nodeById(id) : self._activeNode();
          if (activeNode) {
            self._pos3d = [x, y, z];
            activeNode.panner.setPosition(x, y, z);
            activeNode.panner.panningModel = self._model || 'HRTF';
          }
        }
      } else {
        return self._pos3d;
      }

      return self;
    },

    /**
     * Fade a currently playing sound between two volumes.
     * @param  {Number}   from     The volume to fade from (0.0 to 1.0).
     * @param  {Number}   to       The volume to fade to (0.0 to 1.0).
     * @param  {Number}   len      Time in milliseconds to fade.
     * @param  {Function} callback (optional) Fired when the fade is complete.
     * @param  {String}   id       (optional) The play instance ID.
     * @return {Howl}
     */
    fade: function(from, to, len, callback, id) {
      var self = this,
        diff = Math.abs(from - to),
        dir = from > to ? 'down' : 'up',
        steps = diff / 0.01,
        stepTime = len / steps;

      // if the sound hasn't been loaded, add it to the event queue
      if (!self._loaded) {
        self.on('load', function() {
          self.fade(from, to, len, callback, id);
        });

        return self;
      }

      // set the volume to the start position
      self.volume(from, id);

      for (var i=1; i<=steps; i++) {
        (function() {
          var change = self._volume + (dir === 'up' ? 0.01 : -0.01) * i,
            vol = Math.round(1000 * change) / 1000,
            toVol = to;

          setTimeout(function() {
            self.volume(vol, id);

            if (vol === toVol) {
              if (callback) callback();
            }
          }, stepTime * i);
        })();
      }
    },

    /**
     * [DEPRECATED] Fade in the current sound.
     * @param  {Float}    to      Volume to fade to (0.0 to 1.0).
     * @param  {Number}   len     Time in milliseconds to fade.
     * @param  {Function} callback
     * @return {Howl}
     */
    fadeIn: function(to, len, callback) {
      return this.volume(0).play().fade(0, to, len, callback);
    },

    /**
     * [DEPRECATED] Fade out the current sound and pause when finished.
     * @param  {Float}    to       Volume to fade to (0.0 to 1.0).
     * @param  {Number}   len      Time in milliseconds to fade.
     * @param  {Function} callback
     * @param  {String}   id       (optional) The play instance ID.
     * @return {Howl}
     */
    fadeOut: function(to, len, callback, id) {
      var self = this;

      return self.fade(self._volume, to, len, function() {
        if (callback) callback();
        self.pause(id);

        // fire ended event
        self.on('end');
      }, id);
    },

    /**
     * Get an audio node by ID.
     * @return {Howl} Audio node.
     */
    _nodeById: function(id) {
      var self = this,
        node = self._audioNode[0];

      // find the node with this ID
      for (var i=0; i<self._audioNode.length; i++) {
        if (self._audioNode[i].id === id) {
          node = self._audioNode[i];
          break;
        }
      }

      return node;
    },

    /**
     * Get the first active audio node.
     * @return {Howl} Audio node.
     */
    _activeNode: function() {
      var self = this,
        node = null;

      // find the first playing node
      for (var i=0; i<self._audioNode.length; i++) {
        if (!self._audioNode[i].paused) {
          node = self._audioNode[i];
          break;
        }
      }

      // remove excess inactive nodes
      self._drainPool();

      return node;
    },

    /**
     * Get the first inactive audio node.
     * If there is none, create a new one and add it to the pool.
     * @param  {Function} callback Function to call when the audio node is ready.
     */
    _inactiveNode: function(callback) {
      var self = this,
        node = null;

      // find first inactive node to recycle
      for (var i=0; i<self._audioNode.length; i++) {
        if (self._audioNode[i].paused && self._audioNode[i].readyState === 4) {
          // send the node back for use by the new play instance
          callback(self._audioNode[i]);
          node = true;
          break;
        }
      }

      // remove excess inactive nodes
      self._drainPool();

      if (node) {
        return;
      }

      // create new node if there are no inactives
      var newNode;
      if (self._webAudio) {
        newNode = self._setupAudioNode();
        callback(newNode);
      } else {
        self.load();
        newNode = self._audioNode[self._audioNode.length - 1];

        // listen for the correct load event and fire the callback
        var listenerEvent = navigator.isCocoonJS ? 'canplaythrough' : 'loadedmetadata';
        var listener = function() {
          newNode.removeEventListener(listenerEvent, listener, false);
          callback(newNode);
        };
        newNode.addEventListener(listenerEvent, listener, false);
      }
    },

    /**
     * If there are more than 5 inactive audio nodes in the pool, clear out the rest.
     */
    _drainPool: function() {
      var self = this,
        inactive = 0,
        i;

      // count the number of inactive nodes
      for (i=0; i<self._audioNode.length; i++) {
        if (self._audioNode[i].paused) {
          inactive++;
        }
      }

      // remove excess inactive nodes
      for (i=self._audioNode.length-1; i>=0; i--) {
        if (inactive <= 5) {
          break;
        }

        if (self._audioNode[i].paused) {
          // disconnect the audio source if using Web Audio
          if (self._webAudio) {
            self._audioNode[i].disconnect(0);
          }

          inactive--;
          self._audioNode.splice(i, 1);
        }
      }
    },

    /**
     * Clear 'onend' timeout before it ends.
     * @param  {String} soundId  The play instance ID.
     */
    _clearEndTimer: function(soundId) {
      var self = this,
        index = -1;

      // loop through the timers to find the one associated with this sound
      for (var i=0; i<self._onendTimer.length; i++) {
        if (self._onendTimer[i].id === soundId) {
          index = i;
          break;
        }
      }

      var timer = self._onendTimer[index];
      if (timer) {
        clearTimeout(timer.timer);
        self._onendTimer.splice(index, 1);
      }
    },

    /**
     * Setup the gain node and panner for a Web Audio instance.
     * @return {Object} The new audio node.
     */
    _setupAudioNode: function() {
      var self = this,
        node = self._audioNode,
        index = self._audioNode.length;

      // create gain node
      node[index] = (typeof ctx.createGain === 'undefined') ? ctx.createGainNode() : ctx.createGain();
      node[index].gain.value = self._volume;
      node[index].paused = true;
      node[index]._pos = 0;
      node[index].readyState = 4;
      node[index].connect(masterGain);

      // create the panner
      node[index].panner = ctx.createPanner();
      node[index].panner.panningModel = self._model || 'equalpower';
      node[index].panner.setPosition(self._pos3d[0], self._pos3d[1], self._pos3d[2]);
      node[index].panner.connect(node[index]);

      return node[index];
    },

    /**
     * Call/set custom events.
     * @param  {String}   event Event type.
     * @param  {Function} fn    Function to call.
     * @return {Howl}
     */
    on: function(event, fn) {
      var self = this,
        events = self['_on' + event];

      if (typeof fn === 'function') {
        events.push(fn);
      } else {
        for (var i=0; i<events.length; i++) {
          if (fn) {
            events[i].call(self, fn);
          } else {
            events[i].call(self);
          }
        }
      }

      return self;
    },

    /**
     * Remove a custom event.
     * @param  {String}   event Event type.
     * @param  {Function} fn    Listener to remove.
     * @return {Howl}
     */
    off: function(event, fn) {
      var self = this,
        events = self['_on' + event];

      if (fn) {
        // loop through functions in the event for comparison
        for (var i=0; i<events.length; i++) {
          if (fn === events[i]) {
            events.splice(i, 1);
            break;
          }
        }
      } else {
        self['_on' + event] = [];
      }

      return self;
    },

    /**
     * Unload and destroy the current Howl object.
     * This will immediately stop all play instances attached to this sound.
     */
    unload: function() {
      var self = this;

      // stop playing any active nodes
      var nodes = self._audioNode;
      for (var i=0; i<self._audioNode.length; i++) {
        // stop the sound if it is currently playing
        if (!nodes[i].paused) {
          self.stop(nodes[i].id);
          self.on('end', nodes[i].id);
        }

        if (!self._webAudio) {
          // remove the source if using HTML5 Audio
          nodes[i].src = '';
        } else {
          // disconnect the output from the master gain
          nodes[i].disconnect(0);
        }
      }

      // make sure all timeouts are cleared
      for (i=0; i<self._onendTimer.length; i++) {
        clearTimeout(self._onendTimer[i].timer);
      }

      // remove the reference in the global Howler object
      var index = Howler._howls.indexOf(self);
      if (index !== null && index >= 0) {
        Howler._howls.splice(index, 1);
      }

      // delete this sound from the cache
      delete cache[self._src];
      self = null;
    }

  };

  // only define these functions when using WebAudio
  if (usingWebAudio) {

    /**
     * Buffer a sound from URL (or from cache) and decode to audio source (Web Audio API).
     * @param  {Object} obj The Howl object for the sound to load.
     * @param  {String} url The path to the sound file.
     */
    var loadBuffer = function(obj, url) {
      // check if the buffer has already been cached
      if (url in cache) {
        // set the duration from the cache
        obj._duration = cache[url].duration;

        // load the sound into this object
        loadSound(obj);
        return;
      }
      
      if (/^data:[^;]+;base64,/.test(url)) {
        // Decode base64 data-URIs because some browsers cannot load data-URIs with XMLHttpRequest.
        var data = atob(url.split(',')[1]);
        var dataView = new Uint8Array(data.length);
        for (var i=0; i<data.length; ++i) {
          dataView[i] = data.charCodeAt(i);
        }
        
        decodeAudioData(dataView.buffer, obj, url);
      } else {
        // load the buffer from the URL
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';
        xhr.onload = function() {
          decodeAudioData(xhr.response, obj, url);
        };
        xhr.onerror = function() {
          // if there is an error, switch the sound to HTML Audio
          if (obj._webAudio) {
            obj._buffer = true;
            obj._webAudio = false;
            obj._audioNode = [];
            delete obj._gainNode;
            delete cache[url];
            obj.load();
          }
        };
        try {
          xhr.send();
        } catch (e) {
          xhr.onerror();
        }
      }
    };

    /**
     * Decode audio data from an array buffer.
     * @param  {ArrayBuffer} arraybuffer The audio data.
     * @param  {Object} obj The Howl object for the sound to load.
     * @param  {String} url The path to the sound file.
     */
    var decodeAudioData = function(arraybuffer, obj, url) {
      // decode the buffer into an audio source
      ctx.decodeAudioData(
        arraybuffer,
        function(buffer) {
          if (buffer) {
            cache[url] = buffer;
            loadSound(obj, buffer);
          }
        },
        function(err) {
          obj.on('loaderror', err);
        }
      );
    };

    /**
     * Finishes loading the Web Audio API sound and fires the loaded event
     * @param  {Object}  obj    The Howl object for the sound to load.
     * @param  {Objecct} buffer The decoded buffer sound source.
     */
    var loadSound = function(obj, buffer) {
      // set the duration
      obj._duration = (buffer) ? buffer.duration : obj._duration;

      // setup a sprite if none is defined
      if (Object.getOwnPropertyNames(obj._sprite).length === 0) {
        obj._sprite = {_default: [0, obj._duration * 1000]};
      }

      // fire the loaded event
      if (!obj._loaded) {
        obj._loaded = true;
        obj.on('load');
      }

      if (obj._autoplay) {
        obj.play();
      }
    };

    /**
     * Load the sound back into the buffer source.
     * @param  {Object} obj   The sound to load.
     * @param  {Array}  loop  Loop boolean, pos, and duration.
     * @param  {String} id    (optional) The play instance ID.
     */
    var refreshBuffer = function(obj, loop, id) {
      // determine which node to connect to
      var node = obj._nodeById(id);

      // setup the buffer source for playback
      node.bufferSource = ctx.createBufferSource();
      node.bufferSource.buffer = cache[obj._src];
      node.bufferSource.connect(node.panner);
      node.bufferSource.loop = loop[0];
      if (loop[0]) {
        node.bufferSource.loopStart = loop[1];
        node.bufferSource.loopEnd = loop[1] + loop[2];
      }
      node.bufferSource.playbackRate.value = obj._rate;
    };

  }

  /**
   * Add support for AMD (Asynchronous Module Definition) libraries such as require.js.
   */
  if (typeof define === 'function' && define.amd) {
    define(function() {
      return {
        Howler: Howler,
        Howl: Howl
      };
    });
  }

  /**
   * Add support for CommonJS libraries such as browserify.
   */
  if (typeof exports !== 'undefined') {
    exports.Howler = Howler;
    exports.Howl = Howl;
  }

  // define globally in case AMD is not available or available but not used

  if (typeof window !== 'undefined') {
    window.Howler = Howler;
    window.Howl = Howl;
  }

})();

},{}],38:[function(require,module,exports){
/*! PixiParticles 1.5.1 */
!function(){"use strict";!function(a){"use strict";window.cloudkid=window.cloudkid||{};var b=PIXI.BLEND_MODES||PIXI.blendModes,c={},d=c.DEG_TO_RADS=Math.PI/180;c.useAPI3=!1;var e=PIXI.VERSION;e&&parseInt(e.substring(0,e.indexOf(".")))>=3&&(c.useAPI3=!0),c.rotatePoint=function(a,b){if(a){a*=d;var c=Math.sin(a),e=Math.cos(a),f=b.x*e-b.y*c,g=b.x*c+b.y*e;b.x=f,b.y=g}},c.combineRGBComponents=function(a,b,c){return a<<16|b<<8|c},c.normalize=function(a){var b=1/c.length(a);a.x*=b,a.y*=b},c.scaleBy=function(a,b){a.x*=b,a.y*=b},c.length=function(a){return Math.sqrt(a.x*a.x+a.y*a.y)},c.hexToRGB=function(a,b){b?b.length=0:b=[],"#"==a.charAt(0)?a=a.substr(1):0===a.indexOf("0x")&&(a=a.substr(2));var c;return 8==a.length&&(c=a.substr(0,2),a=a.substr(2)),b.push(parseInt(a.substr(0,2),16)),b.push(parseInt(a.substr(2,2),16)),b.push(parseInt(a.substr(4,2),16)),c&&b.push(parseInt(c,16)),b},c.generateEase=function(a){var b=a.length,c=1/b,d=function(d){var e,f,g=b*d|0;return e=(d-g*c)*b,f=a[g]||a[b-1],f.s+e*(2*(1-e)*(f.cp-f.s)+e*(f.e-f.s))};return d},c.getBlendMode=function(a){if(!a)return b.NORMAL;for(a=a.toUpperCase();a.indexOf(" ")>=0;)a=a.replace(" ","_");return b[a]||b.NORMAL},cloudkid.ParticleUtils=c,Array.prototype.shuffle||Object.defineProperty(Array.prototype,"shuffle",{enumerable:!1,writable:!1,value:function(){for(var a,b,c=this.length;c;a=Math.floor(Math.random()*c),b=this[--c],this[c]=this[a],this[a]=b);return this}}),Array.prototype.random||Object.defineProperty(Array.prototype,"random",{enumerable:!1,writable:!1,value:function(){return this[Math.floor(Math.random()*this.length)]}})}(),function(a,b){"use strict";var c,d=a.ParticleUtils,e=PIXI.Sprite,f=d.useAPI3;if(!f){var g=document.createElement("canvas");g.width=g.height=1,c=PIXI.Texture.fromCanvas(g)}var h=function(a){f?e.call(this):e.call(this,c),this.emitter=a,this.anchor.x=this.anchor.y=.5,this.velocity=new PIXI.Point,this.maxLife=0,this.age=0,this.ease=null,this.extraData=null,this.startAlpha=0,this.endAlpha=0,this.startSpeed=0,this.endSpeed=0,this.acceleration=null,this.startScale=0,this.endScale=0,this.startColor=null,this._sR=0,this._sG=0,this._sB=0,this.endColor=null,this._eR=0,this._eG=0,this._eB=0,this._doAlpha=!1,this._doScale=!1,this._doSpeed=!1,this._doColor=!1,this._doNormalMovement=!1,this._oneOverLife=0,this.next=null,this.prev=null,this.init=this.init,this.Particle_init=this.Particle_init,this.update=this.update,this.Particle_update=this.Particle_update,this.applyArt=this.applyArt,this.kill=this.kill},i=h.prototype=Object.create(e.prototype);i.init=i.Particle_init=function(){this.age=0,this.velocity.x=this.startSpeed,this.velocity.y=0,d.rotatePoint(this.rotation,this.velocity),this.rotation*=d.DEG_TO_RADS,this.rotationSpeed*=d.DEG_TO_RADS,this.alpha=this.startAlpha,this.scale.x=this.scale.y=this.startScale,this.startColor&&(this._sR=this.startColor[0],this._sG=this.startColor[1],this._sB=this.startColor[2],this.endColor&&(this._eR=this.endColor[0],this._eG=this.endColor[1],this._eB=this.endColor[2])),this._doAlpha=this.startAlpha!=this.endAlpha,this._doSpeed=this.startSpeed!=this.endSpeed,this._doScale=this.startScale!=this.endScale,this._doColor=!!this.endColor,this._doNormalMovement=this._doSpeed||0!==this.startSpeed||this.acceleration,this._oneOverLife=1/this.maxLife,this.tint=d.combineRGBComponents(this._sR,this._sG,this._sB),this.visible=!0},i.applyArt=function(a){f?this.texture=a:this.setTexture(a)},i.update=i.Particle_update=function(a){if(this.age+=a,this.age>=this.maxLife)return this.kill(),-1;var b=this.age*this._oneOverLife;if(this.ease&&(b=4==this.ease.length?this.ease(b,0,1,1):this.ease(b)),this._doAlpha&&(this.alpha=(this.endAlpha-this.startAlpha)*b+this.startAlpha),this._doScale){var c=(this.endScale-this.startScale)*b+this.startScale;this.scale.x=this.scale.y=c}if(this._doNormalMovement){if(this._doSpeed){var e=(this.endSpeed-this.startSpeed)*b+this.startSpeed;d.normalize(this.velocity),d.scaleBy(this.velocity,e)}else this.acceleration&&(this.velocity.x+=this.acceleration.x*a,this.velocity.y+=this.acceleration.y*a);this.position.x+=this.velocity.x*a,this.position.y+=this.velocity.y*a}if(this._doColor){var f=(this._eR-this._sR)*b+this._sR,g=(this._eG-this._sG)*b+this._sG,h=(this._eB-this._sB)*b+this._sB;this.tint=d.combineRGBComponents(f,g,h)}return 0!==this.rotationSpeed?this.rotation+=this.rotationSpeed*a:this.acceleration&&(this.rotation=Math.atan2(this.velocity.y,this.velocity.x)),b},i.kill=function(){this.emitter.recycle(this)},i.destroy=function(){this.emitter=this.velocity=this.startColor=this.endColor=this.ease=this.next=this.prev=null},h.parseArt=function(a){var b;for(b=a.length;b>=0;--b)"string"==typeof a[b]&&(a[b]=PIXI.Texture.fromImage(a[b]));return a},h.parseData=function(a){return a},a.Particle=h}(cloudkid),function(a,b){"use strict";var c=a.ParticleUtils,d=a.Particle,e=PIXI.ParticleContainer,f=function(a,b,c){this._particleConstructor=d,this.particleImages=null,this.startAlpha=1,this.endAlpha=1,this.startSpeed=0,this.endSpeed=0,this.acceleration=null,this.startScale=1,this.endScale=1,this.minimumScaleMultiplier=1,this.startColor=null,this.endColor=null,this.minLifetime=0,this.maxLifetime=0,this.minStartRotation=0,this.maxStartRotation=0,this.minRotationSpeed=0,this.maxRotationSpeed=0,this.particleBlendMode=0,this.customEase=null,this.extraData=null,this._frequency=1,this.maxParticles=1e3,this.emitterLifetime=-1,this.spawnPos=null,this.spawnType=null,this._spawnFunc=null,this.spawnRect=null,this.spawnCircle=null,this.particlesPerWave=1,this.particleSpacing=0,this.angleStart=0,this.rotation=0,this.ownerPos=null,this._prevEmitterPos=null,this._prevPosIsValid=!1,this._posChanged=!1,this._parentIsPC=!1,this._parent=null,this.addAtBack=!1,this.particleCount=0,this._emit=!1,this._spawnTimer=0,this._emitterLife=-1,this._activeParticlesFirst=null,this._activeParticlesLast=null,this._poolFirst=null,this._origConfig=null,this._origArt=null,this.parent=a,b&&c&&this.init(b,c),this.recycle=this.recycle,this.update=this.update,this.rotate=this.rotate,this.updateSpawnPos=this.updateSpawnPos,this.updateOwnerPos=this.updateOwnerPos},g=f.prototype={},h=new PIXI.Point;Object.defineProperty(g,"frequency",{get:function(){return this._frequency},set:function(a){"number"==typeof a&&a>0?this._frequency=a:this._frequency=1}}),Object.defineProperty(g,"particleConstructor",{get:function(){return this._particleConstructor},set:function(a){if(a!=this._particleConstructor){this._particleConstructor=a,this.cleanup();for(var b=this._poolFirst;b;b=b.next)b.destroy();this._poolFirst=null,this._origConfig&&this._origArt&&this.init(this._origArt,this._origConfig)}}}),Object.defineProperty(g,"parent",{get:function(){return this._parent},set:function(a){this.cleanup(),this._parent=a,this._parentIsPC=e&&a&&a instanceof e}}),g.init=function(a,b){if(a&&b){this.cleanup(),this._origConfig=b,this._origArt=a,a=Array.isArray(a)?a.slice():[a];var d=this._particleConstructor;this.particleImages=d.parseArt?d.parseArt(a):a,b.alpha?(this.startAlpha=b.alpha.start,this.endAlpha=b.alpha.end):this.startAlpha=this.endAlpha=1,b.speed?(this.startSpeed=b.speed.start,this.endSpeed=b.speed.end):this.startSpeed=this.endSpeed=0;var e=b.acceleration;e&&(e.x||e.y)?(this.endSpeed=this.startSpeed,this.acceleration=new PIXI.Point(e.x,e.y)):this.acceleration=null,b.scale?(this.startScale=b.scale.start,this.endScale=b.scale.end,this.minimumScaleMultiplier=b.scale.minimumScaleMultiplier||1):this.startScale=this.endScale=this.minimumScaleMultiplier=1,b.color&&(this.startColor=c.hexToRGB(b.color.start),b.color.start!=b.color.end?this.endColor=c.hexToRGB(b.color.end):this.endColor=null),b.startRotation?(this.minStartRotation=b.startRotation.min,this.maxStartRotation=b.startRotation.max):this.minStartRotation=this.maxStartRotation=0,b.rotationSpeed?(this.minRotationSpeed=b.rotationSpeed.min,this.maxRotationSpeed=b.rotationSpeed.max):this.minRotationSpeed=this.maxRotationSpeed=0,this.minLifetime=b.lifetime.min,this.maxLifetime=b.lifetime.max,this.particleBlendMode=c.getBlendMode(b.blendMode),b.ease?this.customEase="function"==typeof b.ease?b.ease:c.generateEase(b.ease):this.customEase=null,d.parseData?this.extraData=d.parseData(b.extraData):this.extraData=b.extraData||null,this.spawnRect=this.spawnCircle=null,this.particlesPerWave=1,this.particleSpacing=0,this.angleStart=0;var f;switch(b.spawnType){case"rect":this.spawnType="rect",this._spawnFunc=this._spawnRect;var g=b.spawnRect;this.spawnRect=new PIXI.Rectangle(g.x,g.y,g.w,g.h);break;case"circle":this.spawnType="circle",this._spawnFunc=this._spawnCircle,f=b.spawnCircle,this.spawnCircle=new PIXI.Circle(f.x,f.y,f.r);break;case"ring":this.spawnType="ring",this._spawnFunc=this._spawnRing,f=b.spawnCircle,this.spawnCircle=new PIXI.Circle(f.x,f.y,f.r),this.spawnCircle.minRadius=f.minR;break;case"burst":this.spawnType="burst",this._spawnFunc=this._spawnBurst,this.particlesPerWave=b.particlesPerWave,this.particleSpacing=b.particleSpacing,this.angleStart=b.angleStart?b.angleStart:0;break;case"point":this.spawnType="point",this._spawnFunc=this._spawnPoint;break;default:this.spawnType="point",this._spawnFunc=this._spawnPoint}this.frequency=b.frequency,this.emitterLifetime=b.emitterLifetime||-1,this.maxParticles=b.maxParticles>0?b.maxParticles:1e3,this.addAtBack=!!b.addAtBack,this.rotation=0,this.ownerPos=new PIXI.Point,this.spawnPos=new PIXI.Point(b.pos.x,b.pos.y),this._prevEmitterPos=this.spawnPos.clone(),this._prevPosIsValid=!1,this._spawnTimer=0,this.emit=!0}},g.recycle=function(a){a.next&&(a.next.prev=a.prev),a.prev&&(a.prev.next=a.next),a==this._activeParticlesLast&&(this._activeParticlesLast=a.prev),a==this._activeParticlesFirst&&(this._activeParticlesFirst=a.next),a.prev=null,a.next=this._poolFirst,this._poolFirst=a,this._parentIsPC?(a.alpha=0,a.visible=!1):a.parent&&a.parent.removeChild(a),--this.particleCount},g.rotate=function(a){if(this.rotation!=a){var b=a-this.rotation;this.rotation=a,c.rotatePoint(b,this.spawnPos),this._posChanged=!0}},g.updateSpawnPos=function(a,b){this._posChanged=!0,this.spawnPos.x=a,this.spawnPos.y=b},g.updateOwnerPos=function(a,b){this._posChanged=!0,this.ownerPos.x=a,this.ownerPos.y=b},g.resetPositionTracking=function(){this._prevPosIsValid=!1},Object.defineProperty(g,"emit",{get:function(){return this._emit},set:function(a){this._emit=!!a,this._emitterLife=this.emitterLifetime}}),g.update=function(a){var b,c,d;for(c=this._activeParticlesFirst;c;c=d)d=c.next,c.update(a);var e,f;this._prevPosIsValid&&(e=this._prevEmitterPos.x,f=this._prevEmitterPos.y);var g=this.ownerPos.x+this.spawnPos.x,h=this.ownerPos.y+this.spawnPos.y;if(this.emit)for(this._spawnTimer-=a;this._spawnTimer<=0;){if(this._emitterLife>0&&(this._emitterLife-=this._frequency,this._emitterLife<=0)){this._spawnTimer=0,this._emitterLife=0,this.emit=!1;break}if(this.particleCount>=this.maxParticles)this._spawnTimer+=this._frequency;else{var i;if(i=this.minLifetime==this.maxLifetime?this.minLifetime:Math.random()*(this.maxLifetime-this.minLifetime)+this.minLifetime,-this._spawnTimer<i){var j,k;if(this._prevPosIsValid&&this._posChanged){var l=1+this._spawnTimer/a;j=(g-e)*l+e,k=(h-f)*l+f}else j=g,k=h;b=0;for(var m=Math.min(this.particlesPerWave,this.maxParticles-this.particleCount);m>b;++b){var n;if(this._poolFirst?(n=this._poolFirst,this._poolFirst=this._poolFirst.next,n.next=null):n=new this.particleConstructor(this),this.particleImages.length>1?n.applyArt(this.particleImages.random()):n.applyArt(this.particleImages[0]),n.startAlpha=this.startAlpha,n.endAlpha=this.endAlpha,n.startSpeed=this.startSpeed,n.endSpeed=this.endSpeed,n.acceleration=this.acceleration,1!=this.minimumScaleMultiplier){var o=Math.random()*(1-this.minimumScaleMultiplier)+this.minimumScaleMultiplier;n.startScale=this.startScale*o,n.endScale=this.endScale*o}else n.startScale=this.startScale,n.endScale=this.endScale;if(n.startColor=this.startColor,n.endColor=this.endColor,this.minRotationSpeed==this.maxRotationSpeed?n.rotationSpeed=this.minRotationSpeed:n.rotationSpeed=Math.random()*(this.maxRotationSpeed-this.minRotationSpeed)+this.minRotationSpeed,n.maxLife=i,n.blendMode=this.particleBlendMode,n.ease=this.customEase,n.extraData=this.extraData,this._spawnFunc(n,j,k,b),n.init(),n.update(-this._spawnTimer),this._parentIsPC&&n.parent){var p=this._parent.children,q=p.indexOf(n);1>q?p.shift():q==p.length-1?p.pop():p.splice(q,1),this.addAtBack?p.unshift(n):p.push(n)}else this.addAtBack?this._parent.addChildAt(n,0):this._parent.addChild(n);this._activeParticlesLast?(this._activeParticlesLast.next=n,n.prev=this._activeParticlesLast,this._activeParticlesLast=n):this._activeParticlesLast=this._activeParticlesFirst=n,++this.particleCount}}this._spawnTimer+=this._frequency}}this._posChanged&&(this._prevEmitterPos.x=g,this._prevEmitterPos.y=h,this._prevPosIsValid=!0,this._posChanged=!1)},g._spawnPoint=function(a,b,c,d){this.minStartRotation==this.maxStartRotation?a.rotation=this.minStartRotation+this.rotation:a.rotation=Math.random()*(this.maxStartRotation-this.minStartRotation)+this.minStartRotation+this.rotation,a.position.x=b,a.position.y=c},g._spawnRect=function(a,b,d,e){this.minStartRotation==this.maxStartRotation?a.rotation=this.minStartRotation+this.rotation:a.rotation=Math.random()*(this.maxStartRotation-this.minStartRotation)+this.minStartRotation+this.rotation,h.x=Math.random()*this.spawnRect.width+this.spawnRect.x,h.y=Math.random()*this.spawnRect.height+this.spawnRect.y,0!==this.rotation&&c.rotatePoint(this.rotation,h),a.position.x=b+h.x,a.position.y=d+h.y},g._spawnCircle=function(a,b,d,e){this.minStartRotation==this.maxStartRotation?a.rotation=this.minStartRotation+this.rotation:a.rotation=Math.random()*(this.maxStartRotation-this.minStartRotation)+this.minStartRotation+this.rotation,h.x=Math.random()*this.spawnCircle.radius,h.y=0,c.rotatePoint(360*Math.random(),h),h.x+=this.spawnCircle.x,h.y+=this.spawnCircle.y,0!==this.rotation&&c.rotatePoint(this.rotation,h),a.position.x=b+h.x,a.position.y=d+h.y},g._spawnRing=function(a,b,d,e){var f=this.spawnCircle;this.minStartRotation==this.maxStartRotation?a.rotation=this.minStartRotation+this.rotation:a.rotation=Math.random()*(this.maxStartRotation-this.minStartRotation)+this.minStartRotation+this.rotation,f.minRadius==f.radius?h.x=Math.random()*(f.radius-f.minRadius)+f.minRadius:h.x=f.radius,h.y=0;var g=360*Math.random();a.rotation+=g,c.rotatePoint(g,h),h.x+=this.spawnCircle.x,h.y+=this.spawnCircle.y,0!==this.rotation&&c.rotatePoint(this.rotation,h),a.position.x=b+h.x,a.position.y=d+h.y},g._spawnBurst=function(a,b,c,d){0===this.particleSpacing?a.rotation=360*Math.random():a.rotation=this.angleStart+this.particleSpacing*d+this.rotation,a.position.x=b,a.position.y=c},g.cleanup=function(){var a,b;for(a=this._activeParticlesFirst;a;a=b)b=a.next,this.recycle(a),a.parent&&a.parent.removeChild(a);this._activeParticlesFirst=this._activeParticlesLast=null,this.particleCount=0},g.destroy=function(){this.cleanup();for(var a=this._poolFirst;a;a=a.next)a.destroy();this._poolFirst=this._parent=this.particleImages=this.spawnPos=this.ownerPos=this.startColor=this.endColor=this.customEase=null},a.Emitter=f}(cloudkid);}();
},{}],39:[function(require,module,exports){
function E () {
	// Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
	on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;

},{}],40:[function(require,module,exports){
(function (global){
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Tweener=t()}}(function(){return function t(e,n,i){function o(r,s){if(!n[r]){if(!e[r]){var a="function"==typeof require&&require;if(!s&&a)return a(r,!0);if(u)return u(r,!0);var c=new Error("Cannot find module '"+r+"'");throw c.code="MODULE_NOT_FOUND",c}var h=n[r]={exports:{}};e[r][0].call(h.exports,function(t){var n=e[r][1][t];return o(n?n:t)},h,h.exports,t,e,n,i)}return n[r].exports}for(var u="function"==typeof require&&require,r=0;r<i.length;r++)o(i[r]);return o}({1:[function(t,e,n){function i(t){var e=2.5949095;return(t*=2)<1?.5*(t*t*((e+1)*t-e)):.5*((t-=2)*t*((e+1)*t+e)+2)}e.exports=i},{}],2:[function(t,e,n){function i(t){var e=1.70158;return t*t*((e+1)*t-e)}e.exports=i},{}],3:[function(t,e,n){function i(t){var e=1.70158;return--t*t*((e+1)*t+e)+1}e.exports=i},{}],4:[function(t,e,n){function i(t){return.5>t?.5*(1-o(1-2*t)):.5*o(2*t-1)+.5}var o=t("./bounce-out");e.exports=i},{"./bounce-out":6}],5:[function(t,e,n){function i(t){return 1-o(1-t)}var o=t("./bounce-out");e.exports=i},{"./bounce-out":6}],6:[function(t,e,n){function i(t){var e=4/11,n=8/11,i=.9,o=4356/361,u=35442/1805,r=16061/1805,s=t*t;return e>t?7.5625*s:n>t?9.075*s-9.9*t+3.4:i>t?o*s-u*t+r:10.8*t*t-20.52*t+10.72}e.exports=i},{}],7:[function(t,e,n){function i(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}e.exports=i},{}],8:[function(t,e,n){function i(t){return 1-Math.sqrt(1-t*t)}e.exports=i},{}],9:[function(t,e,n){function i(t){return Math.sqrt(1- --t*t)}e.exports=i},{}],10:[function(t,e,n){function i(t){return.5>t?4*t*t*t:.5*Math.pow(2*t-2,3)+1}e.exports=i},{}],11:[function(t,e,n){function i(t){return t*t*t}e.exports=i},{}],12:[function(t,e,n){function i(t){var e=t-1;return e*e*e+1}e.exports=i},{}],13:[function(t,e,n){function i(t){return.5>t?.5*Math.sin(13*Math.PI/2*2*t)*Math.pow(2,10*(2*t-1)):.5*Math.sin(-13*Math.PI/2*(2*t-1+1))*Math.pow(2,-10*(2*t-1))+1}e.exports=i},{}],14:[function(t,e,n){function i(t){return Math.sin(13*t*Math.PI/2)*Math.pow(2,10*(t-1))}e.exports=i},{}],15:[function(t,e,n){function i(t){return Math.sin(-13*(t+1)*Math.PI/2)*Math.pow(2,-10*t)+1}e.exports=i},{}],16:[function(t,e,n){function i(t){return 0===t||1===t?t:.5>t?.5*Math.pow(2,20*t-10):-.5*Math.pow(2,10-20*t)+1}e.exports=i},{}],17:[function(t,e,n){function i(t){return 0===t?t:Math.pow(2,10*(t-1))}e.exports=i},{}],18:[function(t,e,n){function i(t){return 1===t?t:1-Math.pow(2,-10*t)}e.exports=i},{}],19:[function(t,e,n){e.exports={backInOut:t("./back-in-out"),backIn:t("./back-in"),backOut:t("./back-out"),bounceInOut:t("./bounce-in-out"),bounceIn:t("./bounce-in"),bounceOut:t("./bounce-out"),circInOut:t("./circ-in-out"),circIn:t("./circ-in"),circOut:t("./circ-out"),cubicInOut:t("./cubic-in-out"),cubicIn:t("./cubic-in"),cubicOut:t("./cubic-out"),elasticInOut:t("./elastic-in-out"),elasticIn:t("./elastic-in"),elasticOut:t("./elastic-out"),expoInOut:t("./expo-in-out"),expoIn:t("./expo-in"),expoOut:t("./expo-out"),linear:t("./linear"),quadInOut:t("./quad-in-out"),quadIn:t("./quad-in"),quadOut:t("./quad-out"),quartInOut:t("./quart-in-out"),quartIn:t("./quart-in"),quartOut:t("./quart-out"),quintInOut:t("./quint-in-out"),quintIn:t("./quint-in"),quintOut:t("./quint-out"),sineInOut:t("./sine-in-out"),sineIn:t("./sine-in"),sineOut:t("./sine-out")}},{"./back-in":2,"./back-in-out":1,"./back-out":3,"./bounce-in":5,"./bounce-in-out":4,"./bounce-out":6,"./circ-in":8,"./circ-in-out":7,"./circ-out":9,"./cubic-in":11,"./cubic-in-out":10,"./cubic-out":12,"./elastic-in":14,"./elastic-in-out":13,"./elastic-out":15,"./expo-in":17,"./expo-in-out":16,"./expo-out":18,"./linear":20,"./quad-in":22,"./quad-in-out":21,"./quad-out":23,"./quart-in":25,"./quart-in-out":24,"./quart-out":26,"./quint-in":28,"./quint-in-out":27,"./quint-out":29,"./sine-in":31,"./sine-in-out":30,"./sine-out":32}],20:[function(t,e,n){function i(t){return t}e.exports=i},{}],21:[function(t,e,n){function i(t){return t/=.5,1>t?.5*t*t:(t--,-.5*(t*(t-2)-1))}e.exports=i},{}],22:[function(t,e,n){function i(t){return t*t}e.exports=i},{}],23:[function(t,e,n){function i(t){return-t*(t-2)}e.exports=i},{}],24:[function(t,e,n){function i(t){return.5>t?8*Math.pow(t,4):-8*Math.pow(t-1,4)+1}e.exports=i},{}],25:[function(t,e,n){function i(t){return Math.pow(t,4)}e.exports=i},{}],26:[function(t,e,n){function i(t){return Math.pow(t-1,3)*(1-t)+1}e.exports=i},{}],27:[function(t,e,n){function i(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}e.exports=i},{}],28:[function(t,e,n){function i(t){return t*t*t*t*t}e.exports=i},{}],29:[function(t,e,n){function i(t){return--t*t*t*t*t+1}e.exports=i},{}],30:[function(t,e,n){function i(t){return-.5*(Math.cos(Math.PI*t)-1)}e.exports=i},{}],31:[function(t,e,n){function i(t){var e=Math.cos(t*Math.PI*.5);return Math.abs(e)<1e-14?1:1-e}e.exports=i},{}],32:[function(t,e,n){function i(t){return Math.sin(t*Math.PI/2)}e.exports=i},{}],33:[function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=t("eases"),r=0,s=1,a=2,c=3,h=function(){function t(e){var n=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],o=arguments.length<=2||void 0===arguments[2]?"":arguments[2];i(this,t),this.name=o,this.debug=n,this.obj=e,this.position=0,this.duration=0,this.state=0,this.next=null,this.prev=null,this.last=this,this.time=0,this.lastEvaluationTime=-1,this.propertiesFrom=null,this.propertiesTo=null,this.ease=u.linear,this.onStart=null,this.onComplete=null,this.debug&&this.log("created")}return o(t,[{key:"_getTween",value:function(e,n,i){var o=arguments.length<=3||void 0===arguments[3]?"":arguments[3],u=this.last,r=new t(e,this.debug,o);return r.position=u.position+u.duration,r.duration=n||0,r.state=0,r.ease=i,r.prev=u,u.next=r,this.last=r,this.debug&&this.log("added: "+o),r}},{key:"_getLastParam",value:function(t){for(var e=this.last.prev;e&&(e.obj!==this.obj||!e.propertiesTo||void 0===e.propertiesTo[t]||null===e.propertiesTo[t]);)e=e.prev;var n=e?e.propertiesTo[t]:this.obj[t];return n}},{key:"add",value:function(t){var e=this._getTween(t,0,u.linear);return e}},{key:"from",value:function(t){var e=arguments.length<=1||void 0===arguments[1]?1:arguments[1],n=arguments.length<=2||void 0===arguments[2]?u.linear:arguments[2],i=this._getTween(this.obj,e,n,"from");i.propertiesFrom=t,i.propertiesTo={};for(var o in t)i.propertiesTo[o]=this._getLastParam(o);return this}},{key:"to",value:function(t){var e=arguments.length<=1||void 0===arguments[1]?1:arguments[1],n=arguments.length<=2||void 0===arguments[2]?u.linear:arguments[2],i=this._getTween(this.obj,e,n,"to");i.propertiesTo=t,i.propertiesFrom={};for(var o in t)i.propertiesFrom[o]=this._getLastParam(o);return this}},{key:"wait",value:function(t){var e=this._getTween(this.obj,t,null,"wait");return e.propertiesFrom=e.prev.propertiesFrom,e.propertiesTo=e.prev.propertiesTo,this}},{key:"then",value:function(t){return this.last.onComplete=t,this}},{key:"setTime",value:function(t){var e=t-this.time;this.update(e)}},{key:"getTime",value:function(){return this.time}},{key:"update",value:function(e){if(e&&(this.time+=e),this.next&&0>e&&this.next.update(e),this.time!==this.lastEvaluationTime){var n=this.time,i=this.position,o=this.duration,u=this.state,h=t.getState(i,o,n);if(u===r)if(n>this.lastEvaluationTime)switch(h){case a:this.notifyStart(),this.process(n-i);break;case c:this.notifyStart(),this.process(o),this.notifyComplete()}else switch(h){case a:this.notifyComplete(),this.process(n-i);break;case s:this.notifyComplete(),this.process(0),this.notifyStart()}else switch(h){case s:u!==s&&(this.process(0),this.notifyStart());break;case a:u===s?this.notifyStart():u===c&&this.notifyComplete(),this.process(n-i);break;case c:u!==c&&(this.process(o),this.notifyComplete())}this.lastEvaluationTime=n,this.state=h}this.next&&e>0&&this.next.update(e)}},{key:"process",value:function(t){if(this.ease&&0!==this.duration){var e=this.ease(t/this.duration);for(var n in this.propertiesTo)switch(e){case 0:this.obj[n]=this.propertiesFrom[n];break;case 1:this.obj[n]=this.propertiesTo[n];break;default:var i=this.propertiesFrom[n],o=this.propertiesTo[n];this.obj[n]=i+(o-i)*e}}}},{key:"notifyStart",value:function(){this.debug&&this.log("start"),this.onStart&&this.onStart()}},{key:"notifyComplete",value:function(){this.debug&&this.log("complete"),this.onComplete&&this.onComplete()}},{key:"finished",value:function(){var t=this.state===c;return t&&this.next&&(t=this.next.finished()),t}},{key:"dispose",value:function(){this.next&&this.next.dispose(),this.debug&&this.log("DISPOSED!"),this.obj=null,this.next=null,this.prev=null,this.last=null,this.propertiesFrom=null,this.propertiesTo=null,this.onStart=null,this.onComplete=null}},{key:"log",value:function(t){this.debug&&(this.obj.name?console.log("[Tween]",this.obj.name,this.name,t):this.name?console.log("[Tween]",this.name,t):console.log("[Tween]",t))}}],[{key:"getState",value:function(t,e,n){var i=t+e,o=r;return o=t>n?s:n>=i?c:a}}]),t}();n["default"]=h,h.UNDEFINED=r,h.BEFORE=s,h.RUNNING=a,h.AFTER=c,e.exports=n["default"]},{eases:19}],34:[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=t("./Tween"),s=i(r),a=t("eases"),c=i(a),h=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?0:arguments[0];o(this,t),this.debug=!1,this.tweens=[],this._autoUpdateRate=0,this._interval=null,this.autoUpdateRate=e}return u(t,[{key:"dispose",value:function(){clearInterval(this._interval),this.autoUpdateRate=0;for(var t=this.tweens.length;t--;){var e=this.tweens[t];e&&e.dispose()}this.tweens=null}},{key:"add",value:function(t){var e=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],n=arguments.length<=2||void 0===arguments[2]?"":arguments[2],i=new s["default"](t,e,n);return this.tweens.push(i),i}},{key:"remove",value:function(t){for(var e=this.tweens.length;e--;){var n=this.tweens[e];n.obj===t&&(this.tweens.splice(e,1),n.dispose())}}},{key:"update",value:function(t){for(var e=this.tweens.length;e--;){var n=this.tweens[e];n&&(n.finished()?(this.tweens.splice(e,1),n.dispose()):n.update(t))}}},{key:"getTime",value:function(){return(new Date).getTime()/1e3}},{key:"autoUpdateRate",get:function(){return this._autoUpdateRate},set:function(t){if(clearInterval(this._interval),0>=t)this._interval=null,this._autoUpdateRate=0;else{this._autoUpdateRate=t;var e=this,n=e.getTime();e._interval=setInterval(function(){var t=e.getTime(),i=t-n;n=t,e.update(i)},1e3*t)}}}]),t}();n["default"]=h,h.Tween=s["default"],h.ease=c["default"],e.exports=n["default"]},{"./Tween":33,eases:19}],35:[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var o=t("./Tweener"),u=i(o);"object"==typeof window&&(window.Tweener=u["default"]),e.exports=u["default"]},{"./Tweener":34}]},{},[35])(35)});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},[26])


//# sourceMappingURL=main.js.map
