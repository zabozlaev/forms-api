import redis from 'redis';
import config from '../config';

class RedisClient {
  constructor() {
    this.client = redis.createClient({
      port: config.redis.port,
      host: config.redis.host,
      password: config.redis.password,
    });
  }

  get(key) {
    return new Promise((res, rej) =>
      this.client.get(key, (err, reply) =>
        err ? rej(err) : res(reply && JSON.parse(reply)),
      ),
    );
  }

  set(key, value) {
    return new Promise((res, rej) =>
      this.client.set(key, JSON.stringify(value), (err, reply) =>
        err ? rej(err) : res(reply),
      ),
    );
  }
}

export const redisClient = new RedisClient();
