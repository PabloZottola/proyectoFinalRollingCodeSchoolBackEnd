const express = require("express");
const { loginUser } = require("../controllers/login.controllers");
const { check } = require("express-validator");

const routerLogin = express.Router();

routerLogin.post(
  "/login",
  [
    check("email", "E-mail o contraseña invalida")
      .not()
      .isEmpty()
      .isEmail()
      .isLength({
        min: 35,
      }),
    check("password", "E-mail o contraseña invalida").not().isEmpty().isLength({
      min: 5,
      max: 20,
    }),

    validarCampos,
  ],
  loginUser
);

module.exports = routerLogin;
