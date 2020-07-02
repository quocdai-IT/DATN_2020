const crawlData = require("../../../crawldata/crawl");

function sync() {
  try {
    crawlData();
  } catch (error) {
    console.log(error);
  }
}
module.exports = sync;
