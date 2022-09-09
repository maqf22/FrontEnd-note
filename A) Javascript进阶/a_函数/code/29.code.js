function counter() {
  this.beforeCounter = [];
  this.afterCounter = [];
};
counter.prototype.addBefore = function (fn) {
  this.beforeCounter.push(fn)
};
counter.prototype.addAfter = function (fn) {
  this.afterCounter.push(fn);
};
counter.prototype.count = function () {
  var _resNum = num;
  var _arr = [baseCount];
  _arr = this.beforeCounter.concat(_arr);
  _arr = this._arr.concat(afterCounter);
  function baseCount(num) {
    num += 4;
    num *= 4;
    return num;
  };
  while(_arr.length > 0) {
    _resNum = _arr.shift()(_resNum);
  };
  return _resNum;
};

var counterObject = new counter();
counterObject.addBefore(function(num) {
  num--;
  return num;
});
counterObject.addAfter(function(num) {
  num *= 2;
  return num;
});
counterObject.count(10);