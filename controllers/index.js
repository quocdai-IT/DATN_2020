const auth = require("../middlewares/authentication");
const authz = require("../middlewares/authorization");

module.exports = function (app) {
  app.use("/", require("./crwal"));
  app.use("/file", require("./upload"));
  app.use("/lichthi", require("./lichthi"));
  app.use("/dangkimail", require("./dangKiMail"));
  app.use("/sendmail", require("./sendMail"));
  app.use("/xemthi", auth, authz, require("./xemthi"));
  app.use("/xemthiDraf", auth, authz, require("./xemthiDraf"));
  app.use("/users", require("./user"));
  app.use("/roles", require("./role"));
};
