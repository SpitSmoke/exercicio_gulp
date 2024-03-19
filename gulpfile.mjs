import gulp from 'gulp';
import * as sassCompiler from 'sass';
import gulpSass from 'gulp-sass';
import imagemin from 'gulp-imagemin';
import uglify from 'gulp-uglify';


const sass = gulpSass(sassCompiler);


export function compilaSass() {
    return gulp.src('source/styles/main.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('build/styles'));
}


export function comprimeImagens() {
    return gulp.src('source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images'));
}


export function comprimeJS() {
    return gulp.src('source/script/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/script'));
}


const build = gulp.series(compilaSass, comprimeImagens, comprimeJS);
export default build;

