const router = require("express").Router();
const merchController = require("../controllers/merchController");

// Matches with "/api/merch"
router.route("/merch")
  .get(merchController.findAll)
  

// Matches with "/api/merch/:id"
router
  .route("/:id")
  .get(merchController.findById)
 

module.exports = router;
