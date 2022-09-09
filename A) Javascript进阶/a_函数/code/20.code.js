function Editor() {
  this.initer = new initHtml();
  this.fontControll = new fontControll();
  this.stateControll = new stateControll();
};

function initHtml() { };
initHtml.prototype.initStyle = function () { };
initHtml.prototype.initDom = function () { };

function fontControll() { };
fontControll.prototype.changeColor = function () { };
fontControll.prototype.changeFontSize = function () { };

function stateControll() {
  this.state = [];
  this.nowstate = 0;
};
stateControll.prototype.saveState = function () { };
stateControll.prototype.stateBack = function () {
  var state = this[this.nowstate - 1];
  this.fontControll.changeColor(state.color);
  this.fontControll.changeFontSize(state.color);
};
stateControll.prototype.stateGo = function () { };

window.Editor = Editor;