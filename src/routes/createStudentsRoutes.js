const express = require("express");
const { validarCampos } = require("../middlewares/validarCampos");
const { check } = require("express-validator");

const {
  studentsCreation,
} = require("../controllers/createStudents.controller");
const { validarJWT } = require("../middlewares/validarJWT");
const routerStudentsCreation = express.Router();

routerStudentsCreation.post(
  "",
  [
    validarJWT,
    check("firstName", "Nombre invalido.").not().isEmpty().isLength({
      min: 2,
      max: 24,
    }),
    check("lastName", "Apellido invalido.").not().isEmpty().isLength({
      min: 2,
      max: 24,
    }),
    check("phone", "Numero de telefono invalido.").not().isEmpty().isLength({
      min: 9,
      max: 10,
    }),
    check("email", "E-mail no valisdo.").not().isEmpty().isEmail().isLength({
      max: 35,
    }),

    validarCampos,
  ],
  studentsCreation
);

module.exports = routerStudentsCreation;
