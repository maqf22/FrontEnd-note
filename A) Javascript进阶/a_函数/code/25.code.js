$.extend({ a: 1 });
$.extend({ a: 1 }, { b: 2 }); // { a: 1, b: 2 }

function extend() {
  // 享元模式
  var target = arguments[0];
  var source;
  if (arguments === 1) {
    target = this;
    source = arguments[0]
  } else {
    target = arguments[0];
    source = arguments[1];
  };
  for (var item in source) {
    target[item] = source[item];
  };

  // 非享元模式
  /* if (arguments === 1) {
    for (var item in arguments[0]) {
      this[item] = arguments[0][item];
    };
  } else {
    for (var item in arguments[1]) {
      arguments[0][item] = arguments[1][item];
    };
  }; */
};
