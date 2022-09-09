function pager() {
  var cache = {};
  return function(pageName) {
    if (cache[pageName]) {
      return cache[pageName];
    } else {
      axios.get(pageName).then(res => {
        cache[pageName] = res;
      });
    };
  };
};
