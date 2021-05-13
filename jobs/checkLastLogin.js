const database = require('../server/models/userModels');

// from send_sms
const accountSid = 'ACf49202c0379ab189685a846e0ab20295'; // Your Account SID from www.twilio.com/console
const authToken = '';   // Your Auth Token from www.twilio.com/console

// const apiKeys = require('../../.env')
require('dotenv').config;

const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

// last login date 3 days or more earlier than today

// turn into string with no spaces or dashes
const calculateThreeDaysAgo = () => {
  // date object representing today - 3 days for SQL query
  // get date object representing today
  let threeDaysAgo = new Date();
  // set it to three days ago
  threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
  // turn it into a string for an SQL query
  threeDaysAgo = threeDaysAgo.toISOString().slice(0, 19).replace('T', ' ');
  
  // remove time portion
  threeDaysAgo = threeDaysAgo.split(' ')[0].split('-').join('');
  return threeDaysAgo;
};


const threeDays = calculateThreeDaysAgo();

const loginQuery = `SELECT emergencycontactname, emergencycontactphone, firstname FROM users
WHERE lastlogindate <= '${threeDays}';`;
const testQuery = `SELECT * FROM users 
WHERE firstname = 'derek' 
OR firstname = 'alura' 
OR firstname = 'erik' 
OR firstname = 'nisa'
OR firstname = 'nancy';`;

let queryResult = [];

database.query(testQuery, (error, result) => {
  if (error) return error; // next({ status: 500, message: 'Error in checkLastLogin.' });
  console.log(result.rows);
  return setValue(result.rows);
});


function setValue(val) {
  queryResult = val;
  // if users found, send text
  const sendTextsDaily = (userArr) => {
    userArr.forEach(userObj => {
      console.log(userObj);
      const phoneNumber = '+1' + userObj.emergencycontactphone.replace(/\W/g, '');
      console.log("here is " + phoneNumber);
      client.messages.create({
        body: `Hi, ${userObj.emergencycontactname}! ${userObj.firstname} hasn't logged into the SUD App in three or more days. Could you make sure they're doing okay?`,
        to: phoneNumber,  // Text this number
        from: '+18578582454' // From a valid Twilio number
      })
      .then((message) => console.log(message.sid));
    });
  };
  return sendTextsDaily(queryResult);
}




