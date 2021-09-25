const http = require("http");
const express = require("express");
const app = express();

// it runs from top to bottom
// Make sure that next() is added for the middelware function
// otherwise it doesn't go to the next function
app.use((req, res, next) => {
  console.log("This run for every request");
  next();
});

app.use((req, res, next) => {
  console.log("In anothe middleware");
  next();
});
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send(`<h1>This is about page</h1>`);
});

app.listen(5000);
