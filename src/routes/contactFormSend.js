const express = require("express");
const { contactForm } = require("../controllers/contactFormSend.controller");
const routerContactForm = express.Router();

routerContactForm.post("", contactForm);

module.exports = routerContactForm;