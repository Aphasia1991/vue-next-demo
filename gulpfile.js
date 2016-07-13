const del = require('del');
const gulp = require('gulp');
const server = require('gulp-webserver');
const postcss = require('gulp-postcss');
const cssnext = require('postcss-cssnext');
const rollup = require('rollup').rollup;
const babel = require('rollup-plugin-babel');

const path = {
  base: {
    base: 'src'
  },
  copy: ['!src/**/*.css', '!src/**/*.js', '!src/component', 'src/**/*'],
  css: ['src/**/*.css'],
  js: ['src/**/*.js'],
  entry: 'src/index.js',
  output: 'dist/js/bundle.js'
};

gulp.task('css', () => {
  const cssPlugins = [
    cssnext({
      browsers: ['Android >= 4.0', 'iOS >= 7.0']
    })
  ];

  gulp.src(path.css, path.base)
    .pipe(postcss(cssPlugins))
    .pipe(gulp.dest('dist'))
});

gulp.task('js', () => rollup({
  entry: path.entry,
  plugins: [babel({
    presets: ['es2015-rollup']
  })]
}).then(bundle => {
  bundle.write({
    format: 'cjs',
    dest: path.output
  });
}));

gulp.task('copy', () => {
  gulp.src(path.copy, path.base)
    .pipe(gulp.dest('dist'));
});

gulp.task('server', ['css', 'js', 'copy'], () => {
  gulp.src('dist')
    .pipe(server({
      host: '127.0.0.1',
      port: 1024,
      livereload: true,
      open: true
    }));
});

gulp.task('watch', ['server'], () => {
  gulp.watch(path.css, ['css']);
  gulp.watch(path.js, ['js']);
  gulp.watch(path.copy, ['copy']);

  console.log('==============================');
});

gulp.task('default', () => {
  del(['dist/**/*']).then(() => {
    gulp.start('watch');
  });
});
