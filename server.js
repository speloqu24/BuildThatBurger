// CATS APPP

// SERVER checked and is listening 12/22
const exphbs = require("express-handlebars");
const express = require("express");
// const mysql = require("mysql");

const app = express();

// Set the port of our application
const PORT = process.env.PORT || 5000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);
