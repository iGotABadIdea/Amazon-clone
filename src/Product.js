import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider';
function Product({id, title, image, price, rating}) {
    const [state,dispatch]=useStateValue();
    const addToCart=()=>{
        dispatch({
            type:"ADD_TO_CART",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        });
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
            <button onClick={addToCart} className="productButton">Add to Cart</button>
        </div>
    )
}

export default Product



