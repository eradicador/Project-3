let mongoose = require("mongoose");
// let db = require("../models");

mongoose.connect("mongodb://localhost/banterdb", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let Questions = [
  {
    day: new Date(),
    title:"basketball part 1",
    descript:"placeholder description",
    videoUrl:"https://youtu.be/32oHIYU4pk8",
    level: 1,
    questions: [
      {
        q: "A football was used as the first basketball with a peach basket as a goal?",
        answer: true
      },
      {
        q: "In basketball, a field goal is worth 3 points?",
        answer: false
      },
      {
        q: "There is a jump ball to start each half of play in a basketball game.",
        answer: true
      }

    ]
  },
  {
    day: new Date(),
    title:"whatever",
    descript:"placeholder description",
    videoUrl:"https://youtu.be/JmwIUBGBb9I",
    level: 2,
    questions: [
      {
        q: "A time out is two minutes in length",
        answer: true
      },
      {
        q: "All non-jumpers must be out of the circle there is a jump ball",
        answer: false
      },
      {
        q: "Girls basketball game have 10 minute half times",
        answer: true
      }

    ]
  },
  {
    day: new Date(),
    title:"whatever",
    descript:"placeholder description",
    videoUrl:"",
    level: 3,
    questions: [
      {
        q: "There is a re-jump if both players who are jumping do not touch the ball",
        answer: true
      },
      {
        q: "Traveling is a violation",
        answer: false
      },
      {
        q: "Each team on the floor can have no more than 5 players",
        answer: true
      }

    ]
  }, {
    day: new Date(),
    title:"whatever",
    descript:"placeholder description",
    videoUrl:"",
    level: 4,
    questions: [
      {
        q: "A substitute must be called in by an official",
        answer: true
      },
      {
        q: "Basketball was developed by Dr. James A. Naismith",
        answer: false
      },
      {
        q: "When the player with the ball step or dribbles on the boundary lines or completely out of the line.",
        answer: true
      }

    ]
  },
];

db.banter.deleteMany({})
  .then(() => db.banter.collection.insertMany(workoutSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
