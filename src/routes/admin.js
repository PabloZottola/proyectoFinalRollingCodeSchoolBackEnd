const express = require("express");
const { validarJWT } = require("../middlewares/validarJWT");
const {
  ListStudents,
  ListTeacher,
  NoteStudent,
} = require("../controllers/admin.controller");
const routerAdmin = express.Router();

routerAdmin.get("/students", validarJWT, ListStudents);
routerAdmin.get("/teacher", validarJWT, ListTeacher);
routerAdmin.put("/notes", validarJWT, NoteStudent);
module.exports = routerAdmin;
