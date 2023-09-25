const express = require("express");
const { ListAlumnos } = require("../controllers/admin.controller");
const routerLogin = express.Router();

routerLogin.get("", ListAlumnos);

module.exports = routerLogin;
