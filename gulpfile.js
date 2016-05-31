/**
 * Created by svivanov on 29.05.16.
 */
var gulp = require("gulp");     //http://gulpjs.com/

gulp.task("default", ["copy_angular_js"]);

gulp.task("copy_angular_js", function () {
    gulp.src("node_modules/angular/angular.min.js")
        .pipe(gulp.dest("src/main/resources/static/js/"));
});
