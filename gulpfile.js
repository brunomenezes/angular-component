var gulp = require('gulp');
var gls = require('gulp-live-server');
gulp.task('serve', function() {

    //1. serve with default settings 
    var server = gls.static(['/public', '/static'], 3000); //equals to gls.static('public', 3000);
    server.start();

    //use gulp.watch to trigger server actions(notify, start or stop) 
    gulp.watch(['./static/**/*.js', './static/**/*.html', './static/**/*.json'], function (file) {
        server.notify.apply(server, [file]);
    });
});