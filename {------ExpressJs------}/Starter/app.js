const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/About", (req, res) => {
  res.send("Hello from the About page");
});
app.listen(8000, () => {
  console.log("listening to the port 8000");
});
