function a() { };

b();

function b() {
  a.call(ths, arguments);
};