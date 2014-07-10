'use strict'

var gulp = require('gulp');
var stripBom = require('./');

//test buffer
gulp.task('default', function(){

	return gulp.src('1.txt')
			.pipe(stripBom({ext: ['txt', 'php']}))
			.pipe(gulp.dest('dest-buffer'));
});

//test stream
gulp.task('test-stream', function(){
	return gulp.src('1.txt', {buffer: false})
			.pipe(stripBom())
			.pipe(gulp.dest('dest-stream'));
});