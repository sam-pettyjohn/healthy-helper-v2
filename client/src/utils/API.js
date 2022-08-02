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
  }

};