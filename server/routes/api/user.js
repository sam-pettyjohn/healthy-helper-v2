const router = require("express").Router();
const userController = require("../../controllers/userController");


// GET Routes
router.get("/:user", userController.findAll);




module.exports = router;