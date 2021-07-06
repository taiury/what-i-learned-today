const express = require("express");

const sendEmailController = require("./controllers/sendEmailController");

const routes = express.Router();

routes.post("/sendEmail", sendEmailController.store);

module.exports = routes;
