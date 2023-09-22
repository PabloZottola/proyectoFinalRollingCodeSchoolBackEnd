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
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  rol: {
    type: String,
    default: "Profesor",
  },
});

module.exports = model("profesor", userSchema);
