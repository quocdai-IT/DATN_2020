const schedule = require('node-schedule');

function setSchedule(name, days, months, hours, minutes, seconds, job) {
  const rule = new schedule.RecurrenceRule();
  rule.dayOfWeek = days;
  rule.month = months;
  rule.hour = hours;
  rule.minute = minutes;
  rule.second = seconds;
  return schedule.scheduleJob(name, rule, job);
}

module.exports = setSchedule;
