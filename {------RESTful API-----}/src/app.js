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
//-----------------------------------Reading(get)--------------------------------
app.get("/students", async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.send(studentsData);
  } catch (e) {
    res.status(404).send(e);
  }
});
//---------------------------------------get data of individual data--------------------
app.get("/students/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const studentData = await Student.find({ name: name });
    console.log(studentData);
    if (!studentData) {
      return res.status(404).send();
    } else {
      res.send(studentData);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});
//------------------------------------update data-------------------------------------------
app.patch("/students/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const updateData = await Student.findOneAndUpdate(
      { name: name },
      req.body,
      {
        new: true,
      }
    );
    res.send(updateData);
  } catch (e) {
    res.status(404).send(e);
  }
});
//--------------------------------------------Delete data----------------------------------------
app.delete("/students/:id", async (req, res) => {
  try {
    const deleteData = await Student.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(400).send();
    }
    res.send(deleteData);
  } catch (e) {
    res.status(500).send(e);
  }
});
//-------------------------------------------listening---------------------------------------------
app.listen(port, () => {
  console.log("connection established");
});
