const Merch = require("../models/videoModel");

// Defining methods for the videoController
module.exports = {
  findAll: function(req, res) {
    Video
      .find()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    Video
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
