// 回调
function a(b) { };
Promise.resolve().then(a.bind(this, 123));

function inputTest(reg, val) { };
// 多次验纯数字
// inputTest(/^[0-9]*$/, 123);
const numberTest = inputTest.bind(this, /^[0-9]*$/);
