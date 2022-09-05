// mybind
Function.prototype.myBind = function (thisArg) {
  if (typeof this !== 'function') {
    throw new Error('must be a function');
  };
  var _self = this;
  var args = Array.prototype.slice.call(arguments, 1);
  return function () {
    return _self.apply(thisArg, args.concat(Array.prototype.slice.call(arguments)));
  };
};

function fn(a) {
  console.log(a);
};

fn.myBind(this, 1)();