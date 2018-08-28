var gulp =        require('gulp')
var browserSync = require('browser-sync').create();
var sass =        require('gulp-sass');
// var concatCss =   require('gulp-concat-css');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');

gulp.task('serve', ['sass'], function() {

  browserSync.init({
    server: "./src"
  });

  gulp.watch("src/sass/*.sass", ['sass']);
  gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('sass', function(){
  return gulp.src("src/sass/*.sass")
    .pipe(sass({errLogToConsole: true}))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
                    }))
    .pipe(cleanCss({ level: 2 }))
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
