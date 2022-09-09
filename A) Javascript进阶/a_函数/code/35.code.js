// 写的代码 机器码
// 让使用这个方法，功能的人不需要关心功能具体怎么做，只需要关注命令怎么写

// webpack -> 配置文件怎么写（命令模式）
// echarts

// 方法 -> 调用
// action <- 命令解析层 <- 命令

/* function mycanvas() { };
mycanvas.prototype.drawCircle = function () { };
mycanvas.prototype.drawRect = function () { };
new mycanvas().drawCircle(); */

var obj = [
  {
    type: 'circle',
    data: [10, 2, 4, 5]
  },
  {
    type: 'rect',
    data: [10, 2, 4]
  }
];

// 解耦调用方和方法本身

var command = (function () {
  // action
  var action = {
    drawCircle: function () { },
    drawRect: function () { }
  };
  // 解析层
  return function excute(commander) { };
});

command(obj[0]);
