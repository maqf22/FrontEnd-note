// deepCopy

function deepCopy(data) {
  let res;
  if (Array.isArray(data)) {
    res = [];
    data.forEach(item => {
      res.push(deepCopy(item));
    });
  } else if (typeof data === 'object' && !Array.isArray(data)) {
    res = {};
    for (const key in data) {
      res[key] = deepCopy(data[key]);
    };
  } else {
    res = data;
  };
  return res;
};

const a = {
  name: 'ma',
  message: {
    title: 'tit',
    content: 'psg'
  }
}

const b = deepCopy(a);
a.message.title = 'okay';
console.log(a);
console.log(b);
console.log(b === a);
console.log(b.message === a.message);
