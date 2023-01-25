import React from 'react';
import { Link } from 'react-router-dom';
import "./Collab.css";
const Collab = () => {
    const data = [
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/mint_0566185f-75d7-4819-a2a2-e2acc4535e78_200x.png?v=1649066803",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/forbes_1_1bc6c7c7-bb8c-4735-b56e-88eb9f904b55_200x.png?v=1665989470",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/techradar_1_ba476d16-16de-4a29-baa2-537f33fc7f88_200x.png?v=1649066820",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/ET_1_9f80aa59-c905-4886-b75f-5b96808f2903_200x.png?v=1649066820",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/gadgets360_1_6a0c2c78-109a-4cbc-be58-05b893a41d4a_231x.png?v=1649066821"
    ];
  return (
    <div className='collabration'>
        <div className="container"> 
            <Link to="">
                <div className="col">
                    <img src={data[0]} alt="" />
                </div>
            </Link>
            <Link to="./">
                <div className="col">
                    <img src={data[1]} alt="" />
                </div>
            </Link>
            <Link to="./">
                <div className="col">
                    <img src={data[2]} alt="" />
                </div>
            </Link>
            <Link to="./">
                <div className="col">
                    <img src={data[3]} alt="" />
                </div>
            </Link>
            <Link to="./">
                <div className="col">
                    <img src={data[4]} alt="" />
                </div>
            </Link>
            </div>
    </div>
  )
}

export default Collab;