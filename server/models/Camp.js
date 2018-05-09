const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const campSchema = new Schema(
  {
    name: String,
    population: { type: Number, default: 0 },
    chief: { type: Schema.Types.ObjectId, ref: "User" },
    shops: [{ type: Schema.Types.ObjectId, ref: "Shop" }],
    livingSpots: Number,
    location: { type: { type: String }, coordinates: [Number] }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);
campSchema.index({ location: "2dsphere" });

const Camp = mongoose.model("Camp", campSchema);
module.exports = Camp;
