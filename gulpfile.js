const gulp = require('gulp');
const minifyCSS = require('gulp-cssmin');
const minifyJS = require("gulp-uglify");
const rename = require('gulp-rename');

gulp.task('compressCSS', () => {
  return gulp.src('previewer.css')
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist'));
});

// Task to minify javascript file
gulp.task('compressJS', () => {
  return gulp.src('previewer.js')
    .pipe(minifyJS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist'));
});

// Default task
gulp.task('default', gulp.series('compressCSS', 'compressJS'));