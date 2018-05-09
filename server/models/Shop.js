const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const shopSchema = new Schema({
  name: String,
  items: [{ type: Schema.Types.ObjectId, ref: "Item" }],
  owner: { type: Schema.Types.ObjectId, ref: "User" }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Shop = mongoose.model('Shop', shopSchema);
module.exports = Shop;
