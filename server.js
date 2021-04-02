const express = require("express");
const expressHandlebars = require("express-handlebars");
const app = express();

// configuration for handlebars
app.engine(
  "handlebars",
  expressHandlebars({
    defaultLayout: "index",
  })
);
app.set("view engine", "handlebars");

// middleware
app.use(express.static(__dirname + "/public"));

// routing

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("Express started on port 3000");
});
