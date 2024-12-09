


const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
console.log("emnail codem");


 async function SendEmail (userId, subject, message) {
  console.log(userId, subject, message , "in email code functuion");
  if (!isValidEmail(userId)) {
    console.error("Invalid email address provided.");
    return "failure";
  }
  console.log("in the email code function")
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
    console.error("Failed to send email:", error);
    return "failure";
  }
};

module.exports = SendEmail;
