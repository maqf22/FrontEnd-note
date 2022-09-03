function testmemory() {
  const memory = process.memoryUsage().heapUsed;
  console.log(memory / 1024 / 1024 + 'mb');
};

var fn = (function () {
  // 虽然arr是部局变量，但在外面有引用它不能被释放
  var arr = [];
  return function () {
    // 限制
    if (arr.length > 4) {
      arr.shift()
    }
    arr.push(new Array(30 * 1024 * 1024));
    testmemory();
  };
})();

for (var i = 0; i < 10; i++) {
  fn()
}
