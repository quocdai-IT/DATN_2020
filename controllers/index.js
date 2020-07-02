module.exports = function (app) {
  app.use("/", require("./crwal"));
  app.use("/file", require("./upload"));
};
