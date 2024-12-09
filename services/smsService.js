
const twilio = require("twilio"); 



const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

async function createMessage() {
  const message = await client.messages.create({
    body: "Testing message from my code",
    // from: "+15017122661",
    messagingServiceSid: process.env.SID,
    to: "+919011686021",
  });

  console.log(message.body);
  return "success";
}




module.exports = createMessage;

