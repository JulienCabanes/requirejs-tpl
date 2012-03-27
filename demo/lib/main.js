require({
	paths: {
		tpl: '../../tpl'
	}
}, ['tpl!hello.tpl'], function(helloTpl) {

	console.log('helloTpl', helloTpl);

	document.body.innerHTML += helloTpl({world: 'Worrrrrld'});
	
});