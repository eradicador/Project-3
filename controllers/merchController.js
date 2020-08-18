const Merch = require("../models/merchModel");

// Defining methods for the merchController
module.exports = {
  findAll: function(req, res) {
    Merch
      .find()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    Merch
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
