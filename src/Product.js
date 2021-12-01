import React from 'react'
import './Product.css';
function Product() {
    return (
        <div className="product">
            <div className="productInfo">
            <p>Acer Predator Hellios 300</p>
            <p className="productPrice">
                <small>$</small>
                <strong>1,199.99</strong>
            </p>
            <div className="productRating">
                <p>⭐⭐⭐⭐⭐</p>
            </div>
            </div>
            <img className="productImage"src="https://m.media-amazon.com/images/I/71k45hZkLmL._AC_SL1500_.jpg"></img>
            <button className="productButton">Add to basket</button>
        </div>
    )
}

export default Product
//pseudo commit-27  


