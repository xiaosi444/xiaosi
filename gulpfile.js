var  gulp  = require('gulp'),
	 rename = require('gulp-rename'),
     sass  = require('gulp-sass');
	 uglify=  require('gulp-uglify'),
	 imagemin =require('gulp-imagemin'),
	 babel = require("gulp-babel"),
	 concat  =require('gulp-concat');

gulp.task('css',()=>{
	return gulp.src('./src/css/*.scss')
	       .pipe(sass())
		   .pipe(concat('main.css'))
		   .pipe(gulp.dest('./dist/css'));
})
gulp.task('js',()=>{
	return gulp.src('./src/js/*.js')
		.pipe(uglify())
		.pipe(babel({"presets": ["es2015"]}));
		.pipe(gulp.dest('./dist/js'));
})
gulp.task('img',()=>{
	return gulp.src('./src/img/*')
	       .pipe(imagemin())
		   .pipe(gulp.dest('./dist/img'));
})

gulp.task("default",()=>{
	gulp.watch('./src/css/*.scss',['css']);
	gulp.watch('./src/js/*.js',['js']);
	gulp.watch('./src/img/*',["img"])
})
