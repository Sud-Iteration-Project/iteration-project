// const apiKeys = require('../../.env')
require('dotenv').config;


const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'HEY! HI HELLOOO! - Erik',
    to: '+19732558470',  // Text this number
    from: '+18578582454' // From a valid Twilio number
})
.then((message) => console.log(message.sid));