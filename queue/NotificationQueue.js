
const { Queue } = require('bullmq');  
const notificationQueue = new Queue("notifications", {
  connection: {
    host: "127.0.0.1",
    port: 6379,
  }
});


notificationQueue.on("active", (job) => {
  console.log(`Job ${job.id} is active`);
});

notificationQueue.on("error", (error) => {
  console.error("Queue error:", error);
});

notificationQueue.on("failed", (job, error) => {
  console.error(`Job ${job.id} failed with error:`, error);
});

notificationQueue.on("completed", (job) => {
  console.log(`Job ${job.id} completed successfully`);
});

notificationQueue.on("stalled", (job) => {
  console.warn(`Job ${job.id} has stalled`);
});

module.exports = notificationQueue;