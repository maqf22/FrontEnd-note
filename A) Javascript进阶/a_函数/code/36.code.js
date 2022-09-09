var createImg = (function () {
  var action = {
    create: function () {
      // 创建单张图片
    },
    htmlInit: function (type, data) {
      data.forEach(() => {
        create();
      });
      // 排序图片，并且创建出最终的画廊html
    },
    display: function () {
      // 显示画廊
    }
  };
  return function excute(commander) {
    var _html = htmlInit(commander.type, commander.data);
    action.display(_html, commander.target);
  };
})();

var commander = {
  type: 'random',
  target: '',
  data: [
    {
      url: 'xxx',
      title: 'title',
    }
  ]
};

createImg(commander);