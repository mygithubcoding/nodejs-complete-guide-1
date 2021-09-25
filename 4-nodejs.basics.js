const express = require("express");
const app = express();

// no need to install body-parser and use app.use(bodyParser.urlencode())
// with the below step, bodyparsing is and integral part of express
app.use(express.urlencoded({ extended: true }));

app.use("/add-product", (req, res, next) => {
  res.send(
    `<form action="/product" method="POST">
    <input type="text" name="title" />
    <button type="submit">Add Product</button>
    </form>`
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from Express JS</h1>");
});

app.listen(5000);
