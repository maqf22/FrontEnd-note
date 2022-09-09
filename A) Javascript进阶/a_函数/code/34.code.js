// vue2 defineProperty 对象的属性

// 数组怎么办？
// 直接操作数据下标事无法触发响应式的，只能通过push，shift 数组的原生方法

var arrProto = Array.prototype;
// 拷一份
var arrayMethods = Object.create(arrProto);
var methods = [
  'push',
  'pop',
  'shift'
];
methods.forEach((method) => {
  arrayMethods[method] = function() {
    var original = arrProto[method];
    var result = original.apply(this, arguments);
    dep.notify();
    return result;
  };
});
// 替换 data里所有数组的原型链
