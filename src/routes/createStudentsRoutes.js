const express = require("express");
const { studentsCreation } = require("../controllers/createStudents.controller");
const routerStudentsCreation = express.Router();

routerStudentsCreation.post("", studentsCreation);

module.exports = routerStudentsCreation;