const test = require("./service/test");

module.exports = function (app, con) {
  app.get("/echo", (req, res) => test.echo(req, res, con));
  app.get("/list", (req, res) => test.list(req, res, con));
};
