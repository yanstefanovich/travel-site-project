const gulp = require('gulp'),
      postcss = require('gulp-postcss'),
      autoprefixer = require('autoprefixer'),
      cssVars = require('postcss-simple-vars'),
      cssNested = require('postcss-nested'),
      cssImport = require('postcss-import'),
      cssMixins = require('postcss-mixins');

gulp.task('styles', function() {
  console.log('Styles called.');
  return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, cssMixins, cssNested, cssVars, autoprefixer]))
        .on('error', function(error) {
          console.log(error.toString());
          this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
});
