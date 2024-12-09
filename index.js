const express = require("express");
const mongoose = require("mongoose");
const { addNotificationJob } = require("./queue");
require("dotenv").config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.post("/notify", async (req, res) => {
  const { userId, channel, message } = req.body;
  try {
    await addNotificationJob(userId, channel, message);
    res.status(200).json({ success: true, message: "Notification task queued" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
