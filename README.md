gulp-stripbom
------------------------

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][david-dm-image]][david-dm-url]

[npm-url]:         https://badge.fury.io/js/gulp-stripbom
[npm-image]:       https://badge.fury.io/js/gulp-stripbom.png
[travis-url]:      https://travis-ci.org/lichunqiang/gulp-stripbom
[travis-image]:    https://travis-ci.org/lichunqiang/gulp-stripbom.png?branch=master
[david-dm-url]:    https://david-dm.org/lichunqiang/gulp-stripbom
[david-dm-image]:  https://david-dm.org/lichunqiang/gulp-stripbom.png?theme=shields.io

> This is inspired by [strip-bom](https://github.com/sindresorhus/strip-bom) for gulp.

## Usage

```javascript
var stripBom = require('gulp-stripbom');

gulp.task('default', function(){

	return gulp.src('1.txt')
			.pipe(stripBom())
			.pipe(gulp.dest('dest'));
});
```

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

```sh
$ npm test
```

## License

MIT
