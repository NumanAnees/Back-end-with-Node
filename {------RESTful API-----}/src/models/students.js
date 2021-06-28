const mongoose = require("mongoose");
const validator = require("validator");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    validate(val) {
      if (!validator.isEmail(val)) {
        throw new Error("it is not an email");
      }
    },
    unique: [true, "Email is allready present"],
  },
  phone: {
    type: Number,
    min: 10,
    unique: true,
  },
});
//-----------------------Creating new collection using models---------------------------

const Student = new mongoose.model("Student", StudentSchema);
module.exports = Student;
