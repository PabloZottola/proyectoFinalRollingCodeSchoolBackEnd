const express = require("express");
const { loginUser } = require("../controllers/login.controllers");
const routerLogin = express.Router();

routerLogin.post("/login", loginUser);

module.exports = routerLogin;
