import Category from "../Home/Category/Category";
// import Product from "../Products/Product/Product";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import "./Home.scss";
// import { fetchDataFromApi } from "../../utils/api";
// import { Context } from "../../utils/Context";
import { useEffect } from "react";
import { fetchData } from "../../utils/api";
const Home = () => { 
    useEffect(() => {
         getCategories()
    },[]);
    const getCategories  = () => {
        fetchData("/api/categories").then(res => {
            console.log(res); 
        })
    }
    return( 
    <div>
        <Banner/>
        <div className="main_content">
            <div className="layout">
                <Category   />
                 <Products headingText="Related Products" />   
            </div>
        </div>
    </div>
    );
};

export default Home;
