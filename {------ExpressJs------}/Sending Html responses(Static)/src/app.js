const path = require("path");
const express = require("express");
const app = express();
Static_Loc = path.join(__dirname, "../public");
//builtIn middleware
app.use(express.static(Static_Loc));

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/About", (req, res) => {
  res.send("Hello from the About page");
});
app.listen(8000, () => {
  console.log("listening to the port 8000");
});
