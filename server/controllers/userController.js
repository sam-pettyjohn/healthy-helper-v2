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
    retrieveRecipes: function (req, res) {
        let allergy = "";
        let diet = "";

        if (req.body.vegan === true) {
            allergy += "&health=vegan";
          }
          if (req.body.vegetarian === true) {
            allergy += "&health=vegetarian";
          }
          if (req.body.sugar_conscious === true) {
            allergy += "&health=sugar-conscious";
          }
          if (req.body.peanut_free === true) {
            allergy += "&health=peanut-free";
          }
          if (req.body.tree_nut_free === true) {
            allergy += "&health=tree-nut-free";
          }
          if (req.body.alcohol_free === true) {
            allergy += "&health=alcohol-free";
          }
          if (req.body.dietType) {
            diet += "&diet=" + req.body.dietType;
          }

          const apiURL = "https://api.edamam.com/search?";
          const apiKey = "&app_key=71473ff8952bb7da30bc7a2f30cb6e51";
          const apiID = "&app_id=f7341c7d";
          let searchRange =
            "&from=" + req.body.fromNumber + "&to=" + req.body.toNumber;
          let query = "q=" + req.body.searchQuery;
          // console.log(apiURL + query + apiID + apiKey + searchRange + diet + allergy);

          axios
          .get(apiURL + query + apiID + apiKey + searchRange + diet + allergy)
          .then(response => {
            if (response.data.hits.length !==0) {
              res.json(response.data);
            } else {
                res.send("Error");
            }
          });
    },
    updateFavorites: function(req, res) {
        db.User.findOne({
          email: req.params.user,
          favorites: { $in: req.body.fav }
        }).then(found => {
          if (found) {
            db.User.findOneAndUpdate(
              { email: req.params.user },
              { $pull: { favorites: req.body.fav } }
            )
              .then(dbModel => {
                res.json(dbModel);
              })
              .catch(err => res.status(422).json(err));
          } else {
            db.User.findOneAndUpdate(
              { email: req.params.user },
              { $addToSet: { favorites: req.body.fav } }
            )
              .then(dbModel => res.json(dbModel))
              .catch(err => res.status(422).json(err));
          }
        });
      },