const router = require("express").Router();
const userController = require("../../controllers/userController");

// GET Routes
router.get("/:user", userController.findAll);

// PUT Routes
router.put("/:user", userController.updateFavorites);
router.put("/meal/:user", userController.updateMeal);
router.put("/settings/:user", userController.updateSettings);
router.put("/remove_meal/:user", userController.removeMeal);

// POST Routes
router.post("/user", userController.createUser);
router.post("/searching", userController.retrieveRecipes);
router.post("/menu/:user", userController.updateMenu);
router.post("/preferences", userController.createPreferences);
router.post("/sms", userController.sendSMS);
router.post("/email", userController.sendEmail);

module.exports = router;