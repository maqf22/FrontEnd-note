dom.addEventListener();
dom.attchEvent();
dom.onclick

function addEvent(dom, type, fn) {
  if (dom.addEventListener) {
    dom.addEventListener(type, fn, false);
  } else if (dom.attchEvent) {
    dom.addEvent('on' + type, fn);
  } else {
    dom['on' + type] = fn;
  };
};
