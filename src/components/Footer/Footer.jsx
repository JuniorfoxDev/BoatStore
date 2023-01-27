/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Footer.scss";
import React from 'react';
import {Link} from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="logo">
            <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Asset_2_288x-8_5.png?v=1661838672" alt="" />
        </div>
        <hr />  
          <div className="left">
            <h2>SHOP</h2>
            <div className="outer">
                <a href="#">True Wireless Earbuds </a>
                <a href="#">Wireless Headphones</a>
                <a href="#">Home Audio</a>
                <a href="#">Smart Watches</a>
                <a href="#">Misfit</a>
                <a href="#">Rock in India</a>
            </div>
          </div>
          <hr />
          <div className="right">
                <h2>HELP</h2>
                <div className="outer">
                    <a href="#">Track Your Order</a>
                    <a href="#">Return Policy </a>
                    <a href="#">Bulk Orders</a>
                    <a href="#">Why Buy Direct </a>
                    <a href="#">Warranty Support </a>
                    <a href="#">FAQs </a>
                </div>
          </div>
          <hr />
          <div className="middle"> 
            <h2>COMPANY</h2>
            <div className="outer">
                <a href="#">About boAt</a>
                <a href="#">News</a>
                <a href="#">Read Our Blog</a>
                <a href="#">Careers</a>
                <a href="#">Security</a>
                <a href="#">Investors Relation </a>
                <a href="#">Warranty Policy</a>
            </div>
          </div>
      </div>
      <div className="centered">
        <div className="download">
            <span>Download the App</span>
            <div className="down_links">
                {/* <Link className="link">
                    <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/google-play-store_new.png?v=1666071594" alt="" />
                </Link> */}
                <a href="" className="gplay"></a>
                <a href="" className="appstore"></a>
            </div>
        </div>
        <div className="paym">
            <span>We Accept </span>
            <p></p>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  )
}

export default Footer
