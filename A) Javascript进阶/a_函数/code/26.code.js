// menu1, menu2, menu3
function menuItem(word) {
  this.word = word;
  this.dom = document.createElement('div');
  this.dom.innerHTML = this.word;
};
var nenu1 = new menuItem('menu1');
var nenu2 = new menuItem('menu3');
var nenu3 = new menuItem('menu3');
menu1.onmouseover = function() {
  menu1.style.color = 'red';
};
menu2.onmouseover = function() {
  menu2.style.color = 'green';
};
men3.onmouseover = function() {
  menu3.style.color = 'blue';
};
men1.onmouseout = function() {
  menu1.style.color = 'white';
};
men2.onmouseout = function() {
  menu2.style.color = 'white';
};
men3.onmouseout = function() {
  menu3.style.color = 'white';
};

// 桥接模式下
function menuItem(word, color) {
  this.word = word;
  this.dom = document.createElement('div');
  this.dom.innerHTML = this.word;
  this.color = color;
};
menuItem.prototype.bind = function() {
  var self = this;
  this.dom.onmouseover = function() {
    this.style.color = self.color.colorover;
  };
  this.dom.onmouseout = function() {
    this.style.color = self.color.colorout;
  };
};
function menuColor(colorover, colorout) {
  this.colorover = colorover;
  this.colorout = colorout;
};

var data = [
  { word: 'menu1', color: ['red', 'black'] },
  { word: 'menu2', color: ['green', 'black'] },
  { word: 'menu3', color: ['blue', 'black'] }
];
for (var i = 0; i < data.length; i++) {
  new menuItem(data[i].word, new memuColor(data[i][0], data[i][1])).bind();
};