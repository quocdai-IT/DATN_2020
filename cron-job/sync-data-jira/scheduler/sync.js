const schedule = require("node-schedule");
const setSchedule = require("./set-schedule");
const sync = require("../sync");
const constants = require("./constants");

function handleSyncSchedule() {
  const days = [new schedule.Range(0, 6)];
  const months = [new schedule.Range(0, 11)];
  const hours = [new schedule.Range(0, 23)];
  const minutes = 16;
  const seconds = 0;
  setSchedule(
    constants.CRAWL_DATA_WEB,
    days,
    months,
    hours,
    minutes,
    seconds,
    sync
  );
}

module.exports = handleSyncSchedule;
