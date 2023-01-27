import "./Category.scss";
import React from 'react';
import Products from "../Products/Products"
const Category = () => {
  return (
            <div className="category_container">
              <div className="layout">
              <div className="category_title">Category Title</div>
              <Products innerPage={true}  />
              </div>
            </div>
  )
}

export default Category;