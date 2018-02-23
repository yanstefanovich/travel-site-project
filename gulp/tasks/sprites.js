const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const rename = require('gulp-rename');
const del = require('del');

var config = {
  mode: {
    css: {
      sprite: 'sprite.svg',
      render: {
        css:{
          template: './gulp/templates/sprite.css'
        }
      }
    }
  }
};

gulp.task('beginClean', function() {
  return del(['./app/temp/sprite','./app/assets/images/sprites']);
});

gulp.task('createSprite', ['beginClean'], function() {
  return gulp.src('./app/assets/images/icons/**/*.svg')
             .pipe(svgSprite(config))
             .pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('copySpriteImage', ['createSprite'], function() {
  return gulp.src('./app/temp/sprite/css/**/*.svg')
             .pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task('copySpriteCSS', ['createSprite'], function() {
  return gulp.src('./app/temp/sprite/css/*.css')
             .pipe(rename('_sprite.css'))
             .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('endClean', ['copySpriteCSS','copySpriteImage'], function() {
  return del(['./app/temp/sprite']);
});

gulp.task('icons', ['beginClean','createSprite','copySpriteCSS', 'copySpriteImage','endClean']);
