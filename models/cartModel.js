const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const cartsSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    required: true,
  },
  products: {
    type: String,
    required: true,
  },
  quantitiy_purchased: {
    type: Number,
    required: true,
  },
});

const Cart = mongoose.model('Cart', cartsSchema);

module.exports = Cart;
