module.exports = function (app) {
  app.use("/", require("./crwal"));
  app.use("/file", require("./upload"));
  app.use("/lichthi", require("./lichthi"));
  app.use("/dangkimail", require('./dangKiMail'));
  app.use("/sendmail", require('./sendMail'));


};
