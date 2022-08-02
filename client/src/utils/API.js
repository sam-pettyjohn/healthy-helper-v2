import axios from "axios";

export default {
  // Search Edamam for ALL recipes
  searchRecipes: function(q) {
    const apiURL = "https://api.edamam.com/search?";
    const apiKey = "&app_key=8629aef3922a50c5c60fab9ffeb60e08";
    const apiID = "&app_id=fab5dc9b";
    let to = "&to=50";
    let query = "q=" + q;
    let health = "&health=alcohol-free";
    return axios.get(apiURL + query + apiID + apiKey + to + health);
  },

  // GET single recipe information with URI
  getSingleRecipe: function(id) {
    const apiURL = "https://api.edamam.com/search?";
    const apiKey = "&app_key=8629aef3922a50c5c60fab9ffeb60e08";
    const apiID = "&app_id=fab5dc9b";
    let r =
      "&r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_" + id;
    return axios.get(apiURL + r + apiID + apiKey);
  },

  getDBRecipes: function(user) {
    return axios.get("api/" + user);
  },
  updateMenu: function(user, newMenu) {
    return axios.post("api/menu/" + user, { weeklyMenu: newMenu });
  },
  updateMeal: function(user, day, meal, recipe) {
    return axios.put("api/meal/" + user, {
      day: day,
      meal: meal,
      recipe: recipe
    });
  },

  // CRUD user information
  saveUser: function(user) {
    return axios.post("api/user", { email: user });
  },
  postUserPreferences: function(preferenceValues) {
    return axios.post("api/preferences", preferenceValues);
  },
  updatePref: function(user, preferences) {
    return axios.put("api/settings/" + user, preferences);
  },
  postHealthyHelperValues: function(searchCriteria) {
    return axios.post("api/searching", searchCriteria);
  },
  updateFavs: function(user, newFav) {
    return axios.put("api/" + user, { fav: newFav });
  },
  removeMeal: function(user, day, meal) {
    return axios.put("api/remove_meal/" + user, { day: day, meal: meal });
  },
  
  // WIP for TWILIO
  sendSMS: function(phone, text) {
    return axios.post("api/sms", { phone: phone, text: text });
  },
  sendEmail: function(email, text) {
    return axios.post("api/email", { email: email, text: text });
  }

};