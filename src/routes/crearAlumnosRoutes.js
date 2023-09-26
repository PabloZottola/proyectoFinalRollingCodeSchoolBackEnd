const express = require("express");
const { crearAlumnosCreation } = require("../controllers/crearAlumnos.controllers");
const routerCrearAlumnos = express.Router();

routerCrearAlumnos.post("/crearAlumnos", crearAlumnosCreation);

module.exports = routerCrearAlumnos;