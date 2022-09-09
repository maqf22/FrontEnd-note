function showPart1() {
  console.log(1);
};
function showPart2() {
  console.log(2);
};
function showPart3() {
  console.log(3);
};

/* axios.get('xxx').then(res => {
  if (res === 'boss') {
    showPart1();
    showPart2();
    showPart3();
  } else if (res === 'manner') {
    showPart1();
    showPart2();
  } else if (res === 'staff') {
    showPart3();
  };
}); */

function showControll() {
  this.status = '';
  this.power = {
    boss: function () {
      showPart1();
      showPart2();
      showPart3();
    },
    manner: function () {
      showPart1();
      showPart2();
    },
    staff: function () {
      showPart3();
    }
  };
};
showControll.prototype.show = function() {
  var self = this;
  axios.get('xxx').then(res => {
    self.status = res;
    self.power[self.status]();
  });
};
new showControll().show();
