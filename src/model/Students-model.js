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
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  Notes: {
    type: Array,
    default: [
      {
        Matematicas: "0",
        LenguayLiteratura: "0",
        Biologia: "0",
        Fisica: "0",
        Quimica: "0",
        Economia: "0",
        Geografia: "0",
        Historia: "0",
        EducacionFisica: "0",
      },
      {
        Matematicas: "0",
        LenguayLiteratura: "0",
        Biologia: "0",
        Fisica: "0",
        Quimica: "0",
        Economia: "0",
        Geografia: "0",
        Historia: "0",
        EducacionFisica: "0",
      },
      {
        Matematicas: "0",
        LenguayLiteratura: "0",
        Biologia: "0",
        Fisica: "0",
        Quimica: "0",
        Economia: "0",
        Geografia: "0",
        Historia: "0",
        EducacionFisica: "0",
      },
      {
        Matematicas: "0",
        LenguayLiteratura: "0",
        Biologia: "0",
        Fisica: "0",
        Quimica: "0",
        Economia: "0",
        Geografia: "0",
        Historia: "0",
        EducacionFisica: "0",
      },
    ],
  },
  monthlyFees: {
    type: String,
    default: "00-00",
  },
  BlockedStudent: {
    type: Boolean,
    default: true,
  },
  rol: {
    type: String,
    default: "Alumno",
  },
});

module.exports = model("Student", userSchema);
