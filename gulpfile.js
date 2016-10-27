var gulp = require('gulp');
var nodemon = require('gulp-nodemon'); //notice we are using gulp-nodemon

var jsFiles = ['*.js', 'src/**/*.js']; //This watches the types of file with their location

gulp.task('alwaysonserver', [], function () {

    var options = {
        script: 'app.js',
        delayTime: 1,
        env: {
            'PORT': 5000
        },
        watch: jsFiles
    };

    return nodemon(options)
        .on('restart', function (ev) {
            console.log('Restarting.....');
        });
});
