// 把数字乘以2然后减1，再加2

// 面向对象
function CalcNumber(number) {
  this.number = number
}
CalcNumber.prototype.calc = function () {
  return this.number * 2 - 1
}

function CalcNumberSon(number) {
  CalcNumber.call(this, number)
}
CalcNumberSon.prototype = new CalcNumber()
CalcNumberSon.prototype.calc = function () {
  return this.number * 2 - 1 + 2
}

// 函数式
function multiplyTwo(num) {
  return num * 2
}
function minusOne(num) {
  return num - 1
}
function addTwo(num) {
  return num + 2
}

var num = multiplyTwo(10)
num = minusOne(num)
num = addTwo(num)
