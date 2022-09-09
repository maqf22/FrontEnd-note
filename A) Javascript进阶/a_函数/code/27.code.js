function express() {

};

/* express.prototype.get = function () { };
express.prototype.post = function () { };
express.prototype.delete = function () { }; */

var methods = ['get', 'post', 'delete', 'put'];
methods.forEach(function (method) {
  app[method] = function () {
    route[method].apply(route, slice.call(arguments, 1));
  };
});

methods.forEach(function(method) {
  Route.prototype[method] = function() {
    var handles = flatten(slice.call(arguments));
    for (var i = 0; i < handles.length; i++) {
      var handle = handles[i];
      if (typeof handle !== 'function') {
        var type = toString.call(handle);
        var msg = 'Route.' + method + '() requires a callback function but got a ' + type;
        throw new Error(msg);
      }
      debug('%s %o', method, this.path);
      var layer = Layer('/', {}, handle);
      layer.method = method;
      this.methods[method] = true;
      this.stack.push(layer);
    }
    return this;
  };
});