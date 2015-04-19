var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var htmlreplace = require('gulp-html-replace');
var shell = require('gulp-shell')
var del = require('del');
var runSequence = require('run-sequence');

gulp.task('serve', function () {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("app/*").on("change", browserSync.reload);
});

gulp.task('jspm-bundle', shell.task("jspm bundle-sfx --minify app build/app.js"));

gulp.task('index-js-replace', function () {
  return gulp.src('index.html')
    .pipe(htmlreplace({'js': 'app.js'}))
    .pipe(gulp.dest('./build/'));
});

gulp.task('copy-html', function () {
  return gulp.src('./app/**/*.html').pipe(gulp.dest('./build/app/'));
});

gulp.task('clean-build', function (cb) {
  del("./build/", cb);
});

gulp.task('build', function(cb) {
  runSequence('clean-build',
              'jspm-bundle',
              'index-js-replace',
              'copy-html',
              cb);
});