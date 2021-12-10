import React from 'react'
import { removeFromCart, addToCart } from '../slices/cartSlice';
import {useDispatch} from "react-redux"
import "./checkoutproduct.css";

function CheckoutProduct({ id, title, image, price, rating}) 
{   
    const dispatch=useDispatch()
    const addItemToCart = () =>{
        const product = {
             id,
             title, 
             image, 
             price, 
             rating
        };
        dispatch(addToCart(product));              //push item into redux store from cart list
    }
    const removeItemFromCart = () => {
        dispatch(removeFromCart({id}))
    }
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
                        <p key={id}>⭐</p>
                    ))}
                </div>
                <button onClick={addItemToCart}>Add to cart</button>
                <button onClick={removeItemFromCart}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
