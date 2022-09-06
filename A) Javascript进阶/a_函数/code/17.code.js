var fetch = require('node-fetch');

function * gen() {
	var url = 'https://www.baidu.com/sugrec?prod=pc_his&from=pc_web&json=1&sid=37152_36544_36465_37116_36884_34813_36802_37137_37317_26350_37310_22157&hisdata=&_t=1662450829658&req=2&csor=0';
	var result = yield fetch(url);
	console.log(result.queryid);
};

/* var g = gen();
var res = g.next();

res.value.then(function(data) {
	return data.json();
}).then(function(data) {
	g.next(data);
}); */

// 自动执行器
function run(gen) {
	var g = gen();
	function next(data) {
		var res = data ? g.next(data) : g.next();
		if (res.done) return res.value;
		res.value.then(function(data) {
			return data.json();
		}).then(function(data) {
			next(data);
		});
	};
	next();
};

run(gen)