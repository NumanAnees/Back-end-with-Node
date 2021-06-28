const express = require("express");
const app = express();
require("./database/connection");
const Student = require("./models/students");
port = process.env.PORT || 8000;
app.use(express.json());
//creating a new student
// app.post("/students", (req, res) => {
//   console.log(req.body);
//   const user = new Student(req.body);
//   user
//     .save()
//     .then(() => {
//       res.status(201).send(user);
//     })
//     .catch((e) => {
//       res.status(400).send(e);
//     });
// });
//----------------------Using async/await------------------------------------
app.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const CreateUser = await user.save();
    res.status(201).send(CreateUser);
  } catch (e) {
    res.status(400).send(e);
  }
});
app.listen(port, () => {
  console.log("connection established");
});
