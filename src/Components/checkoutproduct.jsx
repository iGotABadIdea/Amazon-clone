import React from 'react'
import "./checkoutproduct.css";

function CheckoutProduct({
    id, title, image, price, rating
}) {
    return ( 
        <div className=" checkoutProduct grid grid-cols-5">
            <img className="checkoutProductImage" src={image} alt=""/>
            <div className="checkoutProductInfo">
                <p className="checkoutProductTitle">{title}</p>
                <p classsName="checkoutProductPrice">
                    <small>$ </small>
                    <strong>{price}</strong>
                </p>
                <div className="chekcoutProductRating">
                    {Array(rating)
                    .fill()
                    .map((_, i)=>(
                        <p>⭐</p>
                    ))}
                </div>
                <button>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
