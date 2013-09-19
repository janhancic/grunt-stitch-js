/*
 * grunt-stitch
 * https://github.com/janhancic/grunt-stitch
 *
 * Copyright (c) 2013 Jan Hancic
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Configuration to be run (and then tested).
    stitch: {
      all: {
        templateFile: 'testing/tpl.js',
        out: 'testing/out.js'
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['stitch']);

};
