const express = require("express");
const { crearAlumnosCreation } = require("../controllers/crearAlumnos.controller");
const routerCrearAlumnos = express.Router();

routerCrearAlumnos.post("/crearAlumnos", crearAlumnosCreation);

module.exports = routerCrearAlumnos;