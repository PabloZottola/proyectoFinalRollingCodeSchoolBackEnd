const express = require("express");
const { accountCreation } = require("../controllers/register.controllers");
const { validarCampos } = require("../middlewares/validarCampos");
const { check } = require("express-validator");
const { validarJWT } = require("../middlewares/validarJWT");

const routerRegister = express.Router();

routerRegister.post(
  "/register",
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
    check("password", "Contraseña invalida").not().isEmpty().isLength({
      min: 5,
      max: 20,
    }),

    validarCampos,
  ],
  accountCreation
);

module.exports = routerRegister;
