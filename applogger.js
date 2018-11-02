const log4js = require('log4js');
const path = require('path');
log4js.configure(path.join(__dirname, './log4js.conf.json'));
const logger = log4js.getLogger();
module.exports = logger;
