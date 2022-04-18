const { src, dest, parallel, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();



const buildPug = () => {
  console.log('Компиляция Pug');

  return src('app/pages/*.pug')
    .pipe(pug())
    .pipe(dest('build/'))
    .pipe(browserSync.stream());
};

const buildSass = () => {
  console.log('Компиляция SASS');

  return src('./app/scss/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('build/styles/'))
    .pipe(browserSync.stream());
};

const browserSyncJob = () => {
  browserSync.init({
    server: "build/"
  });  
 
  watch('app/scss/*.scss', buildSass);
  watch('app/pages/**/*.pug', buildPug);

};

exports.server = browserSyncJob;
exports.build = parallel(buildSass, buildPug);