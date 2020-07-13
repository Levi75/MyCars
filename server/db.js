const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "user",
  host: "localhost",
  port: 5432,
  database: "perncars",
});

module.exports = pool;
