const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// recipe Schema
const recipe = new Schema({
    uri: String,
    calories: String,
    protein: String,
    fat: String,
    carb: String,
    label: String,
    url: String,
    time: Number,
    ingredients: [String],
    image: String,
    _id: false
  });