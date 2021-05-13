const path = require('path');
const ms = require('ms');
const dayjs = require('dayjs');
// const Cabin = require('cabin');

const Bree = require('bree');

const bree = new Bree({
  // logger set to console by default, but bree recommends cabin
  // logger: new Cabin(),
  jobs: [
    {
      name: 'checkLastLogin',
      timeout: '1m'
      // interval: 'at 12:00 pm',
      // path: path.join(__dirname, 'checkLastLogin'),
      // root: false
    }
  ],
});

bree.start();
// console.log("script ran");