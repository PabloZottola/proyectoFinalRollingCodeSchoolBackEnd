const { Schema, model } = require("mongoose");

const userSchema = Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  yearOfStudy: {
    type: Number,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  Notes: {
    type: Array,
    default: "",
  },
  monthlyFees: {
    type: String,
    default: "",
  },
  rol: {
    type: String,
    default: "Alumno",
  },
});

module.exports = model("Student", userSchema);
