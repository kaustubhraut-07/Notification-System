const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  channel: { type: String, enum: ["email", "sms", "in-app"], required: true },
  message: { type: String, required: true },
  status: { type: String, enum: ["success", "failure"], required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Notification", notificationSchema);
