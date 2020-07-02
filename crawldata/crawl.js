const _ = require("lodash");
const writeFile = require("../common/writeFile");
const comparer = require("../common/checkComparer");
const request = require("request");
const cheerio = require("cheerio");
const Deduplicate = require("../util/deduplicate");
const dataCrawl = require("../output.json");
function crawlWeb() {
  const deduplicatte = new Deduplicate(5000);
  // console.log("123");
  // Let's scrape Anchorman 2
  url = "https://utc2.edu.vn/thong-bao/p=1";
  request(url, function (error, response, html) {
    if (!error) {
      var $ = cheerio.load(html);
      var title, release, rating, link;
      var json = dataCrawl;
      var results = [];

      $(".mucdichvu").filter(function () {
        var data = $(this);
        title = cheerio.load(data.html()).root().find("a").text().trim();
        link = cheerio.load(data.html()).root().find("a").attr("href");
        date = data.children().first().next().text().trim();
        data = {
          title: title,
          link: `https://utc2.edu.vn/${link}`,
          date: date.split(" ")[0],
        };
        results.push(data);
        // json.data = results;
      });
    }
    if (dataCrawl.data) {
      const currentDatas = dataCrawl.data;
      const newData = results.filter(comparer(currentDatas));
      if (newData.length > 0) {
        newData.forEach((item) => {
          json.data.push(item);
        });
      } else {
        json.data = currentDatas;
      }
    }
    writeFile(json);
  });
}

module.exports = crawlWeb;
