// 典形的丑陋结构

// 1. if-else分支过长 - 策略模式，状态模式
if (true) {

} else if (false) {

} else if (false) {

}

// 2. 分支套分支
if (true) {
  if (true) {
    if (true) { }
  }
}

// 3. 回调地狱
$.ajax({
  url: 'a',
  success: function () {
    $ajax({
      url: 'b',
      success: function () { }
    })
  }
})