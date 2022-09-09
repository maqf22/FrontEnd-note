function Vue() {
  if (!(this instanceof Vue)) {
    console.warn();
  };
  this._init(options);
};

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);
