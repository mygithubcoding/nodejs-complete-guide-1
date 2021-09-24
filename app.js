const os = require("os");
const path = require("path");
const fs = require("fs");
const http = require("http");
// Ctrl+c -> to quit the server
// process.exit(),process.exit(1)
const server = http
  .createServer((req, res) => {
    //console.log(req);
    //console.log(req.url, req.method, req.headers);
    const url = req.url;
    if (url === "/") {
      return res.end("Home Page");
    }
    if (url === "/about") {
      return res.end("About Page");
    }

    if (url === "/Contact") {
      return res.end("Contact Page");
    }
  })
  .listen(5000);
