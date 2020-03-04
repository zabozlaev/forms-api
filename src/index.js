import 'dotenv/config';
import { createServer } from 'http';

import app from './app';
import config from './config';

createServer(app).listen(config.port);
