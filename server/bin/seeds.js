require("dotenv").config();
const mongoose = require("mongoose");
const Camp = require("../models/Camp");
const Shop = require("../models/Shop");
mongoose.connect(process.env.MONGO_URL);

const camps = [
  {
    name: "Ironhack",
    population: 120,
    chief: "5af1b85a826d180fc7ffc37a",
    livingSpots: 23,
    location: {
      type: "Point",
      coordinates: [40.3925, -3.698]
    }
  },
  {
    name: "Embajadores Camp",
    population: 98,
    chief: "5af18be23b3b00fb56f58919",
    livingSpots: 34,
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
