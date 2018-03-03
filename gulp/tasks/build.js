const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const del = require('del');
const usemin = require('gulp-usemin');
const rev = require('gulp-rev');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

gulp.task('previewDist', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "docs"
    }
  });
});

gulp.task('clearDist', ['icons'], function() {
  return del('./docs/');
});

gulp.task('copyGeneralFiles', ['clearDist'], function() {
  var pathsToCopy = [
    './app/**/*',
    '!./app/index.html',
    '!./app/assets',
    '!./app/assets/images/**',
    '!./app/assets/styles/**',
    '!./app/assets/scripts/**',
    '!./temp',
    '!./temp/**',


  ];
  return gulp.src(pathsToCopy)
             .pipe(gulp.dest('./docs'));
});

gulp.task('optimizeImages', ['clearDist'], function() {
  return gulp.src(['./app/assets/images/**/*','!./app/assets/images/*-i.jpg','!./app/assets/images/icons','!./app/assets/images/icons/**/*'])
             .pipe(imagemin({
               progressive: true,
               interlaced: true,
               multipass: true
             }))
             .pipe(gulp.dest('./docs/assets/images'));
});

gulp.task('useminTrigger', ['clearDist'], function() {
  gulp.start('usemin');
});

gulp.task('usemin', ['styles', 'scripts'], function() {
  return gulp.src('./app/index.html')
             .pipe(usemin({
               css: [function() {return rev()}, function() {return cssnano()}],
               js: [function() {return rev()}, function() {return uglify()}]
             }))
             .pipe(gulp.dest('./docs'));
});

gulp.task('build', ['clearDist','copyGeneralFiles','optimizeImages', 'useminTrigger']);
