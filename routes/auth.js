const express = require("express");
const {
  crearUsuario,
  loginUsuario,
} = require("../controllers/auth.controllers");
const routerRegister = express.Router();

routerRegister.post("/crearusuario", crearUsuario);
routerRegister.post("/loginusuario", loginUsuario);

module.exports = routerRegister;
