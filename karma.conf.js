'use strict';

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'src/public/js/lib/**/*.js',
      'src/public/**/*.js',
      'test/client/**/*.spec.js'
    ],
      exclude: ['Gruntfile.js'],
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true
  });
};
