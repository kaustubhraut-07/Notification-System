
const { Worker } = require('bullmq');
const Notification = require("../Model/Notification");
const  SendEmail  = require("../services/emailService");
const createMessage = require("../services/smsService");

const worker = new Worker("notifications", async (job) => {
  const { userId, channel, message } = job.data;
  console.log(userId, channel, message, "job id data");

  try {
    let status;
    if (channel === "email") {
      status = await SendEmail(userId, "Notification", message);
    } else if (channel === "sms") {
      console.log("in sms");
      status = await createMessage(userId, message);
    }

    await Notification.create({ userId, channel, message, status });
    console.log(`Notification sent to user ${userId} via ${channel}`);
    
    return status; 
  } catch (error) {
    console.error(`Failed to send notification: ${error.message}`);
    throw error;
  }
}, {
  connection: {
    host: "127.0.0.1",
    port: 6379,
  },
});

worker.on("error", (error) => {
  console.error("Worker error:", error);
});

worker.on("completed", (job) => {
  console.log(`Job ${job.id} completed`);
});



// exports.worker = worker;