import HttpError from '../utils/error';
import { countFormsPerIp } from '../service';
import config from '../../config';
import logger from '../utils/logger';

export const rateLimitHandler = async (req, res, next) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  logger.info(`Processing request for ${ip}`);

  const count = await countFormsPerIp(ip);

  if (count > config.formsPerIpLimit) {
    logger.warn(`Rate limit for ${ip} received.`);
    return next(new HttpError('You filled enought forms', 429));
  }

  next();
};
