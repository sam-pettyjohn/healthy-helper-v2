const db = require("../models");
const axios = require("axios");
const config = require("../config");
let preferences;
const twilio = require("twilio");
const client = new twilio(config.accountSid, config.authToken);
const nodemailer = require("nodemailer");