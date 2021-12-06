import React from 'react'
import './Product.css';
import { useDispatch } from 'react-redux';
import { addToCart } from './slices/cartSlice';
function Product({id, key, title, image, price, rating}) {
    const dispatch= useDispatch();

    const addItemToCart = () => {
        const product = {
             id,
             key,
             title, 
             image, 
             price, 
             rating
        };
        dispatch(addToCart(product))
    };
      
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
            <button onClick={addItemToCart} className="productButton">Add to Cart</button>
        </div>
    )
}

export default Product



