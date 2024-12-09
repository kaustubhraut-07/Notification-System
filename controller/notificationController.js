const notificationQueue = require("../queue/NotificationQueue");

exports.createNotification = async (req, res) => {
  const { userId, channel, message } = req.body;

  try {
    await notificationQueue.add({ userId, channel, message });
    res.status(200).json({ success: true, message: "Notification queued" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
