function a(type) {
  var type = type || 'data1';
  var data = {
    data1: [1, 2, 3],
    data2: [4, 5, 6]
  };
  return data[type];
};

function b(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new Error('num1 or num2 must bea number');
  };
  return num1 + num2;
};

function c(config) {
  // config.a = config.a || "1";
  var _default = {
    a: 1,
    b: 2
  };
  Object.assign(config, _default);
};

function d(vueObj) {
  if (vueObj instanceof Vue) {
    console.log('true');
  }
};

try {
  throw new Error();
} catch(err) {
  console.log(err);
}
