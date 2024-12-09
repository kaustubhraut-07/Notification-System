const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

module.exports = async (userId, subject, message) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userId,
    subject,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return "success";
  } catch (error) {
    console.error(`Failed to send email: ${error.message}`);
    return "failure";
  }
};
