const db = require("../models");
const axios = require("axios");
const config = require("../config");
let preferences;
const twilio = require("twilio");
const client = new twilio(config.accountSid, config.authToken);
const nodemailer = require("nodemailer");

module.exports = {
    findAll: function(req, res) {
      db.User.findOne({ email: req.params.user })
        .then(dbModel => {
          res.json(dbModel);
        })
        .catch(err => res.status(422).json(err));
    },
    createUser: function(req, res) {
        db.User.findOne({ email: req.body.email })
         .then(dbUser => {
            if (!dbUser) {
             db.User.create({
                email: req.body.email,
                preferences: preferences
             });
             res.json("new user was added");
            } else {
                res.json("existing user");
            }
         })
         .catch(err => res.status(422).json(err));
    },