import { Queue } from 'bullmq';
import { redisConnection } from './connection';
console.log("📬 QUEUE INIT");

export const emailQueue = new Queue('email-processing', {
  
  connection: redisConnection,

  defaultJobOptions: {
    attempts: 3, // retry failed jobs
    backoff: {
      type: 'exponential',
      delay: 5000, // 5 sec → 10 sec → 20 sec
    },
    removeOnComplete: true,
    removeOnFail: false,
  },
});