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
        imageURL: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.sunspel.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fbaa0e34cdade80720a07dd0f9239a90e%2Fm%2Ft%2Fmtsh0001-bkaa-1_1.jpg&imgrefurl=https%3A%2F%2Fwww.sunspel.com%2Fus%2Fmens-short-sleeve-crew-neck-t-shirt-black.html&tbnid=yULTXiazQ0h-5M&vet=12ahUKEwjgvdGo8aLrAhUCLVMKHbnQC4sQMygAegUIARCMAw..i&docid=VSRlWnLsHhxdjM&w=1000&h=1382&q=black%20tshirt&ved=2ahUKEwjgvdGo8aLrAhUCLVMKHbnQC4sQMygAegUIARCMAw",
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