const http = require("http");
const express = require("express");
const app = express();

// it runs from top to bottom
// Make sure that next() is added for the middelware function
// otherwise it doesn't go to the next function

// '/' , this route is the starting route and thereafter it takes any value
// '/', '/about','/kjdfkdjdk' also we get Home Page as response.
app.use("/", (req, res, next) => {
  res.send("Home Page");
});

app.listen(5000);
