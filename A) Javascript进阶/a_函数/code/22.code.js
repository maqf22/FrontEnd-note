function store () {
  this.store = {};
  if (store.install) {
    return store.install;
  }
  store.install = this;
}
store.install = null;

var s1 = new store();
var s2 = new store();
s1.store.a = 1;
console.log(s2);