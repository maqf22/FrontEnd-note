// 新公司 ->老项目
// 交互 -> 很多的事件没有操作提示

// 1. 直接改写源码
// 2. 直接整个重写

function descorator(dom, fn) {
  if (typeof dom.onclick === 'function') {
    var _old = dom.onclick;
    dom.onclick = function () {
      _old();
      fn();
    };
  };
};

var arr = [[dom1, function () { console.log('操作') }]];
