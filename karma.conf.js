'use strict';

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'src/public/js/lib/**/*.js',
      'src/public/**/*.js',
      'test/client/**/*.spec.js'
    ],
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true
  });
};
