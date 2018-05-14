const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const purchaseSchema = new Schema(
  {
    buyer: { type: Schema.Types.ObjectId, ref: "User" },
    seller: { type: Schema.Types.ObjectId, ref: "User" },
    concept: String,
    price: Number
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Purchase = mongoose.model("Purchase", purchaseSchema);
module.exports = Purchase;
