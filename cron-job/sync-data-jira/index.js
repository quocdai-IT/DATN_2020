const scheduler = require("./scheduler");

function start() {
  scheduler.handleSyncchedule();
}

module.exports = {
  start,
};
