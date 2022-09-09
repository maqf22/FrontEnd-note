function basePop(wrod, size) {
  this.wrod = wrod;
  this.size = size;
  this.dom = null;
};
basePop.prototype.init = function() {
  var div = document.createElement('div');
  div.innerHTML = this.word;
  div.style.width = this.size.width + 'px';
  div.style.height = this.size.height + 'px';
  this.dom = div;
};
basePop.prototype.hidden = function() {
  this.dom.style.display = 'none';
};
basePop.prototype.comfirm = function() {
  this.dom.style.display = 'none';
};

function ajaxPop(word, size) {
  basePop.call(this, word, size);
};

ajaxPop.prototype = new basePop();
var hidden = ajaxPop.prototype.hidden;
ajaxPop.prototype.hidden = function() {
  hidden.call(this);
  console.log(1);
};

var comfirm = ajaxPop.prototype.comfirm;
ajaxPop.prototype.comfirm = function() {
  confirm.call(this);
  $.ajax();
};
