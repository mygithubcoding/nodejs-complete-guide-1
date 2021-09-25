// This is for temporarily storing data in an array in admin router
// and displaying in shop router
const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");

// Storing product details in this array
const products = [];

// you may/may not have next() method in get router

// /admin/add-product   =>GET
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/add-product   =>POST

router.post("/add-product", (req, res) => {
  products.push(req.body);
  res.redirect("/");
});

exports.router = router;
exports.products = products;
