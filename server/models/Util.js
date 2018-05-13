const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const utilSchema = new Schema(
  {
    category: {type: String, enum: ['supermarket', 'church', 'car', 'boat']},
    location: { type: { type: String }, coordinates: [Number] }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);
utilSchema.index({ location: "2dsphere" });

const Util = mongoose.model("Util", utilSchema);
module.exports = Util;
