import "./Search.scss";
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import prod from "../../../assets/products/earbuds-prod-1.webp";
const Search = ({setShowSearch}) => {
  return (
    <div className="search_container">
      <div className="form_field">
        <input 
        type="text"
        autoFocus
        placeholder="Search for products"
         />
         <CloseIcon onClick={() => setShowSearch(false)} className="close_btn"/>
      </div>
      <div className="search_result_container">
        <div className="search_results">
            <div className="search_result_item">
                <div className="img_container">
                    <img src={prod} alt="" />
                </div>
                <div className="prod-details">
                    <div className="name">product name</div>
                    <div className="desc">product desc</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Search;
