var data = [
  { num: 1 },
  { num: 2 },
  { num: 3 }
];

function i(data) {
  function Iterator(data) {
    this.data = data;
  };
  Iterator.prototype.getHasSomeNum = function (handler, num) {
    var _arr = [];
    var handleFn;
    if (typeof handler === 'function') {
      handleFn = handler;
    } else {
      handleFn = function (item) {
        if (item[handler] == num) {
          return item;
        };
      };
    };
    for (var i = 0; i < this.data.length; i++) {
      var _res = handleFn.call(this, this.data[i]);
      if (_res) {
        _arr.push(_res);
      };
    };
    return _arr;
  };
  return new Iterator(data);
};

i(data).getHasSomeNum('num', 1);
i(data).getHasSomeNum(function (item) {
  if (item.num - 1 === 2) {
    return item;
  };
});
