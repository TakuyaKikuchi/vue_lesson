'use strict';

/* -----------------------------------------
*
    watch
*
----------------------------------------- */
const gulp = require('gulp');
const wathc = require('gulp-watch');
const config = require('../../config.json');

gulp.task('watch', function () {
  gulp.watch(config.docRoot.dev + config.watch.html, ['html', 'reload']);
  gulp.watch(config.docRoot.dev + config.watch.scss, ['scss', 'reload']);
  gulp.watch(config.docRoot.dev + config.watch.js, ['js', 'reload']);
  gulp.watch(config.docRoot.dev + config.watch.img, ['image', 'reload']);
});