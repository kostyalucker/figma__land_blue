const {src,dest, parallel, watch} = require('gulp');
const sass = require('gulp-sass');
const csso = require('gulp-csso');
const del = require('del');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

function browsersync() {
  browserSync.init({
    server: {baseDir: 'src/'},
    notify: false,
    online: true
  })
}

function scss() {
  return src('src/scss/styles.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(csso())
    .pipe(concat('index.min.css'))
    .pipe(dest('src/css'))
    .pipe(browserSync.stream())
}

function clearcss() {
  return del('src/css/**/*',{force: true})
}

function startwatch() {
  watch('src/scss/**/*', scss)
  watch('src/*.html').on('change', browserSync.reload);
}

exports.browsersync = browsersync;
exports.scss = scss;
exports.clearcss = clearcss;
exports.default = parallel(clearcss, scss, browsersync, startwatch);