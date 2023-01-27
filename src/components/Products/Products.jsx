import "./Products.scss";
import React from 'react';
import Product from "./Product/Product"; 
// import Link from "react-router-dom";
const Products = ({innerPage,headingText,seeAll}) => {
  return (
    <div className="products_container">
        <div className="top">
{  !innerPage &&     <div className="section_heading">{headingText}</div>}
            {!seeAll && <div className="allpro"><a href="">See All</a></div>}
            </div>
            <div className="products">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
    </div>
  )
}

export default Products;