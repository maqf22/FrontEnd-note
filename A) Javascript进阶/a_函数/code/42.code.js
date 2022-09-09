function moveLeft() {
  console.log('left');
};
function moveRight() {
  console.log('right');
};
function moveTop() {
  console.log('top');
};
function moveBottom() {
  console.log('bottom');
};

/* function mover() {
  if (arguments.length === 1) {
    if (arguments[0] === 'left') {
      moveLeft();
    } else if (arguments[0] === 'right') {
      moveRight();
    } else if (arguments[0] === 'top') {
      moveTop();
    } else if (arguments[0] === 'bottom') {
      moveBottom();
    };
  } else {
    if (arguments[0] === 'left' && arguments[1] === 'top') {
      moveLeft();
      moveTop();
    } else if (arguments[0] === 'right' && arguments[1] === 'bottom') {
      moveRight();
      moveBottom();
    } // ……
  };
}; */

function mover() {
  this.status = [];
  this.actionHandle = {
    left: moveLeft,
    right: moveRight,
    top: moveTop,
    bottom: moveBottom
  };
};
mover.prototype.run = function () {
  this.status = Array.prototype.slice.call(arguments);
  this.status.forEach(action => {
    this.actionHandle[action]();
  });
};

new mover().run('left', 'top');
