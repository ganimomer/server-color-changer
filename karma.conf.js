// Karma configuration
// Generated on Wed Nov 05 2014 18:15:03 GMT+0200 (IST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
      'test-main.js',
      {pattern: 'src/public/js/lib/**/*.js', included: false},
      {pattern: 'src/public/js/lib/**/*.js', included: false},
      {pattern: 'src/public/**/*.js', included: false},
      {pattern: 'test/client/**/*.spec.js', included: false},
      {pattern: 'test/client/**/test-main.js', included: false}
    ],


    // list of files to exclude
    exclude: [
        'Gruntfile.js',
        'src/public/js/main.js'
    ],
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
