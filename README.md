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
	
## License

MIT