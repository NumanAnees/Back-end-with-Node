const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
tempPath = path.join(__dirname, "/NewViews/Views");
partialpath = path.join(__dirname, "/NewViews/Partials");
//set view engine
app.set("view engine", "hbs");
//set views dir to anyother
app.set("views", tempPath);

//Now register partial by setting route
hbs.registerPartials(partialpath);
//template engine route
app.get("", (req, res) => {
  res.render("index", { name: "Numan" });
});
app.get("/contact", (req, res) => {
  res.render("contact", { name: "Numan" });
});
app.listen(8000, () => {
  console.log("listening to the port 8000");
});
