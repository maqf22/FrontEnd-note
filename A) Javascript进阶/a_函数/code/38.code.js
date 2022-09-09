// 学会设计模块

// 转盘越转越慢的功能

// 1. 先梳理一下要做什么事情，开始转动 -> 选定奖品 -> 展示转动动画 -> 每转一圈 -> 下一圈慢一点
// 消息 -> { time: 2, speed: 50 }
// 2. 模块梳理  转盘初始化 -> 选定奖品 -> 转动控制 -> 转动动画

var _domArr = [];

function init() {
  for (var i = 0; i < 9; i++) {
    var _div = document.createElement('div');
    _div.innerHTML = i;
    _div.setAttributeNS('class', 'item');
    _domArr.push(_div);
  }
};

function getFinnal() {
  var _num = Math.random() * 10 + 40;
  return Math.floor(_num, 0);
};

function mover(moveConfig) {
  var nowIn = 0;
  var removeNum = 9;
  var timer = setInterval(() => {
    if (nowIn !== 0) {
      removeNum = nowIn - 1
    };
    _domArr[removeNum].setAttributeNS('class', 'item');
    _domArr[nowIn].setAttributeNS('class', 'item-on')
    nowIn++;
    if (nowIn === moveConfig.moveTime) {
      clearInterval(timer);
      observer.fire('fire');
    };
  }, moveConfig.speed);
};

function moveControll() {
  var final = getFinnal();
  var _circle = Math.floor(final / 10, 0);
  var _runCircle = 0;
  var stopNum = final % 10;
  var _speed = 50;
  mover({
    moveTime: 10,
    speed: _speed
  });
  observer.regist('finish', () => {
    var _moveTime = 10;
    _speed += 50;
    _runCircle++;
    if (_runCircle > _circle) {
      _moveTime = stopNum;
    };
    mover({
      moveTime: _moveTime,
      speed: _speed
    });
  });
};
