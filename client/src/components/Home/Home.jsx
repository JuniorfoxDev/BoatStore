import Category from "../Home/Category/Category";
// import Product from "../Products/Product/Product";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import "./Home.scss";
import { useEffect , useContext} from "react";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/Context";
const Home = () => {
    const {categories,setCategories,products,setProducts} = useContext(Context);
    useEffect( () => {
        getCategories();
        getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[ ]);
    const getCategories = ( ) =>{
        fetchDataFromApi("/api/categories?populate=*").then((res) =>{
             console.log(res);
             setCategories(res);
        });
    };
    const getProducts = ( ) =>{
        fetchDataFromApi("/api/products?populate=*").then((res) =>{
             console.log(res);
             setProducts(res);
        });
    } 
    return( 
    <div>
        <Banner/>
        <div className="main_content">
            <div className="layout">
                <Category categories={categories}   />
                 <Products headingText="Related Products" products={products} />   
            </div>
        </div>
    </div>
    );
};

export default Home;
