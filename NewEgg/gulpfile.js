//先到入需要的插件
const gulp = require('gulp');//gulp插件
const sass = require('gulp-sass');//编译sass插件
const cssnano = require('gulp-cssnano');//压缩css
const rename = require('gulp-rename');//重命名
const uglify = require('gulp-uglify');//压缩js 
const concat = require ('gulp-concat');//合并js 


//创建并发布任务

//创建并发布sass编译任务
gulp.task('sass',function(){
	gulp.src('src/sass/*.scss').pipe(sass()).pipe(cssnano()).pipe(rename({'suffix':'.min'})).pipe(gulp.dest('dist/css'));
})

// // gulp.task('sass',function(){
// // 	 gulp.src('src/sass/login.scss').pipe(sass()).pipe(cssnano()).pipe(rename({'suffix':'.min'})).pipe(gulp.dest('dist/css'));
// // })
// 
// gulp.task('sass',function(){
// 	 gulp.src('src/sass/register.scss').pipe(sass()).pipe(cssnano()).pipe(rename({'suffix':'.min'})).pipe(gulp.dest('dist/css'));
// })



//创建并发布js的编译任务
gulp.task('js',function(){
	gulp.src('src/js/*js').pipe(concat('index.js')).pipe(rename({'suffix':'.min'})).pipe(uglify()).pipe(gulp.dest("dist"));
})


//监听任务是否出错
gulp.task('default',function(){
	gulp.watch('./src/sass/*.scss',['sass']);
	
})
gulp.task('jsdefault',function(){
	gulp.watch('./src/js/*.js',['js']);
})