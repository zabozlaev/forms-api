const config = {
  port: +process.env.PORT || 4000,
  frontendUrl: process.env.FRONTEND_URL || '*',
  database: {
    user: process.env.DB_USER,
    name: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
  },
  formsPerIpLimit: +process.env.FORMS_LIMIT || 10,
  rateLimitTime: process.env.FORMS_LIMIT_DELAY || 2 * 60 * 1000,
  redis: {
    host: process.env.REDIS_HOST || 'redis_db',
    port: +process.env.REDIS_PORT || 6379,
    password: process.env.REDIS_PASS || '',
  },
};

export default config;
