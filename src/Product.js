import React from 'react'
import './Product.css';
function Product() {
    return (
        <div className="product">
            <div className="productInfo">
            <p>The Lean startup</p>
            <p className="productPrice">
                <small>$</small>
                <strong>20.99</strong>
            </p>
            </div>
        </div>
    )
}

export default Product
