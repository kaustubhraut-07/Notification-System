const notificationQueue = require("../queue/NotificationQueue");
const Notification = require("../Model/Notification");
const sendEmail = require("../services/emailService");
const sendSMS = require("../services/smsService");
const createInAppNotification = require("../services/inAppService");

notificationQueue.process(async (job) => {
  const { userId, channel, message } = job.data;

  try {
    let status;
    if (channel === "email") {
      status = await sendEmail(userId, "Notification", message);
    } else if (channel === "sms") {
      status = await sendSMS(userId, message);
    } 
    // else if (channel === "in-app") {
    //   status = await createInAppNotification(userId, message);
    // }

    await Notification.create({ userId, channel, message, status });
    console.log(`Notification sent to user ${userId} via ${channel}`);
  } catch (error) {
    console.error(`Failed to send notification: ${error.message}`);
    throw error;
  }
});
