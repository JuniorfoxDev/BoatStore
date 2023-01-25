import "./Banner.scss";
import React from 'react';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import { useState } from "react";
const Banner = () => {
    const [currentSlide,setCurrentSlide] = useState(0);
    const data = [
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/2000-650_462c1f09-625e-48b3-8c0b-353c548dd0d6_1600x.jpg?v=1673635413",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/WSC-Desktop_dad0fc88-3fc8-4ed8-becb-b7901e4b37f4_1600x.jpg?v=1673853393",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/2000x650_f60dcd57-3f35-4f38-a32f-3f9666996225_1600x.jpg?v=1673538078",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/we-banner-sharktank_2_9a61da5e-4113-4a94-b877-aeb7f16e7e72_1600x.jpg?v=1673003585",
    ];
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1 );
    };
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
    };
  return (
    <div className="banner">
        <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt=""  />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
            <img src={data[3]} alt="" />
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <WestIcon className="arrow"/>
            </div>
            <div className="icon" onClick={nextSlide}>
                <EastIcon className="arrow"/>
            </div>
        </div>
    </div>
  )
}

export default Banner