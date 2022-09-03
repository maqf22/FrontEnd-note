// 非纯函数
var a = 10;
function add(num) {
  return a + num
}

// 纯函数
function sum(num1, num2) {
  return num1 + num2
}

// 副作用
var a = 123;

function aPlus(a) {
  a += 1;
  return a;
};

var obj = {
  a: 123
};
function objPlus(obj) {
  var _obj = Object.create(obj);
  _obj.a += 1;
  return _obj;
};

var arr = [1, 2, 3];
function arrPlus(arr) {
  var _arr = [...arr];
  _arr[0] += 1;
  return _arr;
};