const app = require('./app');
const config = require('../config/appConfig');
const logger = require('../config/logger');

// Start the server
app.listen(config.port, () => {
  logger.info(`Server running in ${config.env} mode on port ${config.port}`);
});
