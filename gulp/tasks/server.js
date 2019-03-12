module.exports = function() {
    $.gulp.task('server', function() {
        $.browserSync.init({
            proxy: 'priority.loc',
            notify: false,
            open: false
        });
    });
};