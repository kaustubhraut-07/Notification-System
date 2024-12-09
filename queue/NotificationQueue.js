const Queue = require("bull");
const redis = require("../config/redis.config");


const notificationQueue = new Queue("notifications", {
  redis: {
    host: "127.0.0.1",
    port: 6375,
  },
});

module.exports = notificationQueue;
