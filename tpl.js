/**
 * Adapted from the official plugin text.js
 *
 * Uses UnderscoreJS micro-templates : http://documentcloud.github.com/underscore/#template
 * @author Julien Cabanès <julien@zeeagency.com>
 * @version 0.2
 * 
 * @license RequireJS text 0.24.0 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */
/*jslint regexp: false, nomen: false, plusplus: false, strict: false */
/*global require: false, XMLHttpRequest: false, ActiveXObject: false,
  define: false, window: false, process: false, Packages: false,
  java: false */

define(['text', 'underscore'], function(text, _, undefined)
{
	var options = undefined;
	text.changeOptions = function(opt)
	{
		options = opt;
	};

	var baseFinishLoad = text.finishLoad;
	text.finishLoad = function()
	{
		var baseOnLoad = arguments[arguments.length - 1];
		arguments[arguments.length - 1] = function(content)
		{
			if (content)
			{
				content = _.template(content, undefined, options);
			}
			baseOnLoad(content);
		};
		baseFinishLoad.apply(this, arguments);
	};
	return text;
});