import React from 'react';
import "./Header.scss";
import {Link} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect , useState} from 'react';
import Search from "./Search/Search";
import Cart from '../Cart/Cart';
const Header = () => {
    const [scrolled,setScrolled] = useState(false);
    const [showCart,SetCart] = useState(false);
    const [showSearch,setShowSearch] = useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if(offset > 200){
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
  useEffect( () => {
        window.addEventListener("scroll",handleScroll);
  }, []);
    return (
    <>
    <header className={`header ${scrolled ? 'sticky_header' : ' '}`}>
       <div className="header-content">
         <div className="left">
            <div className="item">
                <Link className='link' to="/">Home</Link>
            </div>
            <div className="item">
                <Link className='link' to="/">About</Link>
            </div>
            <div className="item">
                <Link className='link' to="/">Categories</Link>
            </div>
         </div>
         <div className="center">   
                <Link className='link' to="/"><span>BOAT</span>-STORE</Link>
         </div>
         <div className="right">
            <div className="icons">
                <SearchIcon onClick={() => setShowSearch(true)} />
                <FavoriteBorderIcon/>
                <div className="cartIcon" onClick={() => SetCart(true)}>
                    <ShoppingCartIcon/>
                    <span>0</span>
                </div>
            </div>
         </div>
       </div>
    </header>
    {showCart && <Cart SetCart={SetCart} />}
    {showSearch && <Search  setShowSearch={setShowSearch} />}
</>
  )
}

export default Header
