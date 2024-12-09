const Redis = require("ioredis");

let redisInstance;

const getRedisClient = () => {
  if (!redisInstance) {
    redisInstance = new Redis({
      host: "127.0.0.1",
      port: 6375,
    });

    redisInstance.on("connect", () => {
      console.log("Connected to Redis");
    });

    redisInstance.on("error", (err) => {
      console.error("Redis error:", err);
    });
  }

  return redisInstance;
};

module.exports = getRedisClient;
