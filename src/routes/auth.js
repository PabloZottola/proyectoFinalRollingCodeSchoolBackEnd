const express = require("express");
const { crearUsuario } = require("../controllers/auth.controllers");
const routerRegister = express.Router();

routerRegister.post("/crearusuario", crearUsuario);

module.exports = routerRegister;
