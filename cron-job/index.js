const schedule = require("node-schedule");
const SyncDataJiraHandler = require("./sync-data-jira");
const SendMailHnadler = require('./send-mail');
// const startConfigTraceService = require('./config-trace');

function stopAllJobs() {
  for (const job in schedule.scheduledJobs) {
    schedule.cancelJob(job);
  }
}

async function startJobs() {
  // await SyncDataJiraHandler.start();
  await SendMailHnadler.start();
}

async function startCronJob() {
  await stopAllJobs();
  await startJobs();
}

module.exports = startCronJob;
