import gulp from "gulp";
import browserify from "browserify";
import source from "vinyl-source-stream";
var DIST_DIR = "./dist";

gulp.task("default", () => {
  
  var b = browserify({debug: true});

  return b.transform("babelify")
    .plugin('minifyify', {
         map: 'app.map',
         uglify: {
             mangle: false,
             compress: {
                 drop_debugger: false,
                 drop_console: false,
             }
         },
         output: DIST_DIR + '/js/app.map'
     })
     .add("src/app.js")
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("dist"));

});

