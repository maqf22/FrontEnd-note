function Iterator(data) {
  this.data = data;
};
Iterator.prototype.dealEach = function (fn) {
  if (this.data instanceof Array) {
    for (var i = 0; i < this.data.length; i++) {
      fn(this.data[i], i);
    };
  } else {
    for (var item in this.data) {
      fn(this.data[item], item);
    };
  };
};
