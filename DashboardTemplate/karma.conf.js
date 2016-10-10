module.exports = function(config) {
  config.set({

    basePath: "",
    frameworks: ["jasmine"],
    files: [
        "bower_components/angular/angular.js",       
        "bower_components/angular-mocks/angular-mocks.js",
        "bower_components/angular-component-router/angular_1_router.js",
        "bower_components/angular-animate/angular-animate.js",

        "app/entry.js",
        "app/**/*.spec.js"
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
    singleRun: true,
    concurrency: Infinity
  });
};