require({
	paths: {
		tpl: '../../tpl'
	}
}, ['tpl!hello.tpl'], function(helloTpl) {

	document.body.innerHTML += helloTpl({world: 'Worrrrrld'});
	
});