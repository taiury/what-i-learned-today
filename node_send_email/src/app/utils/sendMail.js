"use strict";
require("dotenv/config");

const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL_AUTH_USER,
    pass: process.env.MAIL_AUTH_PASSWORD,
  },
});

module.exports = transporter;
