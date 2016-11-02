var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('reload', ['less'],browserSync.reload ) ;

gulp.task('less', function(){
  return gulp.src('./src/assets/less/**/*')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(concat('bundle.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./src/assets/css/'));
});

gulp.task('watch', function(){
  gulp.watch('./src/assets/less/**/*', ['reload']) ;
  gulp.watch('./src/**/*', ['reload']) ;
});

gulp.task('server', function(){
  browserSync({
    server : {
      baseDir : './src',
      routes : {
        '/bower_components' : 'bower_components'
      }
    }
  });
});

gulp.task('default', ['server', 'less', 'watch']);
