'use strict';
var path  = require('path');
var gutil = require('gulp-util');
var through = require('through2');
var stripBom = require('strip-bom');

var PLUGIN_NAME = 'gulp-stripbom';

var symbols = {
    ok: '√',
    err: '×'
};
if ('win32' == process.platform) {
    symbols.ok = '\u221A';
    symbols.err = '\u00D7';
}

module.exports = function(opts){
    if(!opts) opts = {};
    opts.showLog === undefined && (opts.showLog = true);

	return through.obj(function(file, enc, cb){

		//let null files pass through
        if (file.isNull()) {
            this.push(file);
            return cb();
        }
        var fileExt = path.extname(file.path).slice(1);
        //check file ext
        if(opts.ext) {
            var filexts = Array.isArray(opts.ext) ? opts.ext : [opts.ext];
            if(filexts.indexOf(fileExt) === -1) {
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
        if(opts.showLog) {
            
            gutil.log(gutil.colors.cyan(PLUGIN_NAME + ':'), file.relative + ' ' + gutil.colors.green(symbols.ok));
        }

        // tell the stream engine that we are done with this file
		cb();
	}).on('error', function(err){
		throw new gutil.PluginError(PLUGIN_NAME, err.message);
	});
}