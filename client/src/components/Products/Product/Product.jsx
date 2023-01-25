import "./Product.scss";
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
const Product = () => {
  return (
    <div className="product_container">
       <div className="thumbnail">
        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_300x.png?v=1668756103" alt="" />
       </div>
       <div className="data">
            <span className="name">Product Name</span>
            <span className="rating"><StarIcon className="icon"/>Product Rating</span>
            <hr />
            <div className="price">
                <span className="off">offer</span>
                <span className="proprice">&#8377; Product Price</span>
            </div>
            <span className="ship">Free Shipping Available</span>
            <button className="add">add to cart </button>
       </div>
    </div>
  )
  
}
export default Product
