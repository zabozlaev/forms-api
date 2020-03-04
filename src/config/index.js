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
};

export default config;
