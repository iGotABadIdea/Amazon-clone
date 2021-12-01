import React from 'react'
import './Product.css';
function Product({title, image, price, rating}) {
    return (
        <div className="product">
            <div className="productInfo">
            <p>{title}</p>
            <p className="productPrice">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="productRating">
                {Array(rating)
                .fill()
                .map((_,i)=>(<p>⭐</p>
                ))}
            </div>
            </div>
            <img className="productImage"src="https://m.media-amazon.com/images/I/71k45hZkLmL._AC_SL1500_.jpg"></img>
            <button className="productButton">Add to basket</button>
        </div>
    )
}

export default Product
//pseudo commit-27  


