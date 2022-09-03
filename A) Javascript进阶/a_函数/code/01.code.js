function testMemory() {
  const memory = process.memoryUsage().heapUsed;
  console.log(memory / 1024 / 1024 + 'mb');
};

var size = 30 * 1024 * 1024;
var arr1 = new Array(size);
testMemory();
(function () {
  var arr2 = new Array(size);
  testMemory();
  var arr3 = new Array(size);
  testMemory();
}());
var arr4 = new Array(size);
testMemory();
var arr5 = new Array(size);
testMemory();
var arr6 = new Array(size);
testMemory();
