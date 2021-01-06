// CONNECTION is tested and is connecting 12/22

const mysql = require("mysql");
// const express = require("express");

// const app = express();
// // Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Blink182!",
  database: "burgers_db",
});

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;
