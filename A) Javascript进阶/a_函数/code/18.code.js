// 创建3个消息弹窗，3个确认，3个取消，分别有不同的颜色
(function () {
  /* function infoPop() { };
  function comfirmPop() { };
  function cancelPop() { }; */
  function pop(type, content, color) {
    if (this instanceof pop) {
      new this[type](content, color);
    } else {
      return new pop(type, content, color);
    };
    pop.prototype.infoPop = function () { };
    pop.prototype.comfirmPop = function () { };
    pop.prototype.cancelPop = function () { };
    /* switch (type) {
      case 'infoPop':
        return new infoPop(content, color);
      case 'comfirmPop':
        return new comfirmPop(content, color);
      case 'cancelPop':
        return new cancelPop(content, color);
    }; */
  };
  window.pop = pop;
})();
var arr = [{ type: 'infoPop', world: 'hello', color: 'red' }, { type: 'infoPop', world: 'hello', color: 'red' }, { type: 'infoPop', world: 'hello', color: 'red' }];
pop('infoPop', 'hello', 'red');
