const express = require("express");
const { ListAlumnos } = require("../controllers/admin.controller");
const routerAdmin = express.Router();

routerAdmin.get("", ListAlumnos);

module.exports = routerAdmin;
