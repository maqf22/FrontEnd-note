function moveDiv() {
  this.stateList = [];
  this.nowState = 0;
};
moveDiv.prototype.move = function (type, num) {
  chanageDiv(type, num);
  this.stateList.push({
    type,
    num
  });
  this.nowState = this.stateList.length - 1;
};
moveDiv.prototype.go = function () {
  var _state;
  if (this.nowState < this.stateList - 1) {
    this.nowState++;
    _state = this.stateList[this.nowState];
    chanageDiv(_state.type, _state.num);
  };
};
