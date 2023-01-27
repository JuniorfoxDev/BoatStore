import "./SingleProduct.scss";
import React from 'react';
import prod from "../../assets/products/earbuds-prod-1.webp";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { useState } from "react";
const SingleProduct = () => {
    const [quantity,setQuantity]  = useState(1);
  return (
    <div className="single_product">
        <div className="layout">
            <div className="single_container">
                <div className="left">
                    <img src={prod} alt="" />
                </div>
                <div className="right">
                    <span className="name">Name</span>
                    <span className="rating">4.5 / 5</span>
                    <span className="desc">
                        desc
                    </span>
                    <div className="cart_button">
                        <div className="cart_quantity">
                            <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev  - 1))}>-</button>
                            <span>{quantity}</span>
                            <button onClick={() => setQuantity((prev)  => prev  + 1)}>+</button>
                        </div>
                        <button className="add_cart">ADD TO CART</button>
                    </div>
                    <div className="cat_info">
                        <div className="cart_category">
                            <span className="cat_bold">Category : Earbuds </span>
                        </div>
                    </div>
                </div>
            </div>
            <RelatedProducts/>
        </div>
    </div>
  )
}

export default SingleProduct