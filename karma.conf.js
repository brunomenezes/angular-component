module.exports = function(config) {
    config.set({
        basePath: "",
        frameworks: ["jasmine"],
        files: [
            "public/bower_components/angular/angular.js",
            "public/bower_components/angular-mocks/angular-mocks.js",
            "static/ps-movies/module.js",
            "static/ps-movies/**/*.js"
        ],
        exclude: [

        ],
        preprocessors: {

        },
        reporters: ["progress"],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ["Chrome"],
        singleRun: false,
        concurrency: Infinity
    });
}