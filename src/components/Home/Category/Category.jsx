/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Category.scss";
import React from 'react';
import cat1 from "../../../assets/category/cat-1.jpg";
const Category = ({categories}) => {
  return (
    <div className="category">
      <div className="categories_container">
            <div className="cat_img">
                <a href="#"> <img src={cat1} alt="" /></a>
            </div>
            <div className="cat_img">
            <a href="#"> <img src={cat1} alt="" /></a>
            </div>
            <div className="cat_img">
            <a href="#"> <img src={cat1} alt="" /></a>
            </div>
            <div className="cat_img">
            <a href="#"> <img src={cat1} alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Category
