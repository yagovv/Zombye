require("dotenv").config();
const mongoose = require("mongoose");
const Camp = require("../models/Camp");
const Shop = require("../models/Shop");
mongoose.connect(process.env.MONGO_URL);

const camps = [
  {
    name: "Ironhack",
    population: 45,
    chief: "5af1b85a826d180fc7ffc37a",
    shops: [],
    livingSpots: 50,
    location: {
      type: "Point",
      coordinates: [40.3925, -3.698]
    }
  },
  {
    name: "Goiko",
    population: 12,
    chief: "5af18be23b3b00fb56f58919",
    shops: [],
    livingSpots: 20,
    location: {
      type: "Point",
      coordinates: [40.405075, -3.703251]
    }
  }
];

Camp.create(camps, err => {
  if (err) {
    throw err;
  }
  console.log(`created ${camps.length} camps`);
});
