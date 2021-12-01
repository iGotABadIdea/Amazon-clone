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
            <img className="productImage" src={image} alt=""></img>
            <button className="productButton">Add to basket</button>
        </div>
    )
}

export default Product
//pseudo commit-27  


