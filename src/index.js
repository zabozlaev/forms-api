import 'dotenv/config';
import { createServer } from 'http';

import app from './app';
import config from './config';
import logger from './api/utils/logger';

createServer(app).listen(config.port, () =>
  logger.info(`Application is ready on ${config.port}`),
);
