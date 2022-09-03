// 找出满足一定条件的对象key
var obj = {
  num1: 1,
  num2: 2,
  num3: 3,
  num4: 4,
  num5: 5,
  num6: 6
};

function findProperty(obj, fn) {
  var _obj = Object.create(obj);
  var _propertyArr = [];
  for (var item in _obj) {
    const flag = fn.call(_obj, _obj[item], item);
    if (flag) {
      _propertyArr.push(item)
    };
  };
  return _propertyArr;
};

findProperty(obj, (val, nam) => {
  return val % 2 === 0;
});
