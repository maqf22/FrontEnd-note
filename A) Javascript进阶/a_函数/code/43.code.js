function tab() {
  this.dom = null;
};
tab.prototype.initHTML = function () { };
tab.prototype.changeTab = function () { };
tab.prototype.eventBind = function () { };
tab.prototype.init = function (config) {
  this.initHTML(config);
  this.eventBind();
};
