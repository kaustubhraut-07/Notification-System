const express = require("express");
const { createNotification } = require("../controller/notificationController");

const router = express.Router();

router.post("/notify", createNotification);

module.exports = router;
