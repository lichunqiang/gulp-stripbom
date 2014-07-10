gulp-stripbom
------------------------

> This is inspired by [strip-bom](https://github.com/sindresorhus/strip-bom) for gulp.

## Usage

	var stripBom = require('gulp-stripbom');

	gulp.task('default', function(){

		return gulp.src('1.txt')
				.pipe(stripBom())
				.pipe(gulp.dest('dest'));
	});

## API

### stripBom(options)

### options.ext

Type: `String` or `Array`

Filter files by ext those to process.

### options.showLog

Type: `Boolean`

Default: `true`

If show log or not.

## Test

	npm test
	
## License

MIT