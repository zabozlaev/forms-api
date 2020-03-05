import express from 'express';

import { json } from 'body-parser';
import cors from 'cors';
import errorHandler from './api/middleware/error';
import notFoundHandler from './api/middleware/notFound';

import swaggerUi from 'swagger-ui-express';
import jsonDoc from '../swagger.json';

import apiRouter from './api';
import config from './config';

const app = express()
  .use(json())
  .use(
    cors({
      origin: config.frontendUrl,
    }),
  )
  .use('/docs', swaggerUi.serve)
  .get('/docs', swaggerUi.setup(jsonDoc))
  .use('/forms', apiRouter)
  .use(notFoundHandler)
  .use(errorHandler);

export default app;
