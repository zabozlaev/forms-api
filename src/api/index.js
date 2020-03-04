import { Router } from 'express';
import * as formsController from './controller';
import { validateBody } from './middleware/validation';
import { rateLimitHandler } from './middleware/rateLimit';

import { postFormSchema } from './validation';

import wrapHandler from './utils/handlerWrapper';

const apiRouter = Router();

apiRouter
  .route('/')
  // этот роут по идее не должен быть публичным, просто так сделал
  .get(wrapHandler(formsController.getForms))
  .post(
    rateLimitHandler,
    validateBody(postFormSchema),
    wrapHandler(formsController.postForm),
  );

export default apiRouter;
