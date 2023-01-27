import "./CartItem.scss";
import React from 'react';
import prod from "../../../assets/products/earbuds-prod-1.webp";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
const CartItem = () => {
  const [quantity,setQuantity]  = useState(1);
  return (
    <div className="cart_item">
        <div className="cart_product">
            <div className="img_container">
                <img src={prod} alt="" />
            </div>
            <div className="prod_details">
                <div className="name">product name</div>
                <CloseIcon className="close_btn" />
                <div className="text">
                  <span>&#8377; 5464</span>
                </div>
                <div className="cart_quantity">
                    <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev  - 1))}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => setQuantity((prev)  => prev  + 1)}>+</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem;