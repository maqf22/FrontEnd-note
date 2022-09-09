axios.interceptor.request.use();
axios.interceptor.response.use();
function axios() {
  this.interceptor = {
    request: new interceptorManner(),
    response: new interceptorManner()
  }
};
axios.prototype.request = function () {
  // 组合出最终队列
  var chain = [dispathcRequest, undefined];
  var promise = Promise.resolve();
  this.interceptor.request.handlers.forEach((interceptor) => {
    chain.unshift(interceptor.fullfilled, interceptor.rejected);
  });
  this.interceptor.response.handlers.forEach((interceptor) => {
    chain.push(interceptor.fullfilled, interceptor.rejected);
  });
  // 执行队列
  while(chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  };
};
function interceptorManner() {
  this.handlers = [];
};
interceptorManner.prototype.use = function (fullfilled, rejected) {
  this.handlers.push({
    fullfilled,
    rejected
  });
};
