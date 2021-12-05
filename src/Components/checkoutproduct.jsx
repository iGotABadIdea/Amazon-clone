import React from 'react'
import "./checkoutproduct.css";

function CheckoutProduct({ id, title, image, price, rating}) 
{
    const removeItemFromBasket = () =>[

    ]
    return ( 
        <div className=" checkoutProduct ">
            <img className="checkoutProductImage" src={image} alt=""/>
            <div className="checkoutProductInfo">
                <p className="checkoutProductTitle">{title}</p>
                <p classsName="checkoutProductPrice">
                    <small>$ </small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProductRating">
                    {Array(rating)
                    .fill()
                    .map((_, i)=>(
                        <p>⭐</p>
                    ))}
                </div>
                
                <button onCLick={removeItemFromBasket}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
