const gulp = require("gulp");
const sass = require("gulp-sass");
const del = require("del");

gulp.task("clean", function() {
  del("./css");
});

gulp.task("sass", function() {
  return gulp
    .src("./src/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"));
});

gulp.task("sass:watch", function() {
  gulp.watch("./src/**/*.scss", ["sass"]);
});
