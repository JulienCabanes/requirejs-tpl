# AMD Template Plugin

Uses Underscore.js micro-templates implementation.

As modules, templates are stand-alone files (not in the DOM…) and they are served already **compiled**.

Underscore.js **IS NOT** required, this plugin already contains the template method plus some AMD stuffs.

For more information on micro-templates :

http://documentcloud.github.com/underscore/#template

http://ejohn.org/blog/javascript-micro-templating/

I use to use the .tpl file extension but you can use whatever you want, but you have to use the "tpl!" plugin prefix.

## Usage
```
define(['tpl!your-template-path.tpl'], function(tpl) {
	return tpl({your: 'data'});
});
```

## Optimization

There are some really good wins with templates optimization you should care about.

With optimization ( [r.js](http://requirejs.org/docs/optimization.html) ), no more dynamic loading ! So templates are bundled within your code, saving some HTTP requests.

Optimized, templates are still served compiled but most of all they're **written compiled**. This means they're real line of codes and not eval or new Function anymore, so this is less evil **and** clients won't have to compile them ! Double win.

Ever have a hard time to debug a template with a console giving no error line ? With optimization (without minification) error lines are back !

If you can/want avoid dynamic loading, the plugin can be excluded from the build, at least reduced to 64 bytes (empty module) instead of 2Ko. Can't be bad.

Oh and of course, templates can be minified… 

## Support

I did this plugin for my own needs and as far as I'm using it (almost everyday on many projects) it works well, on every browsers I know… Concerning Node.js, I only made one test which you can check inside the demo folder.

The only AMD loader I tested with is RequireJS but it should work with others like curl.js theorically…

Feel free to tell if it helped you in any way and of course if you have some time, contribution is open ! I didn't have much time for unit tests so…