import "./Newsletter.scss";
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const Newsletter = () => {
  return (
    <div className="news">
        <div className="news_content">
            <h3>NEWSLETTER</h3>
            <h1>SIGN UP FOR LATEST UPDATES AND OFFERS</h1>
            <div className="subs">
                <input type="email" placeholder="Email Address" />
                <button className="subscribe">Subscribe</button>
            </div>
            <p>Will be used in accordance with our Privacy Policy </p>
            <div className="icons">
                <div className="icon">
                    <FacebookIcon className="social"/>
                </div>
                <div className="icon">
                    <InstagramIcon className="social"/>
                </div>
                <div className="icon">
                    <TwitterIcon className="social"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter
