var gulp = require('gulp');
var browserSync = require('browser-sync');


gulp.task('dev',function(){
	
	browserSync.init({
		server:"dist"
	})
	
})
