const pg = require("pg");
const settings = require("./settings.json"); // settings.json
// this case do not need dotenv module

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  // client.query("SELECT $1::int AS number", ["1"], (err, result) => {
  client.query("SELECT * FROM famous_people", [], (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log(result.rows[0]); //output: 1
    client.end();
  });
});