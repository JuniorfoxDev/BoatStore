import "./Cart.scss";
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CartItem from '../Cart/CartItem/CartItem';
const Cart = ({SetCart}) => {
  return (
    <div className="cart_container">
      <div className="opc_cart"></div>
      <div className="cart_content">
        <div className="cart_header">
            <span className="heading">Shopping Cart</span>
            <span className="close_btn" onClick={() => SetCart(false)}>
                <CloseIcon/>
            </span>
        </div>
        {/* <div className="cart_empty">
            <AddShoppingCartIcon className="empty"/>
            <span>Your Cart is Empty</span>
            <span className="shop">START SHOPPING</span>
        </div> */}
        <>
        <CartItem/>
        <div className="cart_footer">
            <div className="subtotal">
                <div className="text">Subtotal : </div>
                <div className="text total">&#8377; 54684 </div>
            </div>
            <div className="button">
                <button className="checkout_btn">Checkout</button>
            </div>
        </div>
        </>
      </div>
    </div>
  )
}

export default Cart;
