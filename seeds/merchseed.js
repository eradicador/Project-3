const mongoose = require("mongoose");
const Merch = require("../models/merchModel");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/banterdb"
);

const merchSeed = [
    {
        name: "Black T-shirt",
        imageURL: "https://www.sunspel.com/media/catalog/product/cache/baa0e34cdade80720a07dd0f9239a90e/m/t/mtsh0001-bkaa-1_1.jpg",
        description: "100% Cotten",
        price: 15
    }
];

Merch
  .remove({})
  .then(() => Merch.collection.insertMany(merchSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });