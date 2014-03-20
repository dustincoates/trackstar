'use strict';

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Define the configuration for all the tasks
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        '{,*/}*.js',
        'spec/{,*/}*.js'
      ]
    },
    jasmine : {
      src : 'src/**/*.js',
      options: {
        specs : 'spec/**/*.js',
        helpers : 'spec/helper/*.js'
      }
    }
  });

  grunt.registerTask('default', [
      'jshint',
      'jasmine'
  ]);

};
