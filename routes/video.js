const router = require("express").Router();
const merchController = require("../controllers/videoController");

// Matches with "/api/merch"
router.route("/videos")
  .get(merchController.findAll)
  

// Matches with "/api/merch/:id"
router
  .route("/:id")
  .get(merchController.findById)
 

module.exports = router;