const Redis = require("ioredis");

let redisInstance;

const getRedisClient = () => {
  console.log("out redis insatcne 1");
  if (!redisInstance) {
    console.log("in redis insatcne")
    redisInstance = new Redis({
      host: "127.0.0.1",
      port: 6379,
    });

    redisInstance.on("connect", () => {
      console.log("Connected to Redis");
    });
    console.log("out redis insatcne 2");

    redisInstance.on("error", (err) => {
      console.error("Redis error:", err);
    });
  }

  return redisInstance;
};

module.exports = getRedisClient;
