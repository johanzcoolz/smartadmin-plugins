const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

const sources = {
  flot: [
   'bower_components/Flot/jquery.flot.js',
   'bower_components/Flot/jquery.flot.resize.js',
   'bower_components/Flot/jquery.flot.fillbetween.js',
   'bower_components/flot.orderbars/js/jquery.flot.orderBars.js',
   'bower_components/Flot/jquery.flot.pie.js',
   'bower_components/Flot/jquery.flot.time.js',
   'bower_components/flot.tooltip/js/jquery.flot.tooltip.min.js',
  ]
}

const dest = {
  flot: './flot-bundle'
}

gulp.task('concat', ()=>{
  return gulp.src(sources.flot)
    .pipe(concat('flot-bundle.js'))
    .pipe(gulp.dest(dest.flot))

})

gulp.task('uglify', ()=>{
  return gulp.src(sources.flot)
    .pipe(uglify())
    .pipe(concat('flot-bundle.min.js'))

    .pipe(gulp.dest(dest.flot))

})

gulp.task('default', ['concat', 'uglify'])
