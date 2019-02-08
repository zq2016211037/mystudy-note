var gulp = require('gulp');
var fileinclude = require('gulp-file-include');

gulp.task('fileinclude',function(){

	//适配page文件夹下所有的HTML，排除page下的include的HTML
	gulp.src(['page/**/*.html','!page/include/**.html'])
		.pipe(fileinclude({
			perfix:'@@',
			basepath:'@file'
		}))
	.pipe(gulp.dest('dist'))
})