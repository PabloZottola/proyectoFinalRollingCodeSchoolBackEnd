const express = require("express");
const { studentsCreation } = require("../controllers/createStudents.controller");
const routerCrearAlumnos = express.Router();

routerCrearAlumnos.post("/studentsCreation", studentsCreation);

module.exports = routerStudentsCreation;