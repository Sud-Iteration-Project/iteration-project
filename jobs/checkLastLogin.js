const database = require('../server/models/userModels');

// last login date 3 days or more earlier than today

// turn into string with no spaces or dashes
const calculateThreeDaysAgo = () => {
  // date object representing today - 3 days for SQL query
  // get date object representing today
  let threeDaysAgo = new Date();
  // set it to three days ago
  threeDaysAgo.setDate(threeDaysAgo.getDate() - 1);
  // turn it into a string for an SQL query
  threeDaysAgo = threeDaysAgo.toISOString().slice(0, 19).replace('T', ' ');
  
  // remove time portion
  threeDaysAgo = threeDaysAgo.split(' ')[0].split('-').join('');
  return threeDaysAgo;
};


const threeDays = calculateThreeDaysAgo();

const loginQuery = `SELECT emergencycontactname, emergencycontactphone, firstname FROM users
WHERE lastlogindate <= '${threeDays}';`;
const testQuery = `SELECT emergencycontactname, emergencycontactphone, firstname FROM users
WHERE lastlogindate >= CURRENT_DATE;`;

database.query(testQuery, (error, result) => {
  // if (error) return error; // next({ status: 500, message: 'Error in checkLastLogin.' });
  
  console.log(result.rows);
  // response.locals.user = result.rows;
  // response.locals.thismood = body.mood;
  // return next();
});

// if users found, send text





