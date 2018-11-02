const service = require('./service');
const logger = require('../applogger.js');

// function welcome() {
//   process.stdout.write('\n=========== Boilerplate ===========\n');
// }

function welcome() {
  let figlet = require('figlet');
  return figlet('Boilerplate', function(err, data) {
      if (err) {
        logger.error('figlet failure...\n');
        logger.error(err);
        return;
      }
      logger.info(data)
  });
}

module.exports = function () {
  welcome();
  let app = service.createApp();
  app = service.setupWebpack(app);
  app = service.setupStaticRoutes(app);
  app = service.setupMiddlewares(app);
  app = service.setupAppRoutes(app);
  app = service.setupRESTRoutes(app);
  service.setupMongooseConnections();
  return app;
};
