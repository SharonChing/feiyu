global.jQuery = require('jquery');
var env = require('./env.conf');
//create namespace for global vars
global.ENV = {};
global.ENV.remoteHost = env.remoteHost + '/manage/';

global._ = require('lodash');
require('angular');
require('angular-ui-router');
require('angular-bootstrap');
require('angular-sanitize');
require('angular-translate');

//customized sub modules
require('./common');
require('./auth');
require('./nav');

// entry
require('./app-config')