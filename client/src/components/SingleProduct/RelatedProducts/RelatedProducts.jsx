import React from 'react'
import Products from "../../Products/Products";
const RelatedProducts = () => {
  return (
    <div className='related_container'>
        <Products headingText="Related Products"  seeAll={true} />
    </div>
  )
}

export default RelatedProducts;