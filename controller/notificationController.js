
const notificationQueue = require("../queue/NotificationQueue");

exports.createNotification = async (req, res) => {
  const { userId, channel, message } = req.body;

 
  if (!userId || !channel || !message) {
    return res.status(400).json({ success: false, message: "Missing required fields" });
  }

  try {
    // console.log("Adding notification to queue:", { userId, channel, message });

    await notificationQueue.add('send-notification', { userId, channel, message });
    console.log("Notification added to queue");

    res.status(200).json({ success: true, message: "Notification queued" });
  } catch (error) {
    console.error("Failed to add notification to queue:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};
