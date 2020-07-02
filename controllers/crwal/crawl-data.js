module.exports = function (req, res) {
  const crawl = require("../../crawldata/crawl");
  try {
    crawl();
    res.send("data success crawl");
  } catch (error) {
    console.log("error", error);
    res.send(error);
  }
};
