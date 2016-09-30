var gulp         = require('gulp'),
    plumber      = require('gulp-plumber'),
    rename       = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps   = require('gulp-sourcemaps'),
    cssnano      = require('gulp-cssnano'),
    less         = require('gulp-less'),
    webpack      = require('webpack-stream'),
    config       = require('./config.json');


gulp.task('css', function(){
  return gulp.src([config.css.src + 'screen.less'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
      }}))
    .pipe(sourcemaps.init())
      .pipe(less())
      .pipe(autoprefixer('last 2 versions'))
      .pipe(cssnano({autoprefixer: false}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.css.dest))
});

gulp.task('cssprod', function(){
  return gulp.src([config.css.src + 'screen_prod.less'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
      }}))
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(cssnano({autoprefixer: false}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.css.dest))
});

gulp.task('scripts', function(){
  return gulp.src(config.js.src + '**/*.js')
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
      }}))
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest(config.js.dest))
});

gulp.task('default', function(){
  gulp.watch(config.css.src + "**/*.less", ['css']);
  gulp.watch(config.js.src + "**/*.js", ['scripts']);
});