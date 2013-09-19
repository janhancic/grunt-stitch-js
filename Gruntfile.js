/*
 * grunt-stitch-js
 * https://github.com/janhancic/grunt-stitch-js
 *
 * Copyright (c) 2013 Jan Hancic
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function( grunt ) {
	grunt.initConfig( {
		'stitch-js': {
			all: {
				templateFile: 'testing/tpl.js',
				out: 'testing/out.js'
			}
		}
	} );

	// Actually load this plugin's task(s).
	grunt.loadTasks( 'tasks' );

	grunt.registerTask( 'default', [ 'stitch-js' ] );
};
