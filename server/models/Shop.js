const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const shopSchema = new Schema({
  name: String,
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  camp:  { type: Schema.Types.ObjectId, ref: "Camp" }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Shop = mongoose.model('Shop', shopSchema);
module.exports = Shop;
