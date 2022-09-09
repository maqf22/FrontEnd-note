// 自研的a框架 和jquery相似
// jquery替换a框架
$.css();
a.c();

window.A = $;
A.c = function() {
  return $.css.call(this, arguments);
};
