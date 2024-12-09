const express = require("express");
const notificationRoutes = require("./routes/notification.route");
const dbConnect = require("./config/dbConnect");

const app = express();
app.use(express.json());
dbConnect();

app.use("/api", notificationRoutes);

module.exports = app;
