import logger from '../utils/logger';

const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.status === 500 ? 'Internal server error' : err.message;
  const timestamp = Date.now();
  const path = req.path;

  logger.error(message, path);

  return res
    .status(status)
    .send({
      status,
      message,
      timestamp,
      path,
    })
    .end();
};

export default errorHandler;
