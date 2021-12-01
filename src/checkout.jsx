import React from 'react';
import "./checkout.css";

function Checkout() {
    return (
        <div className="checkOut">
            <div className="checkoutLeft">
                <img className="checkoutAd" src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg" alt=""/>
                <div >
                    <h2 className="checkoutTitle">Your Shopping Basket</h2>
                    </div>
            </div>
            <div className="checkoutRight">
                <h2>Sub total will be added here </h2>
            </div>
        </div>
    )
}

export default Checkout
