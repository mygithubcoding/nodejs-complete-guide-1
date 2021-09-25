//This is for temporarily storing data in an array in admin router
// and displaying in shop router

const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");

const adminData = require("./admin");

router.get("/", (req, res) => {
  console.log("Shop.js product array ", adminData.products);
  //res.send(adminData.products[0]);
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
