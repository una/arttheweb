var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,
    harp        = require('harp');

gulp.task('harp-server', function () {
  harp.server(__dirname + '/_site', {
        port: 4000
    }, function () {
        browserSync({
            proxy: "localhost:4000",
            open: false
        });

        gulp.watch("_site/css/**/*.scss", function () {
            reload("css/main.css", {stream: true});
        });

        gulp.watch([
            "_site/**/*.ejs",
            "_site/**/*.jade",
            "_site/js/**/*.js",
            "_site/**/*.json",
            "_site/**/*.md"
        ], function () {
            reload();
        });
    })
});

gulp.task('default', ['harp-server']);
