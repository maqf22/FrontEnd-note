var arr = [1, 2, 3]

// myForEach
Array.prototype.myForEach = function (cb) {
  var _len = this.length;
  if (typeof cb !== 'function') {
    throw new Error('muse be a function');
  };
  for (var i = 0; i < _len; i++) {
    cb().call(this, this[i], i);
  };
};

arr.myForEach((item, index) => {
  console.log(item, index);
});

// myMap
Array.prototype.myMap = function (cb) {
  var _len = this.length;
  var _arr = []
  if (typeof cb !== 'function') {
    throw new Error('muse be a function');
  };
  for (var i = 0; i < _len; i++) {
    _arr.push(cb().call(this, this[i], i));
  };
  return _arr;
};

const newArr = arr.myMap((item, index) => {
  return item + index;
});

// reduce用法

// 累加
arr.reduce((pre, now, index, arr) => {
  return pre + now;
});

// 将routes转换成键值对
var routes = [
  {
    path: '/',
    component: 'hello'
  },
  {
    path: '/test',
    component: 'test'
  }
];
routes.reduce((prev, curr) => {
  prev[curr.path] = curr.component;
  return prev;
}, {});

// 所有type等于all的num累加
var arr = [
  {
    type: 'all',
    num: 1
  },
  {
    type: 'no',
    num: 2
  },
  {
    type: 'all',
    num: 3
  }
];
arr.reduce((prev, curr) => {
  if (curr.type === 'all') {
    pre += curr.num;
  }
  return prev;
});

// myReduce
Array.prototype.myReduce = function (fn, init) {
  if (typeof fn !== 'function') {
    throw new Error('muse be a function');
  };
  var i = 0;
  var len = this.length;
  var pre = init;
  if (init === void 0) {
    pre = this[0];
    i = 1;
  };
  for (i; i < len; i++) {
    pre = fn.call(this, pre, this[i], i, this);
  };
  return pre;
};


// myFilter
Array.prototype.myFilter = function (cb) {
  if (typeof cb !== 'function') {
    throw new Error('muse be a function');
  };
  var _len = this.length;
  var _arr = [];
  for (var i = 0; i < _len; i++) {
    var flag = cb.call(this, this[i], i);
    if (flag) {
      if (typeof this[i] === 'object') {
        _arr.push(Object.create(this[i]));
      } else {
        _arr.push(this[i]);
      }
    };
  };
  return _arr;
};


