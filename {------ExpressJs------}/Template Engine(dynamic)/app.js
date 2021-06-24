const express = require("express");
const app = express();
//set view engine
app.set("view engine", "hbs");
//template engine route
app.get("", (req, res) => {
  res.render("index", { name: "Numan Anees" });
});
app.listen(8000, () => {
  console.log("listening to the port 8000");
});
