import { createForm, listForms } from '../service';
import logger from '../utils/logger';

export const postForm = async (req, res) => {
  // 1 случай, если юзаем прокси типа NGINX, traefik
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  await createForm(req.body, ip);
  logger.info(`Created form for ${ip}`);
  return res.status(201).end();
};

export const getForms = async (req, res) => {
  const data = await listForms(req.query);
  return res.send(data);
};
