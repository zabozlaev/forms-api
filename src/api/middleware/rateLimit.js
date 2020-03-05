import HttpError from '../utils/error';
import config from '../../config';
import logger from '../utils/logger';
import { redisClient } from '../../db/redis';

export const rateLimitHandler = async (req, _, next) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  logger.info(`Processing request for ${ip}`);

  const exists = await redisClient.get(ip);

  const data = {
    count: 1,
    appeared: Date.now(),
  };

  if (!exists) {
    await redisClient.set(ip, data);
    return next();
  }

  const currentTime = Date.now();

  let difference = (currentTime - exists.appeared) / config.rateLimitTime;

  if (difference < 1) {
    if (exists.count > config.formsPerIpLimit) {
      logger.warn(`Rate limit for ${ip} received.`);
      return next(new HttpError('You filled enought forms', 429));
    }

    exists.count++;

    await redisClient.set(ip, exists);

    return next();
  }

  await redisClient.set(ip, data);

  next();
};
