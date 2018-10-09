const schedule = require('node-schedule');

schedule.scheduleJob('*/10 * * * * *', async() => {
  console.log(new Date());
  // FIXME: test ...
  process.exit(0);
});
