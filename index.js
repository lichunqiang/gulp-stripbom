'use strict';
var path  = require('path');
var gutil = require('gulp-util');
var through = require('through2');
var stripBom = require('strip-bom');

var PLUGIN_NAME = 'gulp-stripbom';

module.exports = function(opts){
    if(!opts) opts = {};

	return through.obj(function(file, enc, cb){

		//let null files pass through
        if (file.isNull()) {
            this.push(file);
            return cb();
        }
        var fileExt = path.extname(file.path).slice(1);
        //check file ext
        if(opts.ext && isArray(opts.ext) || isString(opts.ext)) {
            isString(opts.ext) && (opts.ext = [opts.ext]);
            if(opts.ext.indexOf(fileExt) === -1) {
                this.push(file);
                return cb();
            }
        }
        //is stream
        if(file.isStream()) {

        	file.contents = file.contents.pipe(stripBom.stream());
        } 
        //is buffer
        if(file.isBuffer()) {

        	file.contents = stripBom(file.contents);
        }
        // make sure the file goes through the next gulp plugin
        this.push(file);
        console.log(gutil.colors.green('The file bom is be striped'));

        // tell the stream engine that we are done with this file
		cb();
	}).on('error', function(err){
		throw new gutil.PluginError(PLUGIN_NAME, err.message);
	});
}

function isArray(input) {
    return Object.prototype.toString.call(input) === '[object Array]';
}

function isString(input) {
    return Object.prototype.toString.call(input) === '[object String]';
}