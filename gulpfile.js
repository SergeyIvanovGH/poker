/**
 * Created by svivanov on 29.05.16.
 */
var gulp = require("gulp");     //http://gulpjs.com/

gulp.task("default", ["copy_angular_js", 'copy_angular_route_js']);

gulp.task("copy_angular_js", function () {
    gulp.src("node_modules/angular/angular.js")
        .pipe(gulp.dest("src/main/resources/static/js/"));
});

gulp.task("copy_angular_route_js", function () {
    gulp.src("node_modules/angular-route/angular-route.js")
        .pipe(gulp.dest("src/main/resources/static/js/"));
});
