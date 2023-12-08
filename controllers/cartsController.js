const Cart = require('../models/cartModel');

const getAllCarts = async (req, res) => {
  try {
    const carts = await Cart.find({});
    res.status(200).json({
      success: true,
      message: 'All carts retrieved successfully',
      data: carts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Unable to retrieve carts',
      error: error.message,
    });
  }
};

const getCartByID = async (req,res)=>{
    try{
        const cart = await Cart.findById(req.params.cartId);
        if (!cart){
            return res.status(404).json({
                success:false,
                message:"Cart Not Found",
                data:null,
            })
        }
        res.status(200).json({
            success: true,
            data: cart,  
        });
        
    }catch (error){
        res.status (400).json({
            success:false,
            message:"Unable to retrieve cart",
            error:error.message,
        });
    }
}

const addCart = async (req, res) => {
  try {
    const newCart = await Cart.create(req.body);
    res.status(200).json({
      success: true,
      message: 'Cart added successfully',
      data: newCart,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Unable to add cart',
      error: error.message,
    });
  }
};

const updateCartByID = async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.cartId,
      req.body,
      { new: true }
    );
    if (!updatedCart) {
      return res.status(404).json({
        success: false,
        message: 'Cart not found',
        data: null,
      });
    }
    res.status(200).json({
      success: true,
      message: 'Cart updated successfully',
      data: updatedCart,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Unable to update cart',
      error: error.message,
    });
  }
};

const deleteCartByID = async (req, res) => {
  try {
    const deletedCart = await Cart.findByIdAndRemove(req.params.cartId);
    if (!deletedCart) {
      return res.status(404).json({
        success: false,
        message: 'Cart not found',
        data: null,
      });
    }
    res.status(200).json({
      success: true,
      message: 'Cart deleted successfully',
      data: deletedCart,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Unable to delete cart',
      error: error.message,
    });
  }
};

module.exports = {
  getAllCarts,
  getCartByID,
  addCart,
  updateCartByID,
  deleteCartByID,
};
     