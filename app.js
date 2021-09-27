const express = require("express");
const app = express();
const expressHbs = require("express-handlebars");
// for handle-bars

app.engine(
  "hbs",
  expressHbs({
    layoutsDir: "views/layouts/",
    defaultLayout: "main-layout",
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "views");

// The following for pug engine

//app.set("view engine", "pug");
//app.set("views", "views");

const path = require("path");
const dotenv = require("dotenv");

// no need to install body-parser and use app.use(bodyParser.urlencode())
// with the below step, bodyparsing is and integral part of express
//app.use(dotenv.config());
//const PORT = process.env.PORT;
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//another way of importing directly
//app.use("/", require("./routes/admin"));
// with the below line, every route starts with '/'
// if we put app.use('/admin',adminRouter), the route starts with https://localhost:5000/admin

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(5000);
