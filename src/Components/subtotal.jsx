import React from 'react';
import CurrencyFormat from 'react-currency-format';
import "./subtotal.css";

function Subtotal() {
    return (
        <div className="subTotal">
            <CurrencyFormat
            renderText={(value)=>(
                <>
                <p> Subtotal (0 items): <strong>0</strong>
                </p>
                <small className="subtotalGift">
                    <input type="checkbox" /> This Order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={0}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />    

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
