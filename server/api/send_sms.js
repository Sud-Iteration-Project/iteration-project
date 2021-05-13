
var accountSid = 'ACf49202c0379ab189685a846e0ab20295'; // Your Account SID from www.twilio.com/console
var authToken = '08d2367f14f42aa2420be240130852cd';   // Your Auth Token from www.twilio.com/console

// const apiKeys = require('../../.env')
require('dotenv').config;



const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'testing testing testing!',
    to: '+18474834819',  // Text this number
    from: '+18578582454' // From a valid Twilio number
})
.then((message) => console.log(message.sid));
