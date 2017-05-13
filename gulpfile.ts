import gulp = require('gulp');
import  del = require('del');
import  ts = require('gulp-typescript'); 
import merge = require('merge2');


let tsProject = ts.createProject('tsconfig.json');

// TypeScript compiler
gulp.task('scripts', ['clean'], () => { 
    let tsResult = gulp.src('src/**/*.ts')
        .pipe(tsProject());
    return merge([ 
        // Merge the two output streams, so this task is finished when the IO of both operations is done.
        tsResult.dts.pipe(gulp.dest('build/definitions')),
        tsResult.js.pipe(gulp.dest('build'))
    ]);
});

// Clean
gulp.task('clean', (cb) => {
  return del(['build/*'], cb);
});

// Watch
gulp.task('default', ['scripts'], () => {
    return gulp.watch('src/**/*.ts', ['scripts']);
});