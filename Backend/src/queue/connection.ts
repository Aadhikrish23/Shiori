import IORedis from 'ioredis';

export const redisConnection = new IORedis({
  host: '127.0.0.1',
  port: 6379,

  maxRetriesPerRequest: null, // REQUIRED for BullMQ
});

redisConnection.on('connect', () => {
  console.log('🟢 BullMQ Redis connected');
});

redisConnection.on('error', (err) => {
  console.error('🔴 BullMQ Redis error:', err);
});