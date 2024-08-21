const logger = require('../../config/logger');

exports.getUser = (req, res) => {
   logger.info('Fetching user data', { userId: req.params.id });

   res.status(200).json({ id: req.params.id, name: 'John Doe' });
};

exports.createUser = (req, res) => {
  //  log when a user is create
  logger.info('Creating a new user', { user: req.body });

  //  creating a user
  res.status(201).json({ id: 1, ...req.body });
};
