const express = require("express");
const app = express();
const path = require("path");
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
const dotenv = require("dotenv");

// no need to install body-parser and use app.use(bodyParser.urlencode())
// with the below step, bodyparsing is and integral part of express
//app.set(dotenv.config());
//const PORT = process.env.PORT;
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//another way of importing directly
//app.use("/", require("./routes/admin"));
// with the below line, every route starts with '/'
// if we put app.use('/admin',adminRouter), the route starts with https://localhost:5000/admin
app.use("/admin", adminRouter);
app.use(shopRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(5000);
