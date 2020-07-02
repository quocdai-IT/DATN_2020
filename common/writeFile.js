var fs = require("fs");
module.exports = function writeFile(json) {
  fs.writeFile("output.json", JSON.stringify(json, null, 4), function (err) {
    console.log(
      "File successfully written! - Check your project directory for the output.json file"
    );
  });
};
