const gulp = require('gulp');
var clean = require('gulp-clean');
const zip = require('gulp-zip');
var exec = require('child_process').exec;

function buildTask(cb) {
    gulp.src('./index.js')
        .pipe(zip('function.zip'))
        .pipe(gulp.dest('public'));
    cb();
}

function deployFuncTask(cb) {
    exec('aws lambda update-function-code --function-name devbox-funcapp --zip-file fileb://public/function.zip', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
      });
}

function deployActionsTask(cb) {
    exec('gactions update --action_package action.json --project actions-mytest', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
      });
}

function cleanUpTask(cb) {
    gulp.src('public/', {read: false})
        .pipe(clean());
    cb();
}

exports.default = gulp.series(buildTask, deployFuncTask, deployActionsTask, cleanUpTask);