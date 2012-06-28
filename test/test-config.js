// Sample Testacular configuration file, that contain pretty much all the available options
// It's used for running client tests on Travis (http://travis-ci.org/#!/vojtajina/testacular)
// Most of the options can be overriden by cli arguments (see testacular --help)



// base path, that will be used to resolve files and exclude
basePath = '..';

// list of files / patterns to load in the browser
files = [
  JASMINE,
  JASMINE_ADAPTER,
  'test/lib/jquery/jquery-1.7.2.js',
  'test/lib/jquery/jquery-ui-1.8.18.js',
  'test/lib/angular-1.0.1/angular.js',
  'test/lib/angular-1.0.1/angular-mocks.js',
  'common/src/*.js',
  'modules/directives/date/src/*.js',
  'modules/directives/date/test/*.js',
  'modules/directives/template/src/*.js',
  'modules/directives/template/test/*.js',
  'modules/directives/currency/src/*.js',
  'modules/directives/currency/test/*.js',
];

// list of files to exclude
exclude = [];

// use dots reporter, as travis terminal does not support escaping sequences
// possible values: 'dots' || 'progress'
reporter = 'dots';


// these are default values, just to show available options

// web server port
port = 8080;

// cli runner port
runnerPort = 9100;

// enable / disable colors in the output (reporters and logs)
colors = true;

// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_DEBUG;

// enable / disable watching file and executing tests whenever any file changes
autoWatch = false;

// polling interval in ms (ignored on OS that support inotify)
autoWatchInterval = 0;