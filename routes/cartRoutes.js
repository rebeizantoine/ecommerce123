const express = require('express');
const router = express.Router();
const {
  getAllCarts,
  getCartByID,
  addCart,
  updateCartByID,
  deleteCartByID,
} = require('../controllers/cartsController');

router.get('/getAll', getAllCarts);

router.get('/carts/:cartId', getCartByID);

router.post('/carts', addCart);

router.put('/carts/:cartId', updateCartByID);

router.delete('/carts/:cartId', deleteCartByID);

module.exports = router;
