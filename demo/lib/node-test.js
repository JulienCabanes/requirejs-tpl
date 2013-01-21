var requirejs = require('requirejs');

requirejs.config({
    nodeRequire: require,
    config: {
        tpl: { variable: 'data' }
    }
});

requirejs({
	paths: {
		tpl: '../../tpl'
	}
}, ['tpl!hello.tpl'], function(helloTpl) {

	console.log(helloTpl({world: 'Worrrrrld'}));
	
});