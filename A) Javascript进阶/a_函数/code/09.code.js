function multiplyTwo(num) {
  return num * 2;
};

function minusOne(num) {
  return num - 1;
};

function addTwo(num) {
  return num + 2;
};

function addThree(num) {
  return num + 3;
};

/* var res = multiplyTwo(10);
res = minusOne(res)
res = addTwo(res)
res = addThree(res) */

function compose() {
  const args = [].slice.apply(arguments);
  return function (num) {
    /* var _res = num;
    for (var i = args.length - 1; i >= 0; i--) {
      _res = args[i](_result);
    };
    return _res; */
    return args.reduceRight((res, cb) => cb(res), num);
  };
};

const res = compose(addThree, addTwo, multiplyTwo, minusOne)(10);


Promise.resolve(10).then(minusOne).then(multiplyTwo).then(addTwo).then(addThree).then(res => {
  console.log(res);
});