const route = require("./route");
const express = require("express");
const config = require("./config");
const con = require("./utils/dbConnection");
const cors = require("cors");
const app = express();
app.use(cors());

con.connect(err => {
  route(app, con);
});

try {
  app.listen(config.host, () => {
   console.log(`Server is start at port: ${config.host}`);
  });
} catch (e) {
  console.log(new Date(), `: ${e}`);
}