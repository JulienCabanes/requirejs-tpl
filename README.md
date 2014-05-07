# AMD Template Plugin

Uses Underscore.js micro-templates implementation.

As modules, templates are stand-alone files (not in the DOM…) and they are served already **compiled**.

[Underscore.js](http://underscorejs.org/) and [text.js](https://github.com/requirejs/text) are required.

For more information on micro-templates:

http://documentcloud.github.com/underscore/#template

http://ejohn.org/blog/javascript-micro-templating/

I use the .tpl file extension but you can use whatever you want, but you have to use the "tpl!" plugin prefix.

## Usage
```
define(['tpl!your-template-path.tpl'], function(tpl) {
	return tpl({your: 'data'});
});
```

## Optimization

There are some really good wins with template optimization you should care about.

With optimization ( [r.js](http://requirejs.org/docs/optimization.html) ), no more dynamic loading! So templates are bundled within your code, already compiled from HTML to JavaScript, saving some HTTP requests and computation.

Optimized, templates are still served compiled but most of all they're **written compiled**. This means they're real lines of codes and not eval or new Function anymore, so this is less evil **and** clients won't have to compile them! Double win.

Ever have a hard time trying to debug a template with a console giving no error lines? With optimization (without minification) error lines are back!

If you can/want to avoid dynamic loading, the plugin can be excluded from the build entirely. Once a template is compiled, it does not need this plugin at all.

## Support

I did this plugin for my own needs and as far as I'm using it (almost everyday on many projects) it works well, on every browser I know… Concerning Node.js, I only made one test which you can check inside the demo folder.

The only AMD loader I tested with is RequireJS but it should work with others like curl.js theorically…

Feel free to tell if it helped you in any way and of course if you have some time, contribution is open! I didn't have much time for unit tests so…
