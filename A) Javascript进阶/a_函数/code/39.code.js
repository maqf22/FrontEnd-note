// 有一个表单要验证

// 验证身分证号

// 把要做的事情组织成一个队列 -> 数组
// 格式符不符合，身份证是否已存在

input.onblur = function () {
  var _value = input.value;
  var _arr = [font, other, back];
  async function test() {
    var _res = _value;
    while (_arr.length > 0) {
      _res = await _arr.shift()(_res);
      if (_res.error) {
        return _res;
      };
    };
    return _res;
  };
};

function other() { };
