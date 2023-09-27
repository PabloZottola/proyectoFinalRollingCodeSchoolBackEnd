const express = require("express");
const { ListStudents } = require("../controllers/admin.controller");
const routerAdmin = express.Router();

routerAdmin.get("", ListStudents);

module.exports = routerAdmin;
