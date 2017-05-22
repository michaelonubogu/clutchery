var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
  console.log('-');
  console.log('-');
  console.log('=> Copy Service Worker');
  gulp.start('service-worker-copy');
});

gulp.task('service-worker-copy', function() {
    gulp.src(['node_modules/@angular/service-worker/bundles/worker-basic.min.js'])
        .pipe(gulp.dest('./src/assets/service-worker'));
});