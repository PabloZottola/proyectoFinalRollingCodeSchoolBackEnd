const express = require("express");
const { accountCreation } = require("../controllers/register.controllers");
const routerRegister = express.Router();

routerRegister.post("/register", accountCreation);

module.exports = routerRegister;
