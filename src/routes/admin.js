const express = require("express");
const { validarJWT } = require("../middlewares/validarJWT");
const {
  ListStudents,
  ListTeacher,
  EditListStudent,
} = require("../controllers/admin.controller");
const routerAdmin = express.Router();

routerAdmin.get("/students", validarJWT, ListStudents);
routerAdmin.get("/teacher", validarJWT, ListTeacher);
routerAdmin.put("/editstudents", validarJWT, EditListStudent);
module.exports = routerAdmin;
