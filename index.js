const express = require("express");
const notificationRoutes = require("./routes/notification.route");
const dbConnect = require("./config/dbConnect");
const { worker } = require("./worker/NotificationWorker");

const app = express();
app.use(express.json());
dbConnect();

// worker
app.use("/api", notificationRoutes);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
