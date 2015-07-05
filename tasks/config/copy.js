/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies all directories and files, exept coffescript and less fiels, from the sails
 * assets folder into the .tmp/public directory.
 *
 * # build task config
 * Copies all directories nd files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function(grunt) {

	grunt.config.set('copy', {
		dev: {
			files: [
			{	//styles
				expand: true,
				cwd: './assets/ng-app',
				// src: ['**/*.!(coffee|less)'],
				src: [
					'bower_components/angular-material/angular-material.min.css',
					'styles/main.css'
				],
				flatten: true,
				dest: '.tmp/public/styles'
			},
			{	// dependdencies handled with bower
				expand: true,
				cwd: './assets/ng-app/bower_components',
				src: [
				  'angular/angular.js',
				  'jquery/dist/jquery.js',
				  'angular-cookies/angular-cookies.js',
				  'angular-sanitize/angular-sanitize.js',
				  'angular-route/angular-route.js',
				  'angular-material/angular-material.min.js',
				  'angular-resource/angular-resource.js'
				],
				flatten: true,
				dest: '.tmp/public/js/dependencies'
          	},
          	{	// JS dependencies
				expand: true,
				cwd: './assets/ng-app/scripts/dependencies',
				src: ['**/*'],
				flatten: true,
				dest: '.tmp/public/js/dependencies'
          	},
          	{	// angular app scripts
				expand: true,
				cwd: './assets/ng-app/scripts',
				src: [
				  'app.js',
				  'controllers/*.js'
				],
				flatten: true,
				dest: '.tmp/public/js/dependencies'
          	},
          	{
          		expand: true,
				cwd: './assets/ng-app/views',
				src: [
				  '*.html',
				],
				flatten: false,
				dest: '.tmp/public/views'
          	}]
		},
		build: {
			files: [
			{
				expand: true,
				cwd: '.tmp/public',
				src: ['**/*'],
				dest: 'www'
			}]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
};
