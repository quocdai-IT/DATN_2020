const schedule = require("node-schedule");
const SyncDataJiraHandler = require("./sync-data-jira");
// const startConfigTraceService = require('./config-trace');

function stopAllJobs() {
  for (const job in schedule.scheduledJobs) {
    schedule.cancelJob(job);
  }
}

async function startJobs() {
  await SyncDataJiraHandler.start();
  // await startConfigTraceService();
}

async function startCronJob() {
  await stopAllJobs();
  await startJobs();
}

module.exports = startCronJob;
