const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const merchSchema = new Schema({
  imageURL: { type: String, required: true },
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true }
});

const Merch = mongoose.model("Merch", merchSchema);

module.exports = Merch;
