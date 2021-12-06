import React from 'react';
import CurrencyFormat from 'react-currency-format';
import "./subtotal.css";

function Subtotal({items, total}) {
    return (
        <div className="subTotal">
            <CurrencyFormat
            renderText={(value)=>(
                <>
                <p> Subtotal ({items.length}) items : <strong>{value}</strong>
                </p>
                <small className="subtotalGift">
                    <input type="checkbox" /> This Order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={total}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />    

            <button>
               Proceed To Checkout    {/*I am not using next Auth authentication   */}
            </button>
        </div>
    )
}

export default Subtotal
