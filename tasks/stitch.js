/*
 * grunt-stitch
 * https://github.com/janhancic/grunt-stitch
 *
 * Copyright (c) 2013 Jan Hancic
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function ( grunt ) {

	function getOptionsError ( templateFileName, outFileName ) {
		if ( templateFileName == null ) {
			return '`templateFile` not set, can\'t continue';
		}

		if ( outFileName == null ) {
			return '`out` not set, can\'t continue';
		}

		return null;
	};

	grunt.registerMultiTask( 'stitch', 'Todo description', function () {
		var templateFileName = this.data.templateFile,
			outFileName = this.data.out,
			optionsError = null,
			templateFileContents = null;

		optionsError = getOptionsError( templateFileName, outFileName );
		if ( optionsError !== null ) {
			grunt.log.error( optionsError );
			return false;
		}

		if ( grunt.file.exists( templateFileName ) === false ) {
			grunt.log.error( 'Template file does not exist.' );
			return false;
		}

		templateFileContents = grunt.file.read( templateFileName );

		// matches: /*# FILE_NAME.js #*/
		var matchesToReplace = templateFileContents.match( /\/\*# (.*?)\.js #\*\//g );

		matchesToReplace.forEach( function ( match ) {
			var fileName = match.replace( '/*# ', '' ).replace( ' #*/', '' );
			var srcFileContents = grunt.file.read( fileName );

			templateFileContents = templateFileContents.replace( match, srcFileContents );
		} );

		grunt.file.write( outFileName, templateFileContents );

		grunt.log.writeln( 'Output file "' + outFileName + '" created.' );
	});
};
