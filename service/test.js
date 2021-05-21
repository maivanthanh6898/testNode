const config = require("./../config");

const echo = (req, res, con) => {
  if (req.headers.authorization !== config.token) {
    res.status(400);
    res.end("unauthorize");
    return;
  }
  if (req.query.data === null || req.query.data == "") {
    res.status(500);
    res.end("INTERNAL_SERVER_ERROR");
    return;
  }
  const command = `INSERT INTO \`test\` (\`ip\`, \`data\`) VALUES ('${req.connection.remoteAddress}','${req.query.data}');`;
  con.query(command, (err, result) => {
    if (err) throw err;
    console.log(`Response data to client: ${JSON.stringify(result)}`);
    res.end(`{"status":"success"}`);
  });
};

const list = (req, res, con) => {
  if (req.headers.authorization !== config.token) {
    res.status(400);
    res.end("unauthorize");
    return;
  }
  if (req.query.data === null || req.query.data == "") {
    res.status(500);
    res.end("INTERNAL_SERVER_ERROR");
    return;
  }
  const command = `select * from \`test\` where \`data\` = '${req.query.data}'`;
  con.query(command, (err, result) => {
    if (err) throw err;
    console.log(`Response data to client: ${JSON.stringify(result)}`);
    res.end(JSON.stringify(result));
  });
};

module.exports = {
  echo,
  list,
};
