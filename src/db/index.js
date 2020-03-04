import mysql from 'mysql2';
import config from '../config';

const pool = mysql.createPool({
  host: config.database.host,
  user: config.database.user,
  database: config.database.name,

  password: config.database.password,
});

export default pool.promise();
