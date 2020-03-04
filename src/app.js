import express from 'express';
import { json } from 'body-parser';
import errorHandler from './api/middleware/error';
import notFoundHandler from './api/middleware/notFound';

import apiRouter from './api';

const app = express()
  .use(json())
  .use('/forms', apiRouter)
  .use(notFoundHandler)
  .use(errorHandler);

export default app;
