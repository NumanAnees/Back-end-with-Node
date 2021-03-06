const express = require("express");
const path = require("path");
const app = express();
tempPath = path.join(__dirname, "/NewViews");
//set view engine
app.set("view engine", "hbs");
//set views dir to anyother
app.set("views", tempPath);
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
