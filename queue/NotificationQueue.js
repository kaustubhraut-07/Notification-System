const Queue = require("bull");
const redis = require("../config/redis.config");


const notificationQueue = new Queue("notifications", {
  redis: {
    host: redis.options.host,
    port: redis.options.port,
  },
});

module.exports = notificationQueue;
