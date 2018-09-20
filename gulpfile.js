'use strict';

const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const concat      = require('gulp-concat');
const concatCss   = require('gulp-concat-css');
const cleanCSS   = require('gulp-clean-css');
const uglify      = require('gulp-uglify');
const gutil       = require('gulp-util');
const babel       = require('gulp-babel');
const rename      = require('gulp-rename');
const sass        = require('gulp-sass');
const maps        = require('gulp-sourcemaps');
const del         = require('del');





gulp.task("concatScripts", function(){
   return gulp.src([
     'node_modules/slick-carousel/slick/slick.js',
     'app/js/jquery.js',
     'app/js/main.js'
   ])
     .pipe(babel())
     .pipe(maps.init())
     .pipe(concat('app.js'))
     .pipe(maps.write('./'))
     .pipe(gulp.dest("app/js"))
});


gulp.task('minifyscripts', ['concatScripts'], function(){
    return gulp.src('app/js/app.js')
    .pipe(uglify())
     .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('build/js'))
});


gulp.task('compileCss',['compileSass'], () => {
    return gulp.src([
      'node_modules/animate.css/animate.css',
      'node_modules/slick-carousel/slick/slick.css',
      'node_modules/slick-carousel/slick/slick-theme.css',
      'app/css/**'
  ])
  .pipe(concat('application.min.css'))
  .pipe(cleanCSS())
  .pipe(gulp.dest('app/css/'))
})


gulp.task('compileSass', function(){
   return gulp.src([
     'app/scss/application.scss'
 ])
   .pipe(sass({
     outputStyle: 'compressed'
   }).on('error', sass.logError))
   .pipe(rename('main.css'))
   .pipe(gulp.dest('app/css/'))
   .pipe(browserSync.stream())
});



gulp.task('watchFiles', function(){
  gulp.watch('app/scss/**/*.scss', ['compileSass']);
  gulp.watch('app/js/main.js' , ['minifyscripts']);
  gulp.watch('app/index.html').on('change', browserSync.reload);
});

gulp.task('pushHtml', function(){
  gulp.src('app/index.html')
  .pipe(gulp.dest('build'))
});

gulp.task('pushImg', function(){
  gulp.src('app/img/**')
  .pipe(gulp.dest('build/img'))
});

gulp.task('pushFonts', function(){
  gulp.src('app/fonts/**')
  .pipe(gulp.dest('build/fonts'))
});

gulp.task('moveCss', function(){
return gulp.src(['app/css/application.min.css',
                 ], { base : './app/'})

 .pipe(gulp.dest('./build/'))

});



gulp.task('clean', function(){
  return del('build');
});



gulp.task('server', ['watchFiles'], function(){

   browserSync.init({
     server: 'app/'
   });

});




gulp.task('build', [
  'moveCss',
  'minifyscripts',
  'pushHtml',
  'pushImg',
  'pushFonts'

   ]);


gulp.task('default', ['clean'], function(){
  gulp.start('build');
});
