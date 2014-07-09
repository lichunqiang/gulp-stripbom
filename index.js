'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var stripBom = require('strip-bom');

var PLUGIN_NAME = 'gulp-stripbom';

module.exports = function(){
	
	return through.obj(function(file, enc, cb){

		//let null files pass through
        if (file.isNull()) {
            this.push(file);
            return cb();
        }
        
        //is stream
        if(file.isStream()) {

        	file.contents = file.contents.pipe(stripBom.stream());
        } else {
        	//is buffer or string
        	file = stripBom(file);
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