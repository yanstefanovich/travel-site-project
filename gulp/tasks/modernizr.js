const gulp = require('gulp');
const modernizr = require('gulp-modernizr');

gulp.task('modernizr', function() {
  return gulp.src(['./app/assets/styles/**/*.css','./app/asstes/scripts/**/*.js'])
             .pipe(modernizr({
               "options": [
                 "setClasses"
               ]
             }))
             .pipe(gulp.dest('./app/temp/scripts'));
});
