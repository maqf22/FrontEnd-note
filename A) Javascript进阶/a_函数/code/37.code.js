var obj = {
  message: {},
  regist: function (type, fn) {
    this.message[type] = fn;
  },
  fire: function () {
    this.message[type]();
  }
};

// 首页模块
obj.regist('getComment', (data) => {
  // 展示传入的data
});

// 评论模块
obj.fire('getComment', data);
